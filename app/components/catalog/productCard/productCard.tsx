'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import './productCard.scss';
import { useState } from 'react';

const  ProductCard = () => {
    const [addProduct, setAddProduct] = useState(false);
    return (
        <section className='product_card'>
            <div  className='product_card-wrapper'>
                <div className='product_image'>
            <Image
					className="product_card-image"
					src={'/images/product image.png'}
					width={144}
					height={172}
					alt="Product Image"
				/>
                 </div>
                  <div className='heart_image' >
            <Image
					className="heart_icon"
                    onClick={() => setAddProduct(!addProduct)}
					src={addProduct ? '/icons/green_heart.svg' : '/icons/heart icon.svg'}
					width={16}
					height={14}
					alt="Heart Icon"
				/>
                
                 </div>

                <div className='product_card-title'>
                    <h3>Вишня Куляподібна</h3>
                    <p>₴ 1250</p>

                </div>
                </div>
        </section>
    );
};

export default ProductCard;