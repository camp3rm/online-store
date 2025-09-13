'use client';

import React, { useState } from 'react';
import './OrderSummary.scss';

const OrderSummary = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('nova-poshta');
  const [deliveryType, setDeliveryType] = useState('pickup');
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [address, setAddress] = useState('');

  const orderTotal = 15000;
  const discount = 1000;
  const finalTotal = 14000;

  return (
    <div className="order-summary">
      <div className="order-summary__totals">
        <div className="order-summary__row">
          <span>Сума замовлення</span>
          <span>{orderTotal} ₴</span>
        </div>
        <div className="order-summary__row">
          <span>Сума знижки</span>
          <span className="discount">-{discount} ₴</span>
        </div>
        <div className="order-summary__row order-summary__total">
          <span>Усього</span>
          <span>{finalTotal} ₴</span>
        </div>
      </div>

      <div className="order-summary__section">
        <h3 className="section-title">Інформація про доставку</h3>

        <div className="delivery-method">
          <span className="section-label">Спосіб доставки</span>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="delivery-method"
                value="nova-poshta"
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <span className="radio-custom"></span>
              Нова пошта
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="delivery-method"
                value="nova-poshta"
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <span className="checkbox-custom"></span>
              Укрпошта
            </label>
            <label className="radio-option">
              <input
                type="checkbox"
                checked={deliveryType === 'courier'}
                onChange={(e) => setDeliveryType(e.target.checked ? 'courier' : 'pickup')}
              />
              <span className="checkbox-custom"></span>
              Доставка кур'єром
            </label>
          </div>
        </div>

        <div className="address-input">
          <label className="section-label">Вкажіть номер відділення</label>
          <input
            type="text"
            className="address-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введіть адресу або номер відділення"
          />
        </div>
      </div>

      <div className="order-summary__section">
        <h3 className="section-title">Оплата</h3>
        <div className="payment-methods">
          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === 'online'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="radio-custom"></span>
            Онлайн оплата
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="courier"
              checked={paymentMethod === 'courier'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="radio-custom"></span>
            Оплата кур'єру
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="cash-on-delivery"
              checked={paymentMethod === 'cash-on-delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="radio-custom"></span>
            Готівкою при доставці
          </label>
        </div>
      </div>

      <div className="order-summary__actions">
        <button className="btn btn--primary">
          Підтвердити замовлення
        </button>
        <button className="btn btn--secondary">
          Повернутись до покупок
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;