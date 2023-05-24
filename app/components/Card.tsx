'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
    image: string;
    content: string;
    label: string;
}

const Card: React.FC<CardProps> = ({
    image,
    content,
    label
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
            <div className="text-left xl:text-md text-md text-bold text-custom-600 p-3">
                {label}
            </div>
            <div>
                <p className="text-left xl:text-md text-sm text-white p-5">
                    {content}
                </p>
            </div>
                            
            </div>

            
        </div>
         
    </div>

  )
}

export default Card;
