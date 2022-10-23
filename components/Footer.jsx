import React from 'react';

function Footer() {
  return (
    <div className='items-center flex space-x-10 justify-around  p-10 bg-gray-100'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h3 className='font-bold'>About</h3>
        <p>How AirBnB works</p>
        <p>Newsroom</p>
        <p>Investor</p>
        <p>Airbnb Plus</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h3 className='font-bold'>Community</h3>
        <p>React Nerd</p>
        <p>Presents</p>
        <p>React Fullstack</p>
        <p>Join Now</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h3 className='font-bold'>Support</h3>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Investor</p>
        <p>Easter Eggs</p>
      </div>
    </div>
  );
}

export default Footer;
