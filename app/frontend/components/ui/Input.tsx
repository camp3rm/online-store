import React, { forwardRef } from 'react';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
	placeholder?: string;
	name?: string;
	type?: string;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ className, placeholder, name, type, ...props }, ref) => (
		<div className="password_box">
			<input
				ref={ref}
				type={type}
				className={className}
				placeholder={placeholder}
				name={name}
				{...props}
			/>
		</div>
	)
);

InputField.displayName = 'InputField';

export default InputField;
