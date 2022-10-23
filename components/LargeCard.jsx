import Image from 'next/image';
import React from 'react';

import human from '../images/human.png';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative py-16'>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          alt=''
          className='rounded-2xl'
        />
      </div>

      <div className='absolute top-32 left-12 cursor-pointer'>
        <h3 className='text-4xl mb-3 w-64 font-bold text-gray-600'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
        <button className='text-sm p-3 bg-gray-900 text-white mt-3 rounded-xl shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150 ease-out'>
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
