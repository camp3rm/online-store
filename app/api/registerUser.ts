
import axios, { AxiosError } from 'axios';
import { RegistrationFormData } from '@features/auth/auth.schema';

export const registerUser = async (data: RegistrationFormData) => {
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
