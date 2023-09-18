import React ,{useEffect, useRef, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const [time,setTime] = useState(3)
  const navigate =useNavigate()
  let timeRef = useRef()
  useEffect(()=>{
  const timer=  setInterval(()=>{
       
      if(timeRef.current === 1){
             clearInterval(timer)
             navigate('home')
      }
      setTime((time)=>{
        console.log('time',time);
        timeRef.current = time
        return time-1
      })

      
       
    },1000)
  },[])
  return (
    <div>
      <h1>error , 404</h1>
      <p>{time}s later,back to <Link to='/home'>home</Link></p>
    </div>
  )
}
