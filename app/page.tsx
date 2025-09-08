import React from 'react';
import './main.scss';
import HeroSection from '@components/main/hero-section/HeroSection';
import CatalogSection from '@components/main/catalog-section/CatalogSection';
import BenefitsSection from '@components/main/benefits-section/BenefitsSection';
import ReviewSection from '@components/main/review-section/ReviewSection';
import FaqSection from '@components/main/faq-section/FaqSection';

export default function Home() {
	return (
		<div className="main_page">
			<HeroSection />
			<CatalogSection />
			<BenefitsSection />
			<ReviewSection />
			<FaqSection />
		</div>
	);
}
