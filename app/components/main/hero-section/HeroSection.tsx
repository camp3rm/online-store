import React from 'react';
import './styles.scss'

export default function HeroSection() {
	return (
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
	)
}
