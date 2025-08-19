import React from 'react';
import Link from 'next/link';
import logo from '@assets/Logo.svg';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer_container">
				<div className="logo">
					<Image
						className="logo_icon"
						src={logo}
						width={82}
						height={75}
						alt="GreenShop"
					/>
				</div>
				<div className="navigation">
					<div className="catalog_container">
						<h4 className="catalog_title">Каталог</h4>
						<ul>
							<li>Дерева</li>
							<li>Квіти</li>
							<li>Кущі</li>
							<li>Розсада</li>
						</ul>
					</div>
					<div>
						<h4 className="catalog_title">Контакти</h4>
					</div>
					<div>
						<h4 className="catalog_title">Про Нас</h4>
					</div>
				</div>
				<div className='copyright'>
					<Image 
						className="copy_icon"
						src='/icons/copyright.svg'
						width={16}
						height={16}
						alt="Copyright Icon"
					/>

					GreenShop 2025</div>
			</div>
		</footer>
	);
}
