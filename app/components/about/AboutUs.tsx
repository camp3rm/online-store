'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './about.scss';
import Button from '@ui/Button';
import MoreInfo from '@public/icons/more-info.svg';
import Catalog from '@components/main/catalog-section/CatalogSection';

export default function AboutUs() {
	const [moreInfo, setMoreInfo] = useState(false);
	const toggleMoreInfo = () => {
		setMoreInfo((prev) => !prev);
	};

	// окремі компоненти списки
	// Для кожного своя кнопка
	// Винести interface

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
							<span className="our_advantages-item-title">
								Досвід та довіра
							</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
							<p className="additional_information">
								Ми працюємо для вас вже понад 5 років, допомагаючи створювати
								сади мрії — у дворі, на дачі, на балконі чи просто на
								підвіконні. За цей час тисячі наших клієнтів стали друзями, а
								їхні ділянки — квітучими просторами, наповненими турботою та
								красою.
							</p>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">02</span>
							<span className="our_advantages-item-title">
								Асортимент з любов’ю
							</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
							<p className="additional_information">
								У GreenShop ви знайдете саджанці квітів, дерев, кущів та
								розсади, які ми відбираємо з великою відповідальністю. Ми
								співпрацюємо лише з перевіреними розсадниками, дбаємо про кожну
								рослину і віримо, що справжнє задоволення — бачити, як вона
								росте у ваших руках.
							</p>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">03</span>
							<span className="our_advantages-item-title">
								Даруємо зелене щастя
							</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
							<p className="additional_information">
								Кожен замовлений у нас саджанець — це маленька частинка живої
								природи. Ми дбайливо упаковуємо кожну рослину, щоб вона прибула
								до вас у найкращому стані.
							</p>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">04</span>
							<span className="our_advantages-item-title">
								Доставка по всій Україні
							</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
							<ul className="additional_information">
								<li className="additional_information-item">
									Нова Пошта та Укрпошта
								</li>
								<li className="additional_information-item">
									Варіанти доставки: відділення, поштомат або кур’єр
								</li>
								<li className="additional_information-item">
									Перед відправкою ми перевіряємо кожну рослину
								</li>
								<li className="additional_information-item">
									Якщо виникають питання — ми завжди на зв’язку
								</li>
							</ul>
						</li>
						<li className="our_advantages-list-item">
							<span className="our_advantages-item-number">05</span>
							<span className="our_advantages-item-title">
								Чому з нами приємно садити
							</span>
							<div className="more_info-box">
								<Image
									alt="arrow"
									src={MoreInfo}
									className="more_info-icon"
								/>
							</div>
							<ul className="additional_information">
								<li className="additional_information-item">
									Якість — лише перевірені постачальники, контроль кожного
									саджанця
								</li>
								<li className="additional_information-item">
									Великий вибір — квіти, кущі, дерева, розсада для будь-якого
									стилю
								</li>
								<li className="additional_information-item">
									Турбота та підтримка — ми завжди поруч, щоби допомогти
								</li>
								<li className="additional_information-item">
									Швидка доставка — незалежно від сезону
								</li>
								<li className="additional_information-item">
									Теплота — ми справді любимо те, що робимо
								</li>
							</ul>
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

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import './about.scss';
// import Button from '@ui/Button';
// import MoreInfo from '@public/icons/more-info.svg';
// import Catalog from '@components/main/catalog-section/CatalogSection';

// export default function AboutUs() {
// 	// const [moreInfo, setMoreInfo] = useState(false);
// 	// const toggleMoreInfo = () => {
// 	// 	setMoreInfo((prev) => !prev);
// 	// };

// // Інтерфейс для однієї переваги
// interface Advantage {
// 	id: string;
// 	title: string;
// 	description: string | string[];
// }

// // Компонент для одного елемента списку переваг
// const AdvantageItem: React.FC<{ advantage: Advantage }> = ({ advantage }) => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const toggleOpen = () => setIsOpen((prev) => !prev);

// 	const isDescriptionList = Array.isArray(advantage.description);

// 	return (
// 		<li className="our_advantages-list-item" onClick={toggleOpen}>
// 			<div className="our_advantages-item-header">
// 				<span className="our_advantages-item-number">{advantage.id}</span>
// 				<span className="our_advantages-item-title">{advantage.title}</span>
// 				<div className="more_info-box">
// 					<Image
// 						alt="arrow"
// 						src={MoreInfo}
// 						className={`more_info-icon ${isOpen ? 'open' : ''}`}
// 					/>
// 				</div>
// 			</div>
// 			<div className={`additional_information_wrapper ${isOpen ? 'open' : ''}`}>
// 				<div className="additional_information">
// 					{isDescriptionList ? (
// 						<ul>
// 							{(advantage.description as string[]).map((item, index) => (
// 								<li key={index} className="additional_information-item">
// 									{item}
// 								</li>
// 							))}
// 						</ul>
// 					) : (
// 						<p>{advantage.description}</p>
// 					)}
// 				</div>
// 			</div>
// 		</li>
// 	);
// };

// export default function AboutUs() {
// 	return (
// 		<div className="about_container">
// 			<div className="to_catalog">
// 				<h1 className="about_title">Найкращі саджанці в GreenShop</h1>
// 				<Button
// 					text="До каталогу"
// 					className="to_catalog-button"
// 				/>
// 			</div>
// 			<div className="about_us">
// 				<div className="about_description">
// 					<h2 className="about_description-title">Про нас</h2>
// 					<p className="about_description-text">
// 						GreenShop — це не просто магазин саджанців. Це місце, де починається
// 						любов до природи, де кожен паросток має значення, а кожна квітка —
// 						історію.
// 					</p>
// 				</div>
// 				<div className="our_advantages">
// 					<ul className="our_advantages-list">
// 						<li className="our_advantages-list-item">
// 							<span className="our_advantages-item-number">01</span>
// 							<span className="our_advantages-item-title">
// 								Досвід та довіра
// 							</span>
// 							<div className="more_info-box">
// 								<Image
// 									alt="arrow"
// 									src={MoreInfo}
// 									className="more_info-icon"
// 								/>
// 							</div>
// 							<p className="additional_information">
// 								Ми працюємо для вас вже понад 5 років, допомагаючи створювати
// 								сади мрії — у дворі, на дачі, на балконі чи просто на
// 								підвіконні. За цей час тисячі наших клієнтів стали друзями, а
// 								їхні ділянки — квітучими просторами, наповненими турботою та
// 								красою.
// 							</p>
// 						</li>
// 						<li className="our_advantages-list-item">
// 							<span className="our_advantages-item-number">02</span>
// 							<span className="our_advantages-item-title">
// 								Асортимент з любов’ю
// 							</span>
// 							<div className="more_info-box">
// 								<Image
// 									alt="arrow"
// 									src={MoreInfo}
// 									className="more_info-icon"
// 								/>
// 							</div>
// 							<p className="additional_information">
// 								У GreenShop ви знайдете саджанці квітів, дерев, кущів та
// 								розсади, які ми відбираємо з великою відповідальністю. Ми
// 								співпрацюємо лише з перевіреними розсадниками, дбаємо про кожну
// 								рослину і віримо, що справжнє задоволення — бачити, як вона
// 								росте у ваших руках.
// 							</p>
// 						</li>
// 						<li className="our_advantages-list-item">
// 							<span className="our_advantages-item-number">03</span>
// 							<span className="our_advantages-item-title">
// 								Даруємо зелене щастя
// 							</span>
// 							<div className="more_info-box">
// 								<Image
// 									alt="arrow"
// 									src={MoreInfo}
// 									className="more_info-icon"
// 								/>
// 							</div>
// 							<p className="additional_information">
// 								Кожен замовлений у нас саджанець — це маленька частинка живої
// 								природи. Ми дбайливо упаковуємо кожну рослину, щоб вона прибула
// 								до вас у найкращому стані.
// 							</p>
// 						</li>
// 						<li className="our_advantages-list-item">
// 							<span className="our_advantages-item-number">04</span>
// 							<span className="our_advantages-item-title">
// 								Доставка по всій Україні
// 							</span>
// 							<div className="more_info-box">
// 								<Image
// 									alt="arrow"
// 									src={MoreInfo}
// 									className="more_info-icon"
// 								/>
// 							</div>
// 							<ul className="additional_information">
// 								<li className="additional_information-item">
// 									Нова Пошта та Укрпошта
// 								</li>
// 								<li className="additional_information-item">
// 									Варіанти доставки: відділення, поштомат або кур’єр
// 								</li>
// 								<li className="additional_information-item">
// 									Перед відправкою ми перевіряємо кожну рослину
// 								</li>
// 								<li className="additional_information-item">
// 									Якщо виникають питання — ми завжди на зв’язку
// 								</li>
// 							</ul>
// 						</li>
// 						<li className="our_advantages-list-item">
// 							<span className="our_advantages-item-number">05</span>
// 							<span className="our_advantages-item-title">
// 								Чому з нами приємно садити
// 							</span>
// 							<div className="more_info-box">
// 								<Image
// 									alt="arrow"
// 									src={MoreInfo}
// 									className="more_info-icon"
// 								/>
// 							</div>
// 							{/* <ul className="additional_information">
// 								<li className="additional_information-item">
// 									Якість — лише перевірені постачальники, контроль кожного
// 									саджанця
// 								</li>
// 								<li className="additional_information-item">
// 									Великий вибір — квіти, кущі, дерева, розсада для будь-якого
// 									стилю
// 								</li>
// 								<li className="additional_information-item">
// 									Турбота та підтримка — ми завжди поруч, щоби допомогти
// 								</li>
// 								<li className="additional_information-item">
// 									Швидка доставка — незалежно від сезону
// 								</li>
// 								<li className="additional_information-item">
// 									Теплота — ми справді любимо те, що робимо
// 								</li>
// 							</ul> */}
// 						</li>
// 						{advantagesData.map((advantage) => (
// 							<AdvantageItem key={advantage.id} advantage={advantage} />
// 						))}
// 					</ul>
// 				</div>
// 			</div>
// 			<div className="cat">
// 				<Catalog />
// 			</div>
// 		</div>
// 	);
// }