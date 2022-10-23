import Image from 'next/image';
import React, { useState } from 'react';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log(searchInput);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

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
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex border-b-2 mb-10'>
            <h2 className='flex-grow font-semibold pl-4'>Number of Guests</h2>
            <UserIcon className='w-5 text-red-400' />
            <input type='number' className='w-10 outline-none pl-3'></input>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
