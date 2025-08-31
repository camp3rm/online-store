import React from 'react';
import Image from 'next/image';
import './rating.scss';

const Rating = () => {
    return (
        <div className='rating'>
            <div className='rating-star'>
            <Image
                src='/icons/star.svg'
                width={16}
                height={16}
                alt='Star Icon'
            />
               </div>
               <div className='rating-star'>
            <Image
                src='/icons/star.svg'
                width={16}
                height={16}
                alt='Star Icon'
            />
               </div>
               <div className='rating-star'>
            <Image
                src='/icons/star.svg'
                width={16}
                height={16}
                alt='Star Icon'
            />
               </div>
               <div className='rating-star'>
            <Image
                src='/icons/star.svg'
                width={16}
                height={16}
                alt='Star Icon'
            />
               </div>
               <div className='rating-star'>
            <Image
                src='/icons/star.svg'
                width={16}
                height={16}
                alt='Star Icon'
            />
               </div>
            
        </div>
    );
};

export default Rating;