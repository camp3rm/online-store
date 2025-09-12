import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	registrationSchema,
	RegistrationFormData,
} from '@features/auth/auth.schema';

export const useRegistrationForm = () =>
	useForm<RegistrationFormData>({
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
