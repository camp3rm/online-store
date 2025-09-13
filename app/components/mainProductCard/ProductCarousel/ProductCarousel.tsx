import React from 'react';
import './ProductCarousel.scss';
import Image from 'next/image';

const ProductCarousel = () => {
    return (
        <section className="product_carousel">
            <div className="carousel_inner">
                <Image
                src='/images/Product card image.png' 
                alt='Product Image'
                width={288}
                height={338}
                />
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

export default ProductCarousel;