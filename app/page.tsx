import Image from 'next/image';
import React from 'react';
import data from '../public/images/decor_plants.json'

export default async function Home() {
interface Product {
  id: number;
  name: string;
  image?: string;
  description: string;
}


const firstItem: Product = data[0].products[0];

  return (
    <div>
      <h1>Main page</h1>
     <ul>
  {/* {data.map((page) => */}
     {/* page.products.map((item) => ( */}
      <li key={firstItem.id}>
        <h2>{firstItem.name}</h2>
        <Image src={firstItem.image as string} alt={firstItem.name as string} width={150} height={225} />
        <p>{firstItem.description}</p>
      </li>
     {/* )) */}
   {/* )} */}
</ul>
    </div>
  );
}
