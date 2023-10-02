import { useState } from "react"

// function useThrottle(callback, delay) {
//     const [run,setRun] = useState(false)
//     return function (...args) {
//       if (!run) {
//         callback(...args)
//         setRun(true)
//         setTimeout( () => setRun(false), delay)
//       }
//     }

function useThrottle(callback,delay) {
    const [run,setRun] = useState(false)

    return(function (...args){
        if(!run){
            callback()
            setRun(true)
            setTimeout(() => setRun(false),delay)
        }
    })
}

export default useThrottle