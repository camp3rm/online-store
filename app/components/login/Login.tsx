'use client';
import React, { useState, useRef } from 'react';
import './login.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [realPassword, setRealPassword] = useState('');
  const [displayPassword, setDisplayPassword] = useState('');
  const [showFullPassword, setShowFullPassword] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { handleSubmit, register, formState: { errors, isValid } } = useForm<LoginFormData>({ mode: 'all' });
  const router = useRouter();

  const customHandle = async (data: LoginFormData) => {
    setErrorMessage(null);
    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        ...data,
        password: realPassword
      });

      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      router.push('/dashboard');
    } catch (error) {
      setErrorMessage("Ви ввели неправильний email або пароль. Перевірте дані та спробуйте ще раз.");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  // визначаємо новий реальний пароль
  let newRealPassword = realPassword;
  if (value.length > realPassword.length) {
    // додано символ
    newRealPassword = realPassword + value[value.length - 1];
  } else {
    // видалено символ
    newRealPassword = realPassword.slice(0, value.length);
  }

  setRealPassword(newRealPassword);

  if (!showFullPassword) {
    const starsCount = Math.max(0, newRealPassword.length - 1);
    const lastChar = value.length > realPassword.length ? value[value.length - 1] : '';
    const masked = '●'.repeat(starsCount) + lastChar;
    setDisplayPassword(masked);

    // ховаємо останній символ через 1 сек
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setDisplayPassword('●'.repeat(newRealPassword.length));
    }, 1000);
  } else {
    setDisplayPassword(newRealPassword);
  }
};

  const toggleShowPassword = () => {
    setShowFullPassword(prev => !prev);
    if (!showFullPassword) {
      // показати весь пароль
      setDisplayPassword(realPassword);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    } else {
      // повернутися до маски
      setDisplayPassword('*'.repeat(realPassword.length));
    }
  };

  return (
    <div className='wrapper_login-form'>
      <div className={`wrapper_login-container ${errorMessage ? 'error_active' : ''}`}>
        <div className='wrapper_login_title'>
          <img className='login_icon' src="/images/sign-up-icon.svg" alt='login icon' />
          <h1 className='login_title'>Вхід</h1>
        </div>

        {errorMessage && (
          <div className='wrapper_error-message'>
            <img className='error_icon' src='/images/error.svg' alt='error icon' />
            <div className='error_message'>{errorMessage}</div>
          </div>
        )}

        <form className='login_form' onSubmit={handleSubmit(customHandle)}>
          <div className='input_box'>
            <img className='input_icon' src='/images/email.svg' alt='email icon' />
            <input
              type='text'
              placeholder='E-mail'
              {...register('email', { required: true })}
              className='input_field'
            />
          </div>

          <div className='input_box'>
            <img className='input_icon' src='/images/password.svg' alt='password icon' />
            <input
              type="text"
              placeholder='Пароль'
              value={displayPassword}
              onChange={handlePasswordChange}
              className='input_field'
            />
            <img
              className={showFullPassword ? 'input_icon_eye_open' : 'input_icon_eye_close'}
              src={showFullPassword ? "/images/openEye.svg" : "/images/closeEye.svg"}
              alt={showFullPassword ? "сховати пароль" : "показати пароль"}
              onClick={toggleShowPassword}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className='wrapper_login_forgot'>
            <a href='#'>Забули пароль?</a>
          </div>
          <button className='login_button' disabled={!isValid} type='submit'>
            Увійти
          </button>
        </form>

        <div className='wrapper_register-link'>
          <span>Не маєте акаунта?</span>
          <a href='/register'>Зареєструйтеся</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
