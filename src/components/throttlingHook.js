import React from 'react'
import useThrottle from '../hooks/useThrottlinh'

const ThrottlingHook = () => {
    const throttlingHook = useThrottle((value) => {console.log("hello",value)},2000)

    const handleClick = (e) => {
        throttlingHook(e.target.value)
    }

  return (
    <>
    <div>throttlingHook</div>
    <input onChange={(e) => {handleClick(e)}} placeholder='Enter data'/>
    </>
  )
}

export default ThrottlingHook