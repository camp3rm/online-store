import React from 'react';
import logo from '@public/icons/order-logo.svg'
import Image from 'next/image';

export default function OrderingForm() {
	return <div className="order_form-container">
		<Image 
		src={logo}
		alt='Logo'
		className='logo'
		width={100}
		height={89}
		/>
	</div>;
}
