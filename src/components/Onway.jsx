import React from 'react';
import videosrc from '../assets/cheerleader-blorb.mp4';

const Onway = ({setSelectedOption}) => {
  setSelectedOption("notNull")
  return (
    <div className='flex flex-col sm:flex-row justify-evenly items-center gap-10 my-12'>
      <video className='md:h-[22rem] md:w-[22rem] sm:h-[17rem] sm:w-[17rem] h-[13rem] w-[13rem] sm:ml-[10rem] ml-0' autoPlay loop >
        <source src={videosrc} type='video/mp4' />
        Your browser does not support the video 
      </video>
      <div className='sm:w-[32%] w-full ml-6 text-center sm:text-left'>
        <h1 className='text-3xl text-center mb-3 font-bold '>You're on your way</h1>
        <p className='text-center mt-2 font'>"Through its engaging and well structured courses, Brilliant has taught me mathematical concepts that i previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations." </p>
      </div>
    </div>
  );
};

export default Onway;
