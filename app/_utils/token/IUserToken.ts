import { IUser } from '@/app/_utils/interfaces/UserInterfaces';
import { IId } from '@/app/_utils/token/token';

export interface iUserToken {
  _id: IId;
  password?: string;
  name?: string;
  email?: string;

  [key: string]: any;
}

export interface TokenResponse {
  status: 'success' | 'error';
  token: string;
  data: {
    user: Omit<IUser, 'password'>;
  };
}

export interface ErrorTokenResponse {
  status: 'error';
  message: string;
  token?: never;
  data?: never;
}