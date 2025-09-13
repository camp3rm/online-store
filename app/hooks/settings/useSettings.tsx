'use client'
import React, { useState, useEffect } from 'react';
import NextArrow from '@ui/NextArrow';
import PrevArrow from '@ui/PrevArrow';
import { Settings } from 'react-slick';

export const useSettings = () => {

	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 576);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return { settings, isMobile };
}