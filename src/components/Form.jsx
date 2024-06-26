import React, { useState } from 'react';
import Description from './Description';
import Interested from './Interested';
import Rightplace from './Rightplace';
import Onway from './Onway';
import Finding from './Finding';
import Learnings from './Learnings';
import Math from './Math';
import back from '../assets/back.png';
import '../App.css'; 

const Form = () => {
  const [Page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const totalPages = 5;

  const showPage = () => {
    switch (Page) {
      case 1:
        return <Description setSelectedOption={setSelectedOption} data1={data1} setData1={setData1} />;
      case 2:
        return <Interested setSelectedOption={setSelectedOption} data2={data2} setData2={setData2} />;
      case 3:
        return <Rightplace setSelectedOption={setSelectedOption} />;
      case 4:
        return <Math setSelectedOption={setSelectedOption} data3={data3} setData3={setData3} />;
      case 5:
        return <Onway setSelectedOption={setSelectedOption} />;
      case 6:
        return <Finding setPage={setPage} />;
      case 7:
        return <Learnings setSelectedOption={setSelectedOption} />;
      default:
        return null;
    }
  };

  const handleClickNext = () => {
    setPage((currPage) => currPage + 1);
    setSelectedOption(null);
  };
  const handleClickPrev = () => {
    setPage((currPage) => currPage - 1);
    setSelectedOption('notNull');
  };

  const progressBarWidth = `${(Page / totalPages) * 100}%`;

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={`flex mt-[3.5rem] ${Page === 6 || Page === 7 ? 'hidden' : ''}`}>
        <img
          className={`h-[15px] w-[15px] mt-[-0.3rem] cursor-pointer mr-1 ${Page === 1 ? 'hidden' : ''} `}
          src={back}
          onClick={handleClickPrev}
        />
        <div className='progress-bar-container'>
          <div
            className='progress-bar'
            style={{ width: progressBarWidth }}
          ></div>
        </div>
      </div>
      <div>
        <div className='body'>{showPage(Page)}</div>
      </div>
      <button
        disabled={!selectedOption}
        hidden={Page === 6 || Page === 7}
        onClick={handleClickNext}
        className={`border rounded-lg my-6 py-2 px-6 text-white bg-black ${
          !selectedOption ? 'bg-gray-400' : ''
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default Form;
