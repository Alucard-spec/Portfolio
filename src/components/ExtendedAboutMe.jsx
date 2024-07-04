import React from 'react';

const ExtendedAboutMe = () => {
  return (
   <div  className='pt-10 p-5 mr-24 lg:mr-10 md:mr-5 sm:mr-0 '>
    <div  className='text-5xl  md:text-3xl pb-8 flex gap-2 w-fit md:mx-auto'>Introduction </div>
    
    {/* Introduction block */}
    
    <div className='flex md:flex-col-reverse justify-between items-center'>
    <div className='text-2xl md:text-xl w-[60%] md:w-full'>
      <span className='font-serif'>My Love For Computers is second to my love for Pasta.</span><br />
      <br />
      Greetings! Originating from the vibrant city of Lucknow, I'm currently immersed in the world of computer science as an undergraduate. I thrive on exploring new destinations, devouring books across genres, and indulging in diverse culinary adventures. Fueled by a relentless drive to accomplish significant milestones, I cherish every moment and aspire to embrace all that life has to offer. <br /> <br /> 
     <div><a href="https://github.com/Alucard-spec" className='text-blue-700 underline hover:bg-yellow-200 p-2 rounded-2xl'>My Github Page</a></div>
     </div>
      
      <img src={require("./Content Writing/profilePic.jpg")} className='object-cover max-h-96 border-4 border-black rounded-full' alt="Avatar" />
      
     </div>
     <div>
     <div  className='text-5xl  md:text-3xl pb-8 pt-8 md:pt-5 md:mx-auto w-fit '>Skills</div>
     <div className='text-2xl md:text-xl flex md:flex-col md:space-y-6 justify-evenly  '><div className=' md:mx-auto '>Web-development</div> <div className=' md:mx-auto '>UI/UX design</div>
     <div className=' md:mx-auto '>Content Writing</div>
       </div>
     </div>
    
     
    
   </div>
   
  )
}

export default ExtendedAboutMe