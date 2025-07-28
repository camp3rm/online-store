import React, { forwardRef } from 'react';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
	className?: string;
	placeholder?: string;
	type?: string;
	name?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ error, className, placeholder, type, name, onChange }, ref) => (
		<div>
			<input
				ref={ref}
				type={type}
				className={className}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
			/>
			{error && <span className="error_message">{error}</span>}
		</div>
	)
);

InputField.displayName = 'InputField';

export default InputField;
