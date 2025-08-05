import { z } from 'zod';

export const registrationSchema = z
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
						'Пароль має містити мінімум 6 символів, одну велику, малу літеру, цифру та спеціальний символ',
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

export type RegistrationFormData = z.infer<typeof registrationSchema>;
