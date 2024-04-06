import React, { useState } from 'react'
import student from '../assets/Student.png'
import Professional from '../assets/professional.png'
import Parent from '../assets/Parent.png'
import old from '../assets/old-man.png'
import Teacher from '../assets/Teacher.png'
import other from '../assets/other.png'



const Description = ({setSelectedOption,data1,setData1}) => {

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setData1(option);
  };

  return (
    <div className='flex justify-center w-full md:w-[42vw]  flex-col '>
      <header className='text-center my-3'>
        <h1 className='sm:text-3xl text-2xl font-bold my-[1.75rem] '>Which describes you best ?</h1>
        <p>This will help us personalize your experience.</p>
      </header>
      <ul className='my-7 '>
        <li  >
          <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data1 === 'Student' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Student')}>
          <img className='h-[30px] w-[30px] mr-6' src={student} /> <p className='mr-1 font-semibold'>Student</p> <p>or soon to be enrolled</p> </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data1 === 'Professional' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Professional')}> <img className='h-[30px] w-[30px] mr-6' src={Professional} /> <p className='mr-1 font-semibold'>Professional</p> <p>pursuing a career</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data1 === 'Parent' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Parent')}> <img className='h-[30px] w-[30px] mr-6' src={Parent} /> <p className='mr-1 font-semibold'>Parent</p> <p> of a school-aged child</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data1 === 'Lifelong Learner' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Lifelong Learner')}> <img className='h-[30px] w-[30px] mr-6' src={old} /> <p className='mr-1 font-semibold'> Lifelong Learner</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data1 === 'Teacher' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Teacher')}> <img className='h-[30px] w-[30px] mr-6' src={Teacher} /> <p className='mr-1 font-semibold'> Teacher</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data1 === 'Other' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Other')}> <img className='h-[30px] w-[30px] mr-6' src={other} /> <p className='mr-1 font-semibold'>Other</p> </div>
        </li>
      </ul>
    </div>
  )
}

export default Description
