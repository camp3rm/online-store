import React from 'react';
import Image from 'next/image';
import './styles.scss';

export default function FaqSection() {
	return (
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
	)
}
