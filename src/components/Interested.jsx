import React, { useState } from 'react'
import arrow  from '../assets/arrow.png'
import earth from '../assets/earth.png'
import ruler from '../assets/ruler.png'
import target from '../assets/target.png'
import eyes from '../assets/eyes.png'



const Interested = ({setSelectedOption,data2,setData2}) => {

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setData2(option);
  };

  return (
    <div className='flex justify-center w-[95%] sm:w-[40vw] flex-col'>
      <header className='text-center my-3' >
        <h1 className='sm:text-3xl text-2xl font-bold my-[1.75rem] '>Which are you most interested in ?</h1>
        <p className='sm:text-[1rem] text-[0.9rem]'>{`Choose just one. This will help us get you started(but won't let experience)`}</p>
      </header>
      <ul className='my-7 ml-[12px]'>
        <li  >
          <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data2 === 'Learning' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Learning')}>
          <img className='h-[30px] w-[30px] mr-6' src={arrow} /> <p>Learning specific skills to advance my career</p> </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data2 === 'Exploring' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Exploring')}> <img className='h-[30px] w-[30px] mr-6' src={earth} /> <p>Exploring new topics i'm interested in</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data2 === 'Refreshing' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Refreshing')}> <img className='h-[30px] w-[30px] mr-6' src={ruler} />  <p>Refreshing my math foundations</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data2 === 'Exercising' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Exercising')}> <img className='h-[30px] w-[30px] mr-6' src={target} /> <p>Exercising my brain to stay sharpen</p>  </div>
           <div
            className={`flex p-4 rounded-md border-[1px] hover:scale-[1.02] transition-all cursor-pointer ${data2 === 'Something else' ? 'border-yellow-500' : 'border-gray-200'} my-2`}
            onClick={() => handleOptionSelect('Something else')}> <img className='h-[30px] w-[30px] mr-6' src={eyes} /> <p> Something else</p>  </div>
           </li>
      </ul>
    </div>
  )
}

export default Interested
