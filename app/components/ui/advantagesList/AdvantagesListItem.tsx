'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MoreInfoOpen from '@public/icons/more-info-open.svg';
import MoreInfoClose from '@public/icons/more-info-close.svg';
import { useSettings } from '@hooks/settings/useSettings';
import { advantages } from '@data/advantages';

export default function AdditionalInfo() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const { isMobile } = useSettings();

	const toggleOpen = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<>
			{isMobile
				? advantages.map((item, index) => (
						<li
							key={item.number}
							className="our_advantages-list-item">
							<span className="our_advantages-item-number">{item.number}</span>
							<span className="our_advantages-item-title">{item.title}</span>
							<div
								onClick={() => toggleOpen(index)}
								className="more_info-box">
								<Image
									alt="arrow"
									src={openIndex === index ? MoreInfoClose : MoreInfoOpen}
									className="more_info-icon"
								/>
							</div>

							{openIndex === index &&
								(Array.isArray(item.text) ? (
									<ul className="additional_information">
										{item.text.map((line, i) => (
											<li
												key={i}
												className="additional_information-item list-item">
												{line}
											</li>
										))}
									</ul>
								) : (
									<p className="additional_information">{item.text}</p>
								))}
						</li>
				  ))
				: advantages.map((item) => (
						<li
							key={item.number}
							className="our_advantages-list-item">
								<span className="our_advantages-item-number">
									{item.number}
								</span>
								<span className="our_advantages-item-title">{item.title}</span>
							{Array.isArray(item.text) ? (
								<ul className="additional_information">
									{item.text.map((line, i) => (
										<li
											key={i}
											className="additional_information-item list-item">
											{line}
										</li>
									))}
								</ul>
							) : (
								<p className="additional_information">{item.text}</p>
							)}
						</li>
				  ))}
		</>
	);
}
