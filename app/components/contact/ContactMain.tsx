'use client';

import React from 'react';
import OrderSummary from '@components/contact/OrderSummary';
import flowerData from '@/app/_data/flowerData';
import CartCard from '@components/cart/CartCard';
import './ContactMain.scss';
import ContactForm from '@components/contact/ContactForm';


function ContactMain() {
  return (
    <div className="column-card-container">
      <ContactForm />
      {flowerData.map((flower) => (
        <CartCard flower={flower} trash={false} key={flower.id} />
      ))}
      <OrderSummary />
    </div>
  );
}

export default ContactMain;
