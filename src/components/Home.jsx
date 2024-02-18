import React from 'react'

import AboutMe from './AboutMe.jsx'
import {motion} from "framer-motion";



const Home = () => {


  return (
    <motion.div animate={{x:"0%"}} initial={{x:"-50%"}} transition={{duration:0.9}}  className='md:text-center pt-36'>
      <div className='flex flex-row-reverse justify-evenly md:flex-col'><div>
      <img src={require("./Content Writing/avatar.png")} className='md:mx-auto flex-none w-64 h-64' alt="Avatar" /></div>
<motion.div animate={{x:0}} initial={{x:-400}}  whileHover={{ scale: 1.2 }}
   transition={{duration:0.6}} className="text-8xl md:mx-auto font-bold md:text-4xl lg:text-5xl  w-fit py-12 px-0 box-border ">

Ujjawal Verma
</motion.div></div>


<AboutMe/>


</motion.div>
  )
}

export default Home
