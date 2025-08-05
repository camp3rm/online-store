// components/RegistrationFields.tsx
import React from 'react';
import InputField from '@ui/Input';
import ShowPasswordButton from '@ui/ShowPassword';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { RegistrationFormData } from './auth.schema';

type Props = {
	register: UseFormRegister<RegistrationFormData>;
	errors: FieldErrors<RegistrationFormData>;
	showPassword: boolean;
	showPasswordToggle: () => void;
};

export default function RegistrationFields({
	register,
	errors,
	showPassword,
	showPasswordToggle,
}: Props) {
	return (
		<>
			<InputField
				type="text"
				placeholder="Ім'я"
				className="input_field"
				{...register('firstName')}
			/>
			{errors.firstName && (
				<span className="error_message">{errors.firstName.message}</span>
			)}

			<InputField
				type="tel"
				placeholder="Номер телефону"
				className="input_field"
				{...register('telephoneNumber')}
			/>
			{errors.telephoneNumber && (
				<span className="error_message">{errors.telephoneNumber.message}</span>
			)}

			<InputField
				type="email"
				placeholder="Електронна пошта"
				className="input_field"
				{...register('emailAddress')}
			/>
			{errors.emailAddress && (
				<span className="error_message">{errors.emailAddress.message}</span>
			)}

			<div className="password_box">
				<InputField
					type={showPassword ? 'text' : 'password'}
					placeholder="Пароль"
					className="input_field"
					{...register('password')}
				/>
				{showPassword ? (
					<ShowPasswordButton
						name="password"
						type="button"
						onClick={showPasswordToggle}
						className="show_password_button"
					/>
				) : (
					<ShowPasswordButton
						name="password"
						type="button"
						onClick={showPasswordToggle}
						className="close_password_button"
					/>
				)}
			</div>
			{errors.password && (
				<span className="error_message">{errors.password.message}</span>
			)}

			<div className="password_box">
				<InputField
					type={showPassword ? 'text' : 'password'}
					placeholder="Підтвердіть пароль"
					className="input_field"
					{...register('confirmPassword')}
				/>
				{showPassword ? (
					<ShowPasswordButton
						name="password"
						type="button"
						onClick={showPasswordToggle}
						className="show_password_button"
					/>
				) : (
					<ShowPasswordButton
						name="password"
						type="button"
						onClick={showPasswordToggle}
						className="close_password_button"
					/>
				)}
			</div>
			{errors.confirmPassword && (
				<span className="error_message">{errors.confirmPassword.message}</span>
			)}

			<div className="checkbox_container">
				<input
					type="checkbox"
					className="checkbox_field"
					{...register('agreement')}
				/>
				<span>Я не робот</span>
			</div>
			{errors.agreement && (
				<span className="error_message">{errors.agreement.message}</span>
			)}
		</>
	);
}
