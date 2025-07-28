import React from 'react';

type InputFieldProps = {
	name: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
};

export default function ShowConfirmPasswordButton({
	className,
	type,
	onClick,
	name,
}: InputFieldProps) {
	return (
		<button
			name={name}
			type={type}
			onClick={onClick}
			className={className}></button>
	);
}
