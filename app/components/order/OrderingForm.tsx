import React from 'react';
import Image from 'next/image';
import logo from '@public/icons/orderingLogo.svg';
import InputField from '@ui/Input';
import Button from '@ui/Button';
import './order-form.scss';

export default function OrderingForm() {
	return (
		<div className="ordering_form-container">
			<Image
				alt="Logo"
				src={logo}
				width={100}
				height={89}
			/>

			<div className="form_container">
				<h2 className="form_title">Контактна інформація</h2>
				<form className="form">
					<InputField
						type="text"
						placeholder="ПІБ"
						required
						className="form_input"
					/>
					<InputField
						type="tel"
						placeholder="Номер телефону"
						required
						className="form_input"
					/>
					<div className="order_note">
						<input
							type="checkbox"
							className="order_note-checkbox"
						/>
						<span>Не телефонуйте мені для підтвердження замовлення</span>
					</div>
					<InputField
						type="email"
						placeholder="E-mail"
						required
						className="form_input"
					/>
					<textarea
						className="form_input textarea_input"
						placeholder="Коментар до замовлення"
					/>
				</form>
			</div>
			<div className="ordering_products_container">
				<div className="ordering_product">
					<Image
						alt="Product name"
						src={logo}
						width={100}
						height={128}
						className="product_image"
					/>

					<div className="ordering_description">
						<h3 className="product_name">Хопея ароматна </h3>
						<h3 className="product_original-name">(Hopea odorata)</h3>
						<span className="products_id">Код: 256</span>
						<span className="product_quantity">Кількість: 2</span>
						<span className="product_price">2500 ₴</span>
					</div>
				</div>
				<div className="ordering_product">
					<Image
						alt="Product name"
						src={logo}
						width={100}
						height={128}
						className="product_image"
					/>

					<div className="ordering_description">
						<h3 className="product_name">Хопея ароматна </h3>
						<h3 className="product_original-name">(Hopea odorata)</h3>
						<span className="products_id">Код: 256</span>
						<span className="product_quantity">Кількість: 2</span>
						<span className="product_price">2500 ₴</span>
					</div>
				</div>
				<div className="ordering_product">
					<Image
						alt="Product name"
						src={logo}
						width={100}
						height={128}
						className="product_image"
					/>

					<div className="ordering_description">
						<h3 className="product_name">Хопея ароматна </h3>
						<h3 className="product_original-name">(Hopea odorata)</h3>
						<span className="products_id">Код: 256</span>
						<span className="product_quantity">Кількість: 2</span>
						<span className="product_price">2500 ₴</span>
					</div>
				</div>
				<div className="order_summary">
					<div className="top_row">
						<span className="total_price">Сума замовлення</span>
						<span className="numeric">15000</span>
					</div>
					<div className="middle_row">
						<span className="discount">Сума знижки</span>
						<span className="numeric">1000</span>
					</div>
					<div className="bottom_row">
						<span className="summary">Усього</span>
						<span className="numeric">14000</span>
					</div>
				</div>
			</div>
			<div className="shipping_info">
				<h2 className="shipping_info-title">Інформація про доставку</h2>
				<span className="delivery_methods">Спосіб доставки</span>
				<div className="delivery_methods_container">
					<div className="new_post-method">
						<InputField
							type="checkbox"
							className="delivery_method"
						/>
						<span>Нова пошта</span>
					</div>
					<div className="ukr_post-method">
						<InputField
							type="checkbox"
							className="delivery_method"
						/>
						<span>Укрпошта</span>
					</div>
					<div className="courier_post-method">
						<InputField
							type="checkbox"
							className="delivery_method"
						/>
						<span>Доставка кур’єром</span>
					</div>

					{/* Якщо вибрано Курєра появляєтсья поле для вписання адреси
              Потрібен функціонал   
              Якщо інший метод, появляється поел для вписання номеру відділення пошти
              

              { ... && <InputField 
              type='address'
              className='address'
              required
              name='address'
              placeholder='Вкажіть адресу доставки'
/>} */}
				</div>
			</div>
			<div className="payment_methods">
				<h2 className="payment_methods-title">Оплата</h2>
				<div className="payment_methods-container">
					<div className="payment_method">
						<InputField
							type="checkbox"
							className="payment_checkbox"
						/>
						<span>Онлайн оплата</span>
					</div>
					<div className="payment_method">
						<InputField
							type="checkbox"
							className="payment_checkbox"
						/>
						<span>Оплата кур’єру</span>
					</div>
					<div className="payment_method">
						<InputField
							type="checkbox"
							className="payment_checkbox"
						/>
						<span>Готівкою при доставці</span>
					</div>

					{/* Якщо вибрано Курєра появляєтсья поле для вписання адреси
              Потрібен функціонал   
              Якщо інший метод, появляється поел для вписання номеру відділення пошти
              

              { ... && <InputField 
              type='address'
              className='address'
              required
              name='address'
              placeholder='Вкажіть адресу доставки'
/>} */}
				</div>
			</div>
			<div className="order_actions">
				<Button
					className="confirm_order"
					text="Підтвердити замовлення"
				/>
				<Button
					className="return_to-shopping"
					text="Повернутись до покупок"
				/>
			</div>
		</div>
	);
}
