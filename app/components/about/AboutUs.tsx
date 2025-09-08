import React from 'react';
import Image from 'next/image';
import './about.scss';
import Button from '@ui/Button';
import MoreInfo from '@public/icons/more-info.svg'
import Catalog from "@components/main/catalog-section/CatalogSection"


export default function AboutUs() {
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
							<span className="our_advantages-item-number">01</span>
							<span className='our_advantages-item-title'>Досвід та довіра</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">02</span>
							<span className='our_advantages-item-title'> Асортимент з любов’ю</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">03</span>
							<span className='our_advantages-item-title'>Даруємо зелене щастя</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">04</span>
							<span className='our_advantages-item-title'>Доставка по всій Україні</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">05</span>
							<span className='our_advantages-item-title'>Чому з нами приємно садити</span>
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
			<div className="cat">
				<Catalog />
			</div>
		</div>
	);
}
