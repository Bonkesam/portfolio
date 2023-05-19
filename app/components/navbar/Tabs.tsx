import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('');
  

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm font-semibold px-6'>
          <Link href='/Projects'
            
              onClick={() => handleTabClick('Projects')}
              className={
                activeTab === 'Projects'
                  ? 'text-blue-600'
                  : 'text-white'
              }
            >
              Projects
          
          </Link>
        </div>

        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          <Link href='/Skills'
            
              onClick={() => handleTabClick('Skills')}
              className={
                activeTab === 'Skills'
                  ? 'text-blue-600'
                  : 'text-white'
              }
            >
              Skills
            
          </Link>
        </div>

        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          <Link href='/Testimonials'
            
              onClick={() => handleTabClick('Testimonials')}
              className={
                activeTab === 'Testimonials'
                  ? 'text-blue-600'
                  : 'text-white'
              }
            >
              Testimonials
            
          </Link>
        </div>

        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>
            <Link href='/Book-meeting'
              
                onClick={() => handleTabClick('Book-meeting')}
                className={
                  activeTab === 'Book-meeting'
                    ? 'text-blue-600'
                    : 'text-white'
                }
              >
                Book Meeting
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
