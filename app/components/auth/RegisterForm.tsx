'use client';
import React from 'react';
import { useState } from 'react';
import './register.scss';
import Image from 'next/image';
import Form from '@features/auth/RegistrationForm';

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const showPasswordToggle = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<section className="wrapper_register-form">
			<div className="register_form-container">
				<Image
					src="./register-icon.svg"
					width={30}
					height={30}
					alt="register form"
					className="register_icon"
				/>
				<div className="register_form-head">
					<h1 className="register_title">Реєстрація</h1>
				</div>
				<Form
					showPassword={showPassword}
					showPasswordToggle={showPasswordToggle}
				/>
				<div className="login_redirect">
					Вже маєте акаунт?
					<a
						className="login_redirect-link"
						href="/login">
						Увійдіть
					</a>
				</div>
			</div>
		</section>
	);
}
