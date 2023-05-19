'use client';

import React from 'react'
import Container from './Container';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='w-full z-50'>
        <div className='

          bg-transparent bg-opacity-45 shadow-md backdrop-filter backdrop-blur-xl border-none text-white rounded-lg
          py-3
          border-[1px]
          z-50
        '>
            <Container>
                <div className='
                  font-semibold
                  
                '>
                    <div className='text-center text-xl text-white'>
                        &copy; {currentYear} Code by Bonke. 
      
                     </div>                  

                </div>
            </Container>

        </div>
      
    </div>
  )
}

export default Footer;
