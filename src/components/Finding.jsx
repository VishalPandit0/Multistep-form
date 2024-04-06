import React, { useEffect } from 'react';
import '../App.css'; 

const Finding = ({ setPage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setPage]);

  return (
    <div className='loader-container' >
      <div className='loader'></div>
      <div className='sm:text-4xl text-2xl font-bold mx-20 text-center mt-10'>
        Finding learning path recommendations for you based on your responses
      </div>
    </div>
  );
};

export default Finding;
