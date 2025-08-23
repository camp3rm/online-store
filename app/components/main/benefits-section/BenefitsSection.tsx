import React from 'react'
import Image from 'next/image';
import './styles.scss';

export default function benefitSection() {
	return (
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
	)
}
