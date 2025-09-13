'use client';

import React from 'react';
import OrderSummary from 'vet/contact/OrderSummary';
import flowerData from 'vet/online-store/app/_data/flowerData';
import CartCard from 'vet/online-store/app/components/cart/CartCard';
import './ContactMain.scss';
import ContactForm from 'vet/contact/ContactForm';


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
