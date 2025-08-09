import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './main.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default async function Home() {
	return (
		<div className="main_page">
			<section className="hero_section">
				<div className="hero_section-header">
					<h3 className="hero_section-title">
						Створіть сад своєї мрії вже сьогодні
					</h3>
					<p className="hero_section-description">
						Обирайте якісні саджанці, розсаду та рослини для будь-якого сезону
						та клімату
					</p>
				</div>
				<div className="to_catalog">
					<button className="to_catalog-button">До каталогу</button>
				</div>
			</section>
			<section className="catalog_offers_section">
				<div className="catalog_offers-container">
					<h3 className="catalog_offers-title">
						Ознайомтеся з нашими пропозиціями
					</h3>
					<p className="catalog_offers-description">
						Знайдіть ідеальні рослини для вашого саду: від плодових дерев до
						яскравих квітів
					</p>
					<div className="catalog_offers-cards">
						<div className="catalog_offers-card">
							<Image
								src="/images/catalog-offer-1.jpg"
								alt="catalog-offer-1"
								width={300}
								height={300}
							/>
							<div>
								<span>Дерева | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/images/catalog-offer-1.jpg"
								alt="catalog-offer-1"
								width={300}
								height={300}
							/>
							<div>
								<span>Квіти | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/images/catalog-offer-1.jpg"
								alt="catalog-offer-1"
								width={300}
								height={300}
							/>
							<div>
								<span>Кущі | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/images/catalog-offer-1.jpg"
								alt="catalog-offer-1"
								width={300}
								height={300}
							/>
							<div>
								<span>Розсада | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
