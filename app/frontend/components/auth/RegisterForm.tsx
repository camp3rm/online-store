'use client';
import React from 'react';
import { useState } from 'react';
import './register.scss';
import Image from 'next/image';
import Form from '@features/auth/FormHelper';

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const showPasswordToggle = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<section className="wrapper_register-form">
			<div className="register_form-container">
				<div className="register_form-head">
					<Image
						className="signin_icon"
						src="/images/sign-up-icon.svg"
						width={32.5}
						height={30}
						alt="sign in"
					/>
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
