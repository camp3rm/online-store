import React from 'react';
import InputField from '@ui/Input';
import ShowPasswordButton from '@ui/ShowPassword';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, RegistrationFormData } from './auth.schema';
import { registerUser } from '@api/registerUser';
import { AxiosError } from 'axios';

type RegistrationFormProps = {
	showPassword: boolean;
	showPasswordToggle: () => void;
	error?: string;
};

export default function RegistrationForm({
	showPassword,
	showPasswordToggle,
}: RegistrationFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
		criteriaMode: 'all',
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			telephoneNumber: '',
			emailAddress: '',
			password: '',
			confirmPassword: '',
			agreement: false,
		},
	});

	const submitData: SubmitHandler<RegistrationFormData> = async (data) => {
		try {
			const result = await registerUser(data);
			alert('Реєстрація пройшла успішно!');
			reset();
		} catch (error) {
			const axiosError = error as AxiosError<{ message: string }>;
			alert(axiosError.response?.data?.message ?? 'Сервіс недоступний');
		}
	};

	return (
		<form
			onSubmit={handleSubmit(submitData)}
			className="register_form"
			noValidate>
			<div className="input_box">
				<InputField
					type="text"
					placeholder="Ім'я"
					className="input_field"
					{...register('firstName')}
					required
				/>
				{errors.firstName && (
					<span className="error_message">{errors.firstName?.message}</span>
				)}
				<InputField
					type="tel"
					placeholder="Номер телефону"
					className="input_field"
					{...register('telephoneNumber')}
					required
				/>
				{errors.telephoneNumber && (
					<span className="error_message">
						{errors.telephoneNumber?.message}
					</span>
				)}
				<InputField
					type="email"
					placeholder="Електронна пошта"
					className="input_field"
					{...register('emailAddress')}
					required
				/>
				{errors.emailAddress && (
					<span className="error_message">{errors.emailAddress?.message}</span>
				)}
				<div className="password_box">
					<InputField
						type={showPassword ? 'text' : 'password'}
						placeholder="Пароль"
						className="input_field"
						{...register('password')}
						required
					/>
					<ShowPasswordButton
						name="showPassword"
						type="button"
						onClick={showPasswordToggle}
						className="show_password_button"
					/>
				</div>
				{errors.password && (
					<span className="error_message">{errors.password?.message}</span>
				)}
				<div className="password_box">
					<InputField
						type={showPassword ? 'text' : 'password'}
						placeholder="Підтвердіть пароль"
						className="input_field"
						{...register('confirmPassword')}
						required
					/>
					<ShowPasswordButton
						name="showPassword"
						type="button"
						onClick={showPasswordToggle}
						className="show_password_button"
					/>
				</div>
				{errors.confirmPassword && (
					<span className="error_message">
						{errors.confirmPassword?.message}
					</span>
				)}
			</div>
			<div className="checkbox_box">
				<div className="checkbox_container">
					<input
						type="checkbox"
						className="checkbox_field"
						{...register('agreement')}
						required
					/>
					<span>Я не робот</span>
				</div>
				{errors.agreement && (
					<span className="error_message">{errors.agreement?.message}</span>
				)}
			</div>

			<button className="submit_button">Зареєструватися</button>
		</form>
	);
}
