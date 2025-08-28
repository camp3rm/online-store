import React from 'react';
import Image from 'next/image';
import './about.scss';
import Button from '@ui/Button';
import MoreInfo from '@public/icons/more-info.svg'

export default function aboutUs() {
	return (
		<div className="about_container">
			<div className="to_catalog">
				<h1 className="about_title">Найкращі саджанці в GreenShop</h1>
				<Button
					text="До каталогу"
					className="to_catalog-button"
				/>
			</div>
			<div className="about_us">
				<div className="about_description">
					<h2 className="about_description-title">Про нас</h2>
					<p className="about_description-text">
						GreenShop — це не просто магазин саджанців. Це місце, де починається
						любов до природи, де кожен паросток має значення, а кожна квітка —
						історію.
					</p>
				</div>
				<div className="our_advantages">
					<ul className="our_advantages-list">
						<li className="our_advantages-list-item">
							<span>01</span>
							<span>Досвід та довіра</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span>02</span>
							<span> Асортимент з любов’ю</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span>03</span>
							<span>Даруємо зелене щастя</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span>04</span>
							<span>Доставка по всій Україні</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span>05</span>
							<span>Чому з нами приємно садити</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
