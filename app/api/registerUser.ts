
import axios, { AxiosError } from 'axios';
import { RegistrationFormData } from '@features/auth/auth.schema';
export type RegisterUserDto = {
  name: string;
  number: string;
  email: string;
  password: string;
};

export const registerUser = async (data: RegisterUserDto) => {
  try {
    const response = await axios.post('/auth/register', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    if (axiosError.response) {
      throw new Error(axiosError.response.data?.message || 'Помилка реєстрації');
    }

    throw new Error('Сервіс недоступний');
  }
};
