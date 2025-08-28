import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { RegistrationFormData } from '@features/auth/auth.schema';
import { registerUser } from '@api/registerUser';
import RegistrationFields from './RegistrationFields';
import { useRegistrationForm } from '@hooks/useRegistartionForm';

type Props = {
	showPassword: boolean;
	showPasswordToggle: () => void;
};

export default function RegistrationForm({
	showPassword,
	showPasswordToggle,
}: Props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useRegistrationForm();

	const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
		const mappedData = {
			name: data.firstName,
			number: data.telephoneNumber,
			email: data.emailAddress,
			password: data.password,
		};
		try {
			await registerUser(mappedData);
			alert('Реєстрація пройшла успішно!');
			reset();
		} catch (error) {
			const axiosError = error as AxiosError<{ message: string }>;
			alert(axiosError.response?.data?.message ?? 'Сервіс недоступний');
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="register_form"
			noValidate>
			<div className="input_box">
				<RegistrationFields
					register={register}
					errors={errors}
					showPassword={showPassword}
					showPasswordToggle={showPasswordToggle}
				/>
			</div>
			<button className="submit_button">Зареєструватися</button>
		</form>
	);
}
