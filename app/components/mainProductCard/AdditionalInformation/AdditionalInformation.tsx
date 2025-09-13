'use client'
import React from 'react';
import { useState } from 'react';
import './AdditionalInformation.scss';
import Image from 'next/image';

const AdditionalInformation = () => {
    const [openInformation1, setOpenInformation1] = useState(false);
    const [openInformation2, setOpenInformation2] = useState(false);
    const [openInformation3, setOpenInformation3] = useState(false);
    return (
        < section className='information'>
            <div className='information_header'>
                <h2>Додаткова інформація</h2>
            </div>
            <div className='information_title-box'>
                <h3 className='information_title'>Опис сорту</h3>
                <div className={`information_arrow ${openInformation1 ? 'active' : ''}`}>
                     <Image
                 onClick={() => setOpenInformation1(!openInformation1)}
                 src={'/icons/down  arrow.svg'}
                 alt='down arrow'
                 width={21}
                 height={12}
                 />
             </div>
         </div>
           {openInformation1 && (<div className='information_content'>
                <p>Хопея ароматна — декоративне д ерево з приємним ароматом квітів, поширене у вологих тропічних лісах Малайзії. Вирізняється прямим, струнким стовбуром і густою листяною кроною. Листя глянцеве, темно-зелене, овальне, зі злегка загостреними кінцями.</p>                
            </div>
        )}
        <div className='information_title-box'>
                <h3 className='information_title'>Цвітіння</h3>
                <div className={`information_arrow ${openInformation2 ? 'active' : ''}`}>
                     <Image
                 onClick={() => setOpenInformation2(!openInformation2)}
                 src={'/icons/down  arrow.svg'}
                 alt='down arrow'
                 width={21}
                 height={12}
                 />
             </div>
         </div>
           {openInformation2 && (<div className='information_content'>
                <p>Хопея ароматна цвіте наприкінці весни або на початку літа, залежно від кліматичних умов. Квіти дрібні, зеленувато-білі, зібрані у кисті — мають ніжний, ледве вловимий аромат. Цвітіння триває кілька тижнів, і саме в цей період дерево привертає увагу своєю витонченістю.</p>                   
            </div>
        )}
        <div className='information_title-box'>
                <h3 className='information_title'>Плодоношення</h3>
                <div className={`information_arrow ${openInformation3 ? 'active' : ''}`}>
                     <Image
                 onClick={() => setOpenInformation3(!openInformation3)}
                 src={'/icons/down  arrow.svg'}
                 alt='down arrow'
                 width={21}
                 height={12}
                 />
             </div>
         </div>
           {openInformation3 && (<div className='information_content'>
                <p>Після цвітіння утворюються маленькі горішки з крилатими приквітками. Плоди дозрівають у другій половині літа та мають здатність до самопоширення завдяки своїй будові — вони легко розносяться вітром. Насіння використовують для розмноження, а також в наукових дослідженнях.</p>                
            </div>
        )}
        </section>
    );
};

export default AdditionalInformation;