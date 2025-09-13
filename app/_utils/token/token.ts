import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

export interface IId {
  id: string | number;
}

export const signToken = (id: IId): string => {
  const secret = process.env.JWT_SECRET;
  const expiresIn: any = process.env.JWT_EXPIRES_IN;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }


  const options: SignOptions = {
    expiresIn: expiresIn || '7d'
  };

  return jwt.sign({ id }, secret, options);
};

export const verifyToken = (token: string): string | JwtPayload => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  return jwt.verify(token, secret);
};