import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className='relative h-[500px] md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[500px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        alt=''
      />
      <div className='absolute top-1/2 w-full text-center text-sm'>
        <p>Not Sure Where to Go? Perfect</p>
        <button className='mt-3 text-purple-500 bg-white px-4 py-3 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150 ease-out'>
          Im Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
