'use client';

import React from 'react'
import Container from '../Container'
import Logo from './Logo';
import Tabs from './Tabs';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className='fixed w-full z-50'>
        <div className='

          bg-transparent bg-opacity-45 shadow-md backdrop-filter backdrop-blur-xl border-none text-white rounded-lg
          py-3
          border-[1px]
          z-50
        '>
            <Container>
                <div className='
                  flex
                  flex-row
                  items-center
                  justify-between
                  gap-3
                  md:gap-0
                  font-semibold
                  z-index:1
                '>
                    <Logo /> 
                    <Tabs />
                    <UserMenu />                   

                </div>
            </Container>

        </div>
      
    </div>
  )
}

export default Navbar
