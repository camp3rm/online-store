import AdditionalInformation from '@/app/components/mainProductCard/AdditionalInformation/AdditionalInformation';
import FavoriteProduct from '@/app/components/mainProductCard/FavoriteProduct/FavoriteProduct';
import ProductCarousel from '@/app/components/mainProductCard/ProductCarousel/ProductCarousel';
import ProductInfo from '@/app/components/mainProductCard/ProductInfo/ProductInfo';
import React from 'react';




const page = () => {
    return (
        <div>
            <ProductCarousel />
            <ProductInfo />
            <AdditionalInformation />
            <FavoriteProduct />
        </div>
    );
};

export default page;