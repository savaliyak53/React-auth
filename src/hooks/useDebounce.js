import React, { useEffect, useState } from 'react';

// const useDebounce = (callback, delay) => {
//     const [timer, setTimer] = useState(null);
  
//     useEffect(() => {
//       return () => {
//         if (timer) {
//           clearTimeout(timer);
//         }
//       };
//     }, [timer]);
  
//     const debouncedFunction = (...args) => {
//       if (timer) {
//         clearTimeout(timer);
//       }
  
//       setTimer(setTimeout(() => {
//         callback(...args);
//       }, delay));
//     };
  
//     return debouncedFunction;
//   };

// export default useDebounce

const useDebounce = (callback,delay) => {
  const [timer,setTimer] = useState(null)

  useEffect(() => {
    return () => {
      if(timer){
        clearTimeout(timer)
      }
    }
  } ,[timer])

  const debounce = (...argus) => {
    if(timer){
      clearTimeout(timer)
    }
    setTimer(setTimeout(() => {
      callback(...argus)
    },delay))
  }
  return debounce
}

export  default useDebounce