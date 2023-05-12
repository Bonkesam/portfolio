'use client';

interface MenuItemsprops {
    onClick: () => void;
    label: string
}

import React from 'react'

const MenuItems: React.FC<MenuItemsprops> = ({
    onClick,
    label
}) => {
  return (
    <div 
    onClick={onClick}
    className='
      px-4
      py-3
      hover:bg-neutral-100
      transition
      font-semibold
      
    '
    >
        {label}
      
    </div>
  )
}

export default MenuItems;
