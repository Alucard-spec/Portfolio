import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useScrollPosition } from '../hooks/userScrollPosition.js';
const Navigation = () => {
  let location = useLocation();
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const scrollPosition = useScrollPosition();
  return (
    <div><div className={classNames(scrollPosition>20?"flex justify-evenly transition-all bg-white text-2xl mb-12 p-2  fixed w-[100%] z-10 ":"flex justify-evenly text-2xl mb-12 p-2  fixed w-[100%] z-10 ")}> 
    <div className={(location.pathname==='/')?'bg-black text-white p-3 rounded-xl':'p-3 rounded-xl'}> <Link to='/'>HOME</Link></div>
    
    <div className={(location.pathname==='/projects')?'bg-black text-white p-3 rounded-xl ':'p-3 rounded-xl'}><Link to='/projects' >PROJECTS</Link></div>
   
   
  </div></div>
  )
  
}

export default Navigation