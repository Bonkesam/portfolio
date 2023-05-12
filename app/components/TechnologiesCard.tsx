'use client';

import React from 'react';
import Image from 'next/image';

interface TechnologiesCardProps {
    image: string;
    
}

const TechnologiesCard: React.FC<TechnologiesCardProps> = ({
    image,

}) => {
  return (

    <div className='cursor-pointer group '>
        <div>
            <div className='pt-28 overflow-y-auto'>

                <div className='aspect-square relative overflow-hidden rounded-xl'>
                    <Image 
                        fill
                        alt='Project'
                        src={image}
                        className='object-cover w-full group-hover:scale-125 transition'
                    />                        
                </div>
                                                       
            </div>

            
        </div>
         
    </div>

  )
}

export default TechnologiesCard;
