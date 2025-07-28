import React from 'react';
import InputField from '@ui/Input';
import PasswordInput from '@ui/PasswordInput';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type RegistrationFormProps = {
	showPassword: boolean;
	showConfirmPassword: boolean;
	showPasswordToggle: () => void;
	showConfirmPasswordToggle: () => void;
};

export default function RegistrationForm() {
	const schema = z
		.object({
			firstName: z
				.string()
				.min(1, { message: 'Невірний формат імени' })
				.max(15, { message: 'Ім`я повинно містити від 2 до 15 символів' }),
			telephoneNumber: z
				.string()
				.min(7, { message: 'Номер телефону має містити щонайменше 7 символів' })
				.regex(/^\d+$/, { message: 'Телефон має містити лише цифри' }),
			email: z.email().min(1, { message: 'Невірний формат email' }),
			password: z
				.string()
				.min(6, { message: 'Пароль має містити мінімум 6 символів' })
				.regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
					message:
						'Пароль має містити одну велику, малу літеру, цифру та спецсимвол',
				}),
			confirmPassword: z.string().min(6),
			agreement: z.literal(true),
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
		defaultValues: {
			firstName: '',
			telephoneNumber: '',
			email: '',
			password: '',
			confirmPassword: '',
			agreement: false,
		},
	});
	const submitData = (data: FormData) => {
		console.log('Submitted Data:', data);
	};

	return (
		<form
			onSubmit={handleSubmit(submitData)}
			className="register_form">
			<div className="input_box">
				<InputField
					placeholder="Ім`я"
					type="text"
					className="input_field"
					{...register('firstName')}
					required
					error={errors.firstName?.message}
				/>

				<InputField
					placeholder="Номер телефону"
					type="text"
					className="input_field"
					{...register('telephoneNumber')}
					required
					error={errors.telephoneNumber?.message}
				/>

				<InputField
					placeholder="Email"
					type="text"
					className="input_field"
					{...register('email')}
					required
					error={errors.email?.message}
				/>

				<div className="password_fields">
					<PasswordInput
						placeholder="Пароль"
						type="password"
						className="input_field"
						{...register('password')}
						required
						error={errors.password?.message}
						showPasswordToggle={showPasswordToggle}
					/>
				</div>

				<div className="password_fields">
					<PasswordInput
						placeholder="Підтвердження пароля"
						type="password"
						className="input_field"
						{...register('confirmPassword')}
						required
						error={errors.confirmPassword?.message}
						showPasswordToggle={showConfirmPasswordToggle}
					/>
				</div>
			</div>

			<div className="checkbox_box">
				<label className="checkbox_label">
					<InputField
						type="checkbox"
						className="checkbox_field"
						{...register('agreement')}
						required
					/>
					Я не робот
				</label>
				{errors.agreement && (
					<span className="error_message">
						Потрібно підтвердити, що ви не робот
					</span>
				)}
			</div>

			<button
				type="submit"
				className="submit_button">
				Зареєструватися
			</button>
		</form>
	);
}
