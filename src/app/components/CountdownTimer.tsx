"use client"
import { url } from 'inspector'
import React ,{useState , useEffect} from 'react'


const CountdownTimer:React.FC = () => {
   
const [time,settime] = useState(0)
const [isRunning,setIsRunning] = useState(false)
const [remainingTime,setRemainingTime] = useState(0)



useEffect ( 
    ()=>{
        let timer:NodeJS.Timeout;
        if(isRunning && remainingTime > 0){
            timer = setInterval(()=>{
            setRemainingTime((prev) => prev - 1)
            },1000)
        }
        else if(remainingTime === 0 ){
            setIsRunning(false)
        }

        return()=> clearInterval(timer)
    },[isRunning,remainingTime])


const handleStart = () => {
    if(time>0){
        setRemainingTime(time)
        setIsRunning(true)
    }
}

const handlePause  = () => {
    setIsRunning(false)
}

const handleReset = () => {
    setIsRunning(false)
    setRemainingTime(0)
    settime(0)

   
}


return(
    <div 
   style={{background:"url('/image/two.jpg' )no-repeat center center/cover"}} >
    <div  className='flex   flex-col min-h-screen items-center justify-center'>
  <img src="/image/2.jpeg" alt="hi"
  className='absolute top-4 h-44 w-44  rounded-full shadow-lg shadow-black'  />

<div className=' p-0 px-8 py-7 mt-28 bg-gradient-to-r from--500 to-red-500 border rounded-3xl shadow-xl border-x-4 border-y-4 border-black shadow-white' > 
  <h1 className='text-3xl border border-black  text-black rounded-full p-3 mb-10  font-bold  uppercase mb-6 shadow-lg   shadow-black'>Countdown Timer</h1>

  <input type="number"

  className='border-2 bg-white border-gray-600 bg-transparent placeholder:text-black placeholder:font-bold placeholder:font-serif text-black p-3 mb-6 text-xl font-bold rounded-2xl w-full '
 
   placeholder='Enter Time in Second'
  value={time > 0 ? time : ""}
  onChange={(e)=>{
  settime(Number(e.target.value))
  }}
   />
<div className='text-3xl text-center underline underline-offset-4 text-white font-bold uppercase mb-6 text-white'>
    {remainingTime} second remaining 
</div>


<div className='flex space-x-6 justify-center'>
    <button
    onClick={handleStart}
    className='bg-gradient-to-br from-red-800 to-purple-600 text-white px-8 py-4 rounded-lg font-normal
     hover:from-red-700 hover:to-purple-700'>Start</button>


    <button
    onClick={handlePause}
    className='bg-gradient-to-br from-green-500 to-yellow-400 text-white px-8 py-4 
    rounded-lg font-normal hover:from-green-600 hover:to-yellow-500'>Pause</button>


    <button
    onClick={handleReset}
    className='bg-gradient-to-br from-gray-700 to-purple-600 text-white px-8 py-4 rounded-lg 
    font-normal hover:from-gray-800 hover:to-purple-700'>Reset</button>


    </div></div>  <h2 className='text-3xl text-black  font-semibold mt-6 underline underline-offset-2 '>Under the supervision of : <strong>Mehak Alamgir</strong>  </h2>
    </div>
  
    </div>
)
}


export default CountdownTimer;