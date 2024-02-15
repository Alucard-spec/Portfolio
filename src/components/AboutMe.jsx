import React from 'react'
import {motion} from "framer-motion";
const AboutMe = () => {
  return (
    <div className='mx-12 py-14 flex  md:flex-col justify-evenly ' >
       <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} className='my-auto mx-auto' ><motion.img whileHover={{scale:1.2}} className='cursor-pointer w-52 object-cover' src={require("./Content Writing/aboutme.png")} alt="about me" /></motion.div>
<br/>
       
        <div className='w-[50%] md:w-full text-2xl font-semibold md:py-2 py-12 '>
A CSE Student having a great interest and love for building softwares and websites. I enjoy working with computers and passionate about learning and working with new technologies.
</div>
    </div>
  )
}

export default AboutMe
