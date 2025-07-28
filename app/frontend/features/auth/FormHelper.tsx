import React from 'react';
import InputField from '@ui/Input';
import ShowPasswordButton from '@ui/ShowPassword';
import { z, ZodType } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type RegistrationFormProps = {
	showPassword: boolean;
	showPasswordToggle: () => void;
	error?: string;
};

export default function RegistrationForm({
	showPassword,
	showPasswordToggle,
}: RegistrationFormProps) {
	const schema = z
		.object({
			firstName: z
				.string()
				.min(2, { message: "Ім'я має містити щонайменше 2 символи" }),
			telephoneNumber: z
				.string()
				.min(7, { message: 'Номер телефону має містити щонайменше 7 символів' })
				.regex(/^\d+$/, { message: 'Телефон має містити лише цифри' }),
			emailAddress: z.email({ message: 'Невірний формат email' }),
			password: z
				.string()
				.refine(
					(val) =>
						val.length >= 6 &&
						/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(val),
					{
						message:
							'Пароль має містити мінімум 6 символів, одну велику, малу літеру, цифру та спецсимвол',
					}
				),
			confirmPassword: z.string(),
			agreement: z.boolean().refine((val) => val === true, {
				message: 'Ви повинні підтвердити, що ви не робот',
			}),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Паролі не співпадають',
			path: ['confirmPassword'],
		});

	type FormData = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
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

	const submitData: SubmitHandler<FormData> = (data) => {
		console.log('Submitted Data:', data);
		console.log('Form Errors:', errors);
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
