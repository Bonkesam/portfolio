'use client';

import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItems from './MenuItems';

const UserMenu = () => {

    const [isOpen, setIsOpen ] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

  return (
    <div className='relative'>
        <div className='
          flex
          flex-row
          items-center
          gap-3

        '>
            <div onClick={() => {}} 
            className='
              hidden
              md:block
              text-sm
              font-semibold
              py-3
              px-4
              rounded-full
              hover:bg-neutral-180
              transition
              cursor-pointer

            '>
                More

            </div>
            <div onClick={toggleOpen} className='
              p-4
              md:py-1
              md:px-2
              border-[1px]
              border-neutral-100
              flex
              flex-row
              items-center
              gap-3
              rounded-full
              cursor-pointer
              hover:shadow-md
              transition

            '>
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    
                </div>

            </div>

        </div>
        {isOpen && (
            <div className='
              absolute
              rounded-xl
              shadow-md
              w-full
              md:w-full
              bg-white
              overflow-hidden
              right
              top-12
              text-sm
              sm:w-full
            '>
                <div className='flex flex-col cursor-pointer text-black'>
                    <>
                      <MenuItems onClick={() => {}} label='Resume'/>
                      <hr />
                      <MenuItems onClick={() => {}} label='Blogs'/>
                      <hr />

                                          
                    </>

                </div>

            </div>
        )}
      
    </div>
  )
}

export default UserMenu;
