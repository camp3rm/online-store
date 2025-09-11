import { signToken } from '@/app/_utils/token/token';
import { iUserToken } from '@/app/_utils/token/IUserToken';

export const createToken = (user: iUserToken): Response => {
  try {

    const token = signToken(user._id);

    const expiresInDays = parseInt(process.env.JWT_EXPIRES_IN || '7');
    const maxAge = expiresInDays * 24 * 60 * 60;

    const isProduction = process.env.NODE_ENV === 'production';
    const cookie = `jwt=${token}; Max-Age=${maxAge}; HttpOnly; Path=/; ${isProduction ? 'Secure; SameSite=Lax;' : ''}`;

    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;

    return new Response(
      JSON.stringify({
        status: 'success',
        token,
        data: { user: userWithoutPassword }
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': cookie
        }
      }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Failed to create token',
        error: (err as Error).message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};