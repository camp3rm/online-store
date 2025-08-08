'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './header.scss';
import logo from '@assets/Logo.svg';
import search_icon from '@assets/search-icon.svg';
import basket_icon from '@assets/basket-icon.svg';
import Image from 'next/image';

export default function Header() {
	const [status, setStatus] = useState<string>('close');
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);
	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
		setStatus(status === 'open' ? 'close' : 'open');
	};

	return (
		<header className="header">
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
				<nav className="nav_menu">
					<ul className="nav_list">
						<li className="nav_list-item">
							{/* <Link
								to="hero"
								smooth={true}
								duration={500}
								className="nav-list_link">
								Каталог
							</Link> */}
							Каталог
						</li>
						<li className="nav_list-item">
							{/* <Link
								to="skillsTools"
								smooth={true}
								duration={500}
								className="nav_list-link">
								Контакти
							</Link> */}
							Контакти
						</li>
						<li className="nav_list-item">
							{/* <Link
								to="projects"
								smooth={true}
								duration={500}
								className="nav-list_link">
								Про нас
							</Link> */}
							Про нас
						</li>
					</ul>
				</nav>
			</div>
			<div className="user_panel">
				<div className="user_panel-icons">
					<Image
						className="search_icon"
						src={search_icon}
						width={30}
						height={30}
						alt="search_icon"
					/>
					<Image
						className="basket_icon"
						src={basket_icon}
						width={30}
						height={30}
						alt="basket_icon"
					/>
				</div>
				<div className="user_panel-login">
					<a
						href="#"
						className="login_link">
						Вхід
					</a>
				</div>
			</div>
			<div
				onClick={toggleMenuHandler}
				className="toggle_menu">
				<span className={`toggle_menu-line ${status}`}></span>
				<span className={`toggle_menu-line ${status}`}></span>
				<span className={`toggle_menu-line ${status}`}></span>
			</div>
			{toggleMenu && (
				<div className="burger_menu-container">
					<nav className="nav_menu">
						<ul className="burger_menu-list">
							<li className="nav_list-item">
								{/* <Link
								to="hero"
								smooth={true}
								duration={500}
								className="nav-list_link">
								Каталог
							</Link> */}
								Каталог
							</li>
							<li className="nav_list-item">
								{/* <Link
								to="skillsTools"
								smooth={true}
								duration={500}
								className="nav_list-link">
								Контакти
							</Link> */}
								Контакти
							</li>
							<li className="nav_list-item">
								{/* <Link
								to="projects"
								smooth={true}
								duration={500}
								className="nav-list_link">
								Про нас
							</Link> */}
								Про нас
							</li>
						</ul>
					</nav>
					<div className="burger_menu__user-panel">
						<div className="burger-menu__icons">
							<Image
								className="search_icon"
								src={search_icon}
								width={30}
								height={30}
								alt="search_icon"
							/>
							<Image
								className="basket_icon"
								src={basket_icon}
								width={30}
								height={30}
								alt="basket_icon"
							/>
						</div>
						<div className="user_panel-login">
							<a
								href="#"
								className="login_link">
								Вхід
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
