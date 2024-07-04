import React from 'react'
import { Link } from 'react-router-dom';

import {motion} from "framer-motion";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Home = () => {


  return (
    <div className='md:text-center pt-12 md:pt-4'>
      <div className='flex flex-row-reverse justify-evenly md:flex-col'><div>
      <img src={require("./Content Writing/avatar.png")} className='md:mx-auto flex-none w-64 h-64 border-2 rounded-full rounded-s-2xl rounded-t-sm bg-yellow-200 border-neutral-800' alt="Avatar" /></div>
<motion.div animate={{x:0}} initial={{x:-400}}  whileHover={{ scale: 1.2 }}
    className="text-8xl md:mx-auto font-bold md:text-4xl lg:text-5xl  w-fit py-12 px-0 box-border ">

<span className='bg-yellow-200 rounded-full p-2'>U</span>jjawal <span className='bg-yellow-200 rounded-full p-2'>V</span>erma
</motion.div></div>

<div className="flex text-5xl space-y-10 flex-col text-center p-12 lg:text-3xl w-fit mx-auto">
          
          
          <div><Link to="/aboutMe" className="underline hover:bg-yellow-200 p-2 rounded-lg">About</Link></div>
          <div><Link to="/projects" className="underline hover:bg-yellow-200 p-2 rounded-lg">Projects</Link></div>
          
         
        </div>

        <div>
    
    <div className=' text-3xl md:text-2xl flex md:flex-col  gap-10 md:gap-4 mx-auto w-fit  italic underline pt-6 md:pt-4'> 
    <div animate={{x:0}} initial={{x:-200}}  whileHover={{ scale: 1.2 }}
    className="text-3xl flex gap-2 md:text-2xl w-fit md:mx-auto  box-border ">

<a href="https://www.linkedin.com/in/ujjawal-verma-1a57a125a/">Linked In</a><CiLinkedin size={40} color='blue'/>
</div>
<div animate={{x:0}} initial={{x:-400}}  whileHover={{ scale: 1.2 }}
    className="text-3xl flex gap-2 w-fit md:mx-auto md:text-2xl  box-border ">

<a href="https://www.instagram.com/ujjawal._.verma/">Instagram</a><FaInstagram size={40} color='red'/>
</div>
<div animate={{x:0}} initial={{x:-600}}  whileHover={{ scale: 1.2 }}
    className="text-3xl flex gap-2 md:text-2xl  md:mx-auto   w-fit box-border ">

<a href="https://twitter.com/ujjawal_verma9">Twitter</a><CiTwitter size={40} color='blue'/>
</div>
    </div></div>

</div>
  )
}

export default Home
