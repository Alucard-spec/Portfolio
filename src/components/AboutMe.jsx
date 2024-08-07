import React from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
const AboutMe = () => {
  return (
    <div className='mx-12 py-14 flex  md:flex-col justify-evenly ' >
       <motion.div  whileHover={ {scale:1.5} }  className='my-auto mx-auto ' ><Link to="/aboutMe">About Me</Link></motion.div>
<br/>
       
        <div className='w-[50%] md:w-full text-2xl font-semibold md:py-2 py-12 z-10'>
Just a guy having great interest and love for developing softwares and websites. I enjoy working with computers and passionate about learning and working with new technologies.
</div>
    </div>
  )
}

export default AboutMe
