import React, { useEffect } from 'react';
import MathJax from 'react-mathjax';

const Math = ({ setSelectedOption, data3, setData3 }) => {

  const formula1 = `5 \\times \\frac{1}{2} = ?`;
  const formula2 = `ax^2 + bx + c = 0`;
  const formula3 = `x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}`;
  const formula4 = `\\int_a^b f(x) \\,dx`;


  const handleClick = (option) => {
    setSelectedOption(option);
    setData3(option);
  }

  return (
    <MathJax.Provider>
      <div className='flex justify-center w-full sm:w-[40vw] flex-col'>
        <header className='text-center my-3'>
          <h1 className='sm:text-3xl text-2xl font-bold my-[1.75rem] '>
            Which is your math comfort level?
          </h1>
          <p className='sm:text-[1rem] text-[0.8rem]'>
            {`Choose the highest level you feel confident in-you can always change it later`}
          </p>
        </header>
        <ul className='my-7 '>
          <li className='flex flex-col sm:flex-row justify-center items-center gap-6'>
            <div className={`flex flex-col text-center w-[70%] sm:w-full p-3 sm:p-7  border rounded-md hover:scale-[1.02] transition-all cursor-pointer ${data3 === 'Arithmetic' ? 'border-yellow-500' : 'border-gray-200'}`}
              onClick={() => handleClick('Arithmetic')}>
              <MathJax.Node formula={formula1} />
              <h1 className='font-semibold '>Arithmetic</h1>
              <p>INTRODUCTORY</p>
            </div>

            <div className={`flex flex-col text-center w-[70%] sm:w-full p-3 sm:p-7 border rounded-md hover:scale-[1.02] transition-all cursor-pointer ${data3 === 'BasicAlgebra' ? 'border-yellow-500' : 'border-gray-200'}`}
              onClick={() => handleClick('BasicAlgebra')}>
              <MathJax.Node formula={formula2} />
              <h1 className='font-semibold '>Basic Algebra</h1>
              <p>FOUNDATIONAL</p>
            </div>

            <div className={`flex flex-col text-center w-[70%] sm:w-full p-3 sm:p-7 border rounded-md hover:scale-[1.02] transition-all cursor-pointer ${data3 === 'IntermediateAlgebra' ? 'border-yellow-500' : 'border-gray-200'}`}
              onClick={() => handleClick('IntermediateAlgebra')}>
              <MathJax.Node formula={formula3} />
              <h1 className='font-semibold '>Intermediate Algebra</h1>
              <p>INTERMEDIATE</p>
            </div>

            <div className={`flex flex-col text-center w-[70%] sm:w-full p-3 sm:p-7 border rounded-md hover:scale-[1.02] transition-all cursor-pointer ${data3 === 'Calculus' ? 'border-yellow-500' : 'border-gray-200'}`}
              onClick={() => handleClick('Calculus')}>
              <MathJax.Node formula={formula4} />
              <h1 className='font-semibold '>Calculus</h1>
              <p>ADVANCED</p>
            </div>
          </li>
        </ul>
      </div>

    </MathJax.Provider>
  );
};

export default Math;
