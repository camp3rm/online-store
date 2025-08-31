'use client';
import React, { use } from 'react';
import './catalog.scss';
import ProductCard from './productCard/productCard';
import Image from 'next/image';
import { useState } from 'react';
import Pagination from './pagination/pagination';
import Information from './infomation/information';

const Catalog = () => {
    const [openDropdownFilter, setOpenDropdownFilter] = useState(false);
    const [openDropdownSort, setOpenDropdownSort] = useState(false);
    return (
        <div className='catalog_wrapper'>
             <div className='catalog_container-header'>
          <h2 className='catalog_header-title'>Ваш зелений вибір — впевненість у кожному саджанці</h2>
           </div>
              <h1 className='catalog_title'>Каталог</h1>
              <div className='catalog_search-wrapper'>
                <div className='catalog_filter-sort'>
                <div className='catalog_filter'>
                    <h3>Фільтри</h3>
                    <div className='catalog_filter-arrow' >
                    <Image
                    onClick={() => setOpenDropdownFilter(!openDropdownFilter)} 
                    src={'/icons/down  arrow.svg'} 
                    alt='down arrow'
                    width={14}
                    height={8}
                    />
                    {openDropdownFilter && (
            <div className="search_dropdown-filter">
              <ul>
                <li>Дерева</li>
                <li>Кущі</li>
                <li>Квіти</li>
                <li>Розсада</li>
              </ul>
            </div>
          )}
                    </div>
                    </div>
                <div className='catalog_sort'>
                    <h3>Сортувати за</h3>
                    <div className='catalog_filter-arrow'>
                    <Image
                    onClick={() => setOpenDropdownSort(!openDropdownSort)}
                    src={'/icons/down  arrow.svg'}
                    alt='down arrow'
                    width={14}
                    height={8}
                    />
                    </div>
                     {openDropdownSort && (
            <div className="search_dropdown-sort">
              <ul>
                <li>Ціна за зростанням</li>
                <li>Ціна за спаданням</li>
                <li>За популярністю</li>
                <li>За рейтингом</li>
                <li>За новизною</li>
              </ul>
            </div>
          )}
                    
                    </div>
                    
                </div>

                <div 
                className='catalog_search'>
                    <input className='search_input' type="text" placeholder='Введіть назву' />
                    <div className='search_icon'>
                    <Image 
                    src={'/icons/search icon.svg'} 
                    alt='search'
                    width={16}
                    height={16}
                    />
                      
                    </div>
                </div>
              </div>
           <div className='catalog_container-body'>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
           </div>
           <Pagination />
           <Information />
        </div>
    );
};

export default Catalog;