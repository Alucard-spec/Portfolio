import React from 'react';
import {motion} from "framer-motion"
const ExtendedAboutMe = () => {
  return (
   <div  className='pt-10 p-5 mr-24 lg:mr-10 md:mr-5 sm:mr-0 '>
    
    
    {/* Introduction block */}
    
    <div className='flex md:flex-col-reverse justify-between items-center'>
    <div className='text-2xl md:text-xl w-[60%] md:w-full'>
      <span className='font-serif'>My Love For <span className='border-b-4 border-yellow-200'>Computers</span> is second to my love for <span className='border-b-4 border-yellow-200'>Pasta</span>.</span><br />
      <br />
      Greetings! Originating from the vibrant city of Lucknow, I'm currently immersed in the world of computer science as an undergraduate. I thrive on exploring new destinations, devouring books across genres, and indulging in diverse culinary adventures. Fueled by a relentless drive to accomplish significant milestones, I cherish every moment and aspire to embrace all that life has to offer. <br /> <br /> 
     <div><a href="https://github.com/Alucard-spec" className='text-blue-700 underline hover:bg-yellow-200 p-2 rounded-2xl'>My Github Page</a></div>
     <div><a href="https://drive.google.com/file/d/1mM5piucEmbATspRIKDSmx_Ym0n75cFy3/view?usp=drive_link" className='text-blue-700 underline hover:bg-yellow-200 p-2 rounded-2xl'>My Resume</a></div>
     </div>
      
      <motion.img animate={{scale:1}} initial={{scale:0}} transition={{duration:0.5}} src={require("./Content Writing/profilePic.jpg")} className='object-cover max-h-96 border-4 border-black rounded-full' alt="Avatar" />
      
     </div>
     <div>
     <div className='pt-6 text-3xl '>  <span className='bg-yellow-200 rounded-full p-1'>W</span>hat <span className='bg-yellow-200 rounded-full p-1'>I</span> <span className='bg-yellow-200 rounded-full p-1'>D</span>o</div>
     <div className='text-2xl md:text-xl flex md:flex-col md:space-y-6 justify-between w-[70%] md:w-full lg:w-[85%] items-center pt-6 '><div className=' md:mx-auto border-b-4 border-yellow-400'>Web-development</div> <div className=' md:mx-auto border-b-4 border-yellow-400'>System Design</div>
     <div className=' md:mx-auto border-b-4 border-yellow-400'>Content Writing</div>
       </div>
     </div>
    
     
    
   </div>
   
  )
}

export default ExtendedAboutMe