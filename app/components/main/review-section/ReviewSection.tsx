import React from 'react';
import Image from 'next/image';
import './styles.scss';

export default function ReviewSection() {
	return (
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
	)
}
