import React from 'react';
import ProductCard from '../../catalog/productCard/productCard';
import './FavoriteProduct.scss';
import Image from 'next/image';

const FavoriteProduct = () => {
    return (
        <section className="favorite_products">
            <div className="product_cards">
                <ProductCard />
                <ProductCard />
            </div>
            <div className="favorite_products-arrow">
                <div className='left-arrow'>
                    <Image 
                        src="/icons/arrow-left-circle.svg"
                        alt="Left Arrow"
                        width={65}
                        height={32}
                    />
                </div>
                <div className='right-arrow'>
                    <Image 
                        src="/icons/arrow-right-circle.svg"
                        alt="Right Arrow"
                        width={65}
                        height={32}
                    />
                </div>
                
            </div>
        </section>
    );
};

export default FavoriteProduct;