'use client'
import React from 'react';
import './ProductInfo.scss';
import Image from 'next/image';
import { useState } from 'react';
import Rating from '../rating/rating';

const ProductInfo = () => {
     const [addProduct, setAddProduct] = useState(false);
    return (
        <section className="product_info">
            <div className='product_info-container'>
                <h3> Хопея ароматна (Hopea odorata) </h3>
                <p>2500 грн</p>
                <div className='product_rating'>
                    <Rating />
                </div>
                <div className='add_to'>
                    <button className='add_to-cart'>Додати у кошик</button>
                    <div className='add_to-favorite'>        
                                <Image
                                        className="heart_icon"
                                        onClick={() => setAddProduct(!addProduct)}
                                        src={addProduct ? '/icons/green_heart.svg' : '/icons/heart icon.svg'}
                                        width={24}
                                        height={21}
                                        alt="Heart Icon"
                                    />
                                    
                                 </div>
                </div>
                <div className='product_description'>
                    <p>Категорія: дерева</p>
                    <p>Висота: 25.0 м</p>
                    <p>Країна походження: Малайзія</p>
                    <p>Колір листя: Зелений</p>
                    <p>Колір квітів: Білий</p>
                    <p>Плодоношення: Так</p>
                    <p>Опис: Дерево з ароматними квітами та твердою деревиною</p>
                </div>
                <div className='product_quantity'>
                    <p>Кількість товару: 50</p>
                    <p>Код: 256</p>
                </div>
                
            </div>
        </section>
    );
};

export default ProductInfo;