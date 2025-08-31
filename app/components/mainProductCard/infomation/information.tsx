'use client'
import React from 'react';
import { useState } from 'react';
import './information.scss';
import Image from 'next/image';

const Information = () => {
    const [openInformation, setOpenInformation] = useState(false);
    return (
        < section className='information'>
       <div className={`information_title-box ${openInformation ? 'open' : ''}`} 
       >
            <h2 className='information_title'>Корисна інформація</h2>
             <div className={`information_arrow ${openInformation ? 'active' : ''}`}>
                 <Image
                 onClick={() => setOpenInformation(!openInformation)}
                 src={'/icons/down  arrow.svg'}
                 alt='down arrow'
                 width={21}
                 height={12}
                 />
             </div>
         </div>
           {openInformation && (<div className='information_content'>
                <h3>Перед посадкою</h3>
                <p>За три тижні до посадки необхідно викопати яму для саджанця, розміром 70х70 см. Перемішати грунт з органічними добривами. Дві третини цієї суміші повертаються знову в яму, а третина залишається на поверхні для засипки.</p>
                <p>За день до посадки замочують саджанець в воді, щоб він встиг насититися життєво-необхідною вологою. Перед самою посадкою, щоб не пересушити коріння, їх слід змочити в глиняній бовтанці.</p>
                <p>Після цього саджанець поміщається в яму. Все коріння слід розподілити по периметру так, щоб кінці коріння не загиналися вгору. Саджанець засипають землею, що залишилася, щоб його шийка перебувала на відстані 5 см. Грунт утрамбовувати не можна. З цією метою саджанець слід полити 3 відрами теплої води і в міру того, як грунт осідає, додавати нову.</p>
                <p>Після посадки всі пагони обрізають секатором на одну третину, а стовбур необхідно прив'язати до опори, щоб уникнути деформації в вітряну погоду.</p>
            </div>
        )}
        </section>
    );
};

export default Information;