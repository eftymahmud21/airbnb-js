import Image from 'next/image';
import React from 'react';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky shadow-md p-1 top-0 z-50 grid grid-cols-3 bg-white'>
      {/* left side */}
      <div className='relative flex items-center h-8 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          alt=''
        />
      </div>

      {/* searchbar */}
      <div className='flex items-center border-2 rounded-full p-0.5 hover:shadow-md transform transition duration-300 ease-out'>
        <input
          type='text'
          placeholder='Search Here'
          className='outline-none pl-5 rounded-full grow'
        />
        <SearchIcon className='h-8 bg-red-400 text-white rounded-full p-0.5 mr-1 cursor-pointer md: inline-flex' />
      </div>

      {/* Right Side */}
      <div className='flex space-x-3 items-center justify-end'>
        <p className='text-gray-500'>Become a Host</p>
        <GlobeAltIcon className='relative h-5 text-red-400' />

        <div className='flex border-2 rounded-lg gap-x-0.5 items-center text-gray-400'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
}

export default Header;
