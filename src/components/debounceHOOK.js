import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const Debounce = () => {
  const debouncedFunction = useDebounce((value) => {
    console.log(value)
    APICALL(value)
  }, 2000);

  const APICALL = (value) => {
    console.log("apicalss",value)
  }

  const handleClick = (e) => {
    debouncedFunction(e.target.value);
  };

  return (
    <input type='text' onChange={(e) => handleClick(e)} placeholder='please enter' />
  );
};

export default Debounce;
