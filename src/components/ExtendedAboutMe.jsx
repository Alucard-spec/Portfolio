import React from 'react';
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import {motion} from "framer-motion";
const ExtendedAboutMe = () => {
  return (
   <motion.div animate={{x:0}} initial={{x:-200}} transition={{duration:0.6}} className='pt-10 p-5 mr-24 lg:mr-10 md:mr-5 sm:mr-0'>
    <div  className='text-5xl  md:text-3xl pb-8 flex space-x-2'><div>Introduction </div><FaRegFaceGrinBeam/></div>
    <div className='text-2xl md:text-xl'>
    Hey There! My Name is as you have seen on the main page Ujjawal Verma. <br />
    My earliest memory with using computers is from 5th standard when i got my first PC. I started playing video games soon after and that opened a whole new Portal of entertainment for me. And I started to explore what else can you do with this. <br />
    I am currently developing my skills in UI/UX designing, Web Development and Game Development. <br />
     <br />
     <div><a href="https://github.com/Alucard-spec" className='text-purple-800 underline hover:text-white'>My Github Page</a></div>
     </div>

     <div className='text-5xl md:text-3xl pb-8 pt-10 md:pt-5 w-fit mx-auto'>Contact</div>
    <div className=' text-3xl md:text-2xl flex md:flex-col  gap-10 md:gap-4 mx-auto w-fit italic underline pt-10 md:pt-4'> 
    <motion.div animate={{x:0}} initial={{x:-200}}  whileHover={{ scale: 1.2 }}
   transition={{duration:0.6}} className="text-3xl flex space-x-2 md:text-2xl md:mx-auto  w-fit box-border ">

<a href="https://www.linkedin.com/in/ujjawal-verma-1a57a125a/">Linked In</a><CiLinkedin size={40} color='blue'/>
</motion.div>
<motion.div animate={{x:0}} initial={{x:-400}}  whileHover={{ scale: 1.2 }}
   transition={{duration:0.6}} className="text-3xl flex space-x-2 md:text-2xl md:mx-auto  w-fit box-border ">

<a href="https://www.instagram.com/ujjawal._.verma/">Instagram</a><FaInstagram size={40} color='red'/>
</motion.div>
<motion.div animate={{x:0}} initial={{x:-600}}  whileHover={{ scale: 1.2 }}
   transition={{duration:0.6}} className="text-3xl flex space-x-2 md:text-2xl md:mx-auto   w-fit box-border ">

<a href="https://twitter.com/ujjawal_verma9">Twitter</a><CiTwitter size={40} color='blue'/>
</motion.div>
    </div>
    
   </motion.div>
   
  )
}

export default ExtendedAboutMe