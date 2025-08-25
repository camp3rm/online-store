import React from 'react';
import Link from 'next/link';
import logo from '@assets/Logo.svg';
import Image from 'next/image';
import './footer.scss';

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
						<ul className="catalog_list">
							<li className='catalog_item'>Дерева</li>
							<li className='catalog_item'>Квіти</li>
							<li className='catalog_item'>Кущі</li>
							<li className='catalog_item'>Розсада</li>
						</ul>
					</div>
					<div className="contact_container">
						<h4 className="contact_title">Контакти</h4>
					</div>
					<div className="about_container">
						<h4 className="about_title">Про Нас</h4>
					</div>
				</div>
				<div className="copyright">
					<Image
						className="copy_icon"
						src="/icons/copyright.svg"
						width={16}
						height={16}
						alt="Copyright Icon"
					/>
					<span className="copyright_text">GreenShop 2025</span>
				</div>
			</div>
		</footer>
	);
}
