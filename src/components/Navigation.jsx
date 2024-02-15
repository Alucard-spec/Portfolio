import React from 'react'
import {motion} from "framer-motion";
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
    <motion.div whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }} className={(location.pathname==='/')?'bg-black text-white p-3 rounded-xl':'p-3 rounded-xl'}> <Link to='/'>HOME</Link></motion.div>
    
    <motion.div whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }} className={(location.pathname==='/projects')?'bg-black text-white p-3 rounded-xl ':'p-3 rounded-xl'}><Link to='/projects' >PROJECTS</Link></motion.div>
   
   
  </div></div>
  )
  
}

export default Navigation