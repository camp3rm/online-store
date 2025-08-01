import React, { RefCallback } from 'react';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
	placeholder?: string;
	name?: string;
	type?: string;
	ref: RefCallback<HTMLInputElement>;
};

const InputField = ({
	className,
	placeholder,
	name,
	type,
	ref,
	...props
}: InputFieldProps) => (
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
);

export default InputField;
