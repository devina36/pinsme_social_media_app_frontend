import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full">
      <MutatingDots secondaryColor="#9dd6fc" color="#d080f7" heigh={50} width={100} />
      <p className=" text-lg text-center px-2"> {message}</p>
    </div>
  );
};

export default Spinner;
