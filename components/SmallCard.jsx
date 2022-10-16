import React from 'react';
import Image from 'next/image';

function MediumCard({ img, location, distance }) {
  return (
    <div className='flex rounded-xl space-x-4 items-center mt-5 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative h-16 w-16'>
        <Image
          src={img}
          alt=''
          layout='fill'
          objectFit='contain'
          className='rounded-lg'
        />
      </div>
      <div>
        <p>{location}</p>
        <p className='text-gray-500'>{distance}</p>
      </div>
    </div>
  );
}

export default MediumCard;
