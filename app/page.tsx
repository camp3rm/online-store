'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './main.scss';

export default function Home() {
	return (
		<div className="main_page">
			<section className="hero_section">
				<div className="hero_section-header">
					<h1 className="hero_section-title">
						Створіть сад своєї мрії вже сьогодні
					</h1>
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
								src="/our_proposition/tree.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Дерева | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									<Image
										src="/icons/next-arrow-icon.svg"
										alt="next-arrow-icon"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/flower.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Квіти | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/bush.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Кущі | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/seedling.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Розсада | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									Детальніше
								</Link>
							</div>
						</div>
					</div>
					<div className="catalog_offers-link">
						<Link
							href="/catalog"
							className="catalog_offers-link-text">
							Дивитись усе
						</Link>
					</div>
				</div>
			</section>

			<section className="benefits_section">
				<div className="benefits_section-header">
					<h3 className="benefits_section-title">
						Ваш надійний партнер у садівництві
					</h3>
					<p className="benefits_section-description">
						З 1990 року ми допомагаємо садівникам створювати квітучі сади з
						рослинами найвищої якості
					</p>
				</div>
				<div className="benefits_cards">
					<div className="benefits_card">
						<div className="benefits_card-container">
							<div className="granteed_quality">
								<Image
									src="/icons/benefits/like.svg"
									alt="guarantee-icon"
									width={34}
									height={34}
									className="granteed_quality-icon"
								/>
								<h5>Гарантована якість</h5>
							</div>
							<span>
								Кожна рослина вирощена з турботою та має гарантію приживлення
							</span>
						</div>
					</div>
					<div className="benefits_card">
						<div className="benefits_card-container">
							<div className="free_delivery">
								<Image
									src="/icons/benefits/delivery.svg"
									alt="guarantee-icon"
									width={34}
									height={34}
									className="free_delivery-icon"
								/>
								<h5>Швидка та безкоштовна доставка</h5>
							</div>
							<span>
								Безкоштовна доставка для замовлень від 1500 грн прямо до ваших
								дверей
							</span>
						</div>
					</div>
					<div className="benefits_card">
						<div className="benefits_card-container">
							<div className="expert_consultation">
								<Image
									src="/icons/benefits/plant.svg"
									alt="guarantee-icon"
									width={34}
									height={34}
									className="expert_consultation-icon"
								/>
								<h5>Експертні поради</h5>
							</div>
							<span>
								Отримуйте доступ до наших гайдів із догляду за рослинами та
								консультацій
							</span>
						</div>
					</div>
					<div className="benefits_card">
						<div className="benefits_card-container">
							<div className="eco_packaging">
								<Image
									src="/icons/benefits/leaf.svg"
									alt="guarantee-icon"
									width={34}
									height={34}
									className="eco_packaging-icon"
								/>
								<h5>Екологічна упаковка</h5>
							</div>
							<span>
								Ми використовуємо біорозкладні матеріали для безпечної доставки
								та захисту довкілля
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="reviews_section">
				<h3 className="reviews_section-title">Відгуки клієнтів</h3>
				<div className="reviews_section-container">
					<div className="reviews_card-container">
						<div className="reviews_card">
							<Image
								src="/user.svg"
								alt="user-review"
								width={34}
								height={34}
								className="reviews_card-icon"
							/>
							<span className="rating">5/5</span>
							<p className="reviews_card-text">
								Замовив яблуню — приїхала дуже якісна, все відповідає опису. Сад
								стає красивішим із кожним днем!
							</p>
						</div>
					</div>
					<div className="reviews_card-container">
						<div className="reviews_card">
							<Image
								src="/user.svg"
								alt="user-review"
								width={34}
								height={34}
								className="reviews_card-icon"
							/>
							<span className="rating">5/5</span>
							<p className="reviews_card-text">
								Квіти просто неймовірні! Багато сортів, всі яскраві та свіжі.
							</p>
						</div>
					</div>
					<div className="reviews_card-container">
						<div className="reviews_card">
							<Image
								src="/user.svg"
								alt="user-review"
								width={34}
								height={34}
								className="reviews_card-icon"
							/>
							<span className="rating">5/5</span>
							<p className="reviews_card-text">
								Кущі приїхали великі і здорові, дуже швидко прижилися. Дякую за
								якість!
							</p>
						</div>
					</div>
					<div className="reviews_card-container">
						<div className="reviews_card">
							<Image
								src="/user.svg"
								alt="user-review"
								width={34}
								height={34}
								className="reviews_card-icon"
							/>
							<span className="rating">5/5</span>
							<p className="reviews_card-text">
								Завжди беру розсаду у цьому магазині — ніколи не підводили.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="faq_section">
				<h3 className="faq_section-title">Поширені запитання</h3>
				<p className="faq_section-description">
					Маєте запитання щодо вибору, догляду чи доставки саджанців? Ми зібрали
					відповіді на найпоширеніші з них, щоб допомогти вам створити сад вашої
					мрії!
				</p>
				<div className="faq_section-container">
					<div className="faq_card-container">
						<div className="faq_card">
							<p className="faq_card-question">
								Як швидко я отримаю своє замовлення?
							</p>
							<div className="icon-box">
								<Image
									src="/icons/next-arrow-icon.svg"
									alt="next-arrow-icon"
									width={34}
									height={34}
									className="faq_card-icon"
								/>
							</div>
						</div>
					</div>
					<div className="faq_card-container">
						<div className="faq_card">
							<p className="faq_card-question">
								Як пакуються рослини для відправки?
							</p>
							<div className="icon-box">
								<Image
									src="/icons/next-arrow-icon.svg"
									alt="next-arrow-icon"
									width={34}
									height={34}
									className="faq_card-icon"
								/>
							</div>
						</div>
					</div>
					<div className="faq_card-container">
						<div className="faq_card">
							<p className="faq_card-question">
								Чи можна оплатити при отриманні?
							</p>
							<div className="icon-box">
								<Image
									src="/icons/next-arrow-icon.svg"
									alt="next-arrow-icon"
									width={34}
									height={34}
									className="faq_card-icon"
								/>
							</div>
						</div>
					</div>
					<div className="faq_card-container">
						<div className="faq_card">
							<p className="faq_card-question">
								Чи можу я замовити доставку у вихідні?
							</p>
							<div className="icon-box">
								<Image
									src="/icons/next-arrow-icon.svg"
									alt="next-arrow-icon"
									width={34}
									height={34}
									className="faq_card-icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
