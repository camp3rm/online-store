import { IId, signToken } from '@/app/_utils/token/token';
import { iUserToken } from '@/app/_utils/token/IUserToken';

interface UserResponse {
  _id: IId;
  name?: string;
  email?: string;

  [key: string]: any;
}

interface TokenResponse {
  status: 'success' | 'error';
  token: string;
  data: {
    user: UserResponse;
  };
}

export const createToken = (user: iUserToken): Response => {
  try {
    const token = signToken(user._id);

    const expiresInDays = parseInt(process.env.JWT_EXPIRES_IN || '7');
    const maxAge = expiresInDays * 24 * 60 * 60;

    const isProduction = process.env.NODE_ENV === 'production';
    const cookie = `jwt=${token}; Max-Age=${maxAge}; HttpOnly; Path=/; ${isProduction ? 'Secure; SameSite=Lax;' : ''}`;

    const userResponse: UserResponse = {
      _id: user._id,
      name: user.name,
      email: user.email
    };

    const responseData: TokenResponse = {
      status: 'success',
      token,
      data: { user: userResponse }
    };

    return new Response(
      JSON.stringify(responseData),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': cookie
        }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Failed to create token'
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