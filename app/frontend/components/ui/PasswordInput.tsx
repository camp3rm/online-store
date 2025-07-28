import React, { forwardRef } from 'react';
import ShowPassword from '@ui/ShowPassword';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
	className?: string;
	placeholder?: string;
	type?: 'button' | 'submit' | 'reset' | "string" |"password";
	name?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	showPasswordToggle: () => void;
};


const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ error, className, placeholder, type, name, onChange, showPasswordToggle }, ref) => (
		<div>
			<input
				ref={ref}
				type={type}
				className={className}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
			/>
			<ShowPassword className="show_password_button" type="button" onClick={showPasswordToggle} name='showPassword' />
			{error && <span className="error_message">{error}</span>}
		</div>
	)
);

InputField.displayName = 'InputField';

export default InputField;
