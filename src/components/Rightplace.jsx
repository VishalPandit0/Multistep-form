import React from 'react'
import videosrc from '../assets/pulley-blob.mp4'


const Rightplace = ({setSelectedOption}) => {
  setSelectedOption('notNull')
  
  return (
    <div className='flex flex-col sm:flex-row justify-evenly items-center gap-10 my-12'>
      <video className='md:h-[22rem] md:w-[22rem] sm:h-[17rem] sm:w-[17rem] h-[13rem] w-[13rem] sm:ml-[10rem] ml-0' autoPlay loop  >
        <source src={videosrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='sm:w-[32%] w-full ml-6 text-center sm:text-left'>
        <h1 className='text-3xl mb-3 text-center font-bold '>You're in the right place</h1>
        <p className='text-center mt-2 '>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
      </div>
    </div>
  )
}

export default Rightplace
