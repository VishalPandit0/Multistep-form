import React from 'react'
import learning1 from '../assets/learning1.gif'
import learning2 from '../assets/learning2.gif'

const Learnings = () => {
  return (
    <div className='flex flex-col justify-center items-center my-[30px] sm:my-[100px] '>
    <div>
      <h1 className='text-3xl text-center font-bold'>Learning paths based on your answers</h1>
      <p className='text-center text-[1rem] mt-2 sm:mt-5'>Choose one to get started. You can switch anytime</p>
    </div>
    <div className='flex  flex-col sm:flex-row gap-6 justify-center my-[4rem] '>
      <div className='flex flex-col-reverse sm:flex-row sm:mr-5 cursor-pointer px-6 py-4 sm:p-4 border border-gray-200 sm:rounded-md '> <p className='mr-4 w-[184px]'> <b>Foundational Math</b> build your foundational skills in algebra, geometry and probability </p><img className='sm:h-[93px] sm:w-[93px] h-[190px] w-[190px] ' src={learning1} alt="" /></div>
      <div className='flex flex-col-reverse sm:flex-row sm:ml-5 ml-0 cursor-pointer px-6 py-4 sm:p-4 border border-gray-200 sm:rounded-md '> <p className='mr-4 w-[184px]'> <b>Mathematical thinking</b> build your foundational skills in algebra, geometry and probability </p><img className='sm:h-[93px] sm:w-[93px] h-[190px] w-[190px] ' src={learning2} alt="" /></div>
    </div>
    </div>
  )
}

export default Learnings
