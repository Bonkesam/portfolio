'use client';

import { useRouter } from 'next/navigation';
import React from 'react';



const Tabs = () => {

  const router = useRouter();
  return (
    <div
    className='
      border-[1px]
      w-full
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
    '
    >
      <div className='
        flex
        flex-row
        items-center
        justify-between
      '>
        <div  className='text-sm font-semibold px-6'>
            Projects
            
        </div>
        

        <div className='hidden
          sm:block
          text-sm
          font-semibold
          px-6
          border-x-[1px]
          flex-1
          text-center
        '>
        Skills

        </div>

        <div className='hidden
          sm:block
          text-sm
          font-semibold
          px-6
          border-x-[1px]
          flex-1
          text-center
        '>
            Testimonials

        </div>     
                
        <div className='text-sm
           pl-6
           pr-2
           text-grey-600
           flex
           flex-row
           items-center
           gap-3

        '>
            <div className='hidden sm:block '> Book Meeting </div>

        </div>

      </div>
    </div>
  )
}

export default Tabs;
