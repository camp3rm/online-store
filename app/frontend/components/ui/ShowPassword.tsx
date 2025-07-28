import React from 'react';

type ButtonFieldProps = {
	name: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ShowPasswordButton({
	className,
	type,
	onClick,
	name,
}: ButtonFieldProps) {
	return (
		<button
			name={name}
			type={type}
			onClick={onClick}
			className={className}></button>
	);
}
