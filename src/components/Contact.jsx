import React from 'react'

const Contact = () => {
    return (
        <div>
        <div className='mx-12 py-14 flex justify-evenly md:flex-col md:gap-8' >
           <div className="bg-white font-bold text-3xl p-4 rounded-3xl h-fit my-auto md:mx-auto w-fit ">Contact</div>
            <div className='text-center text-2xl '><a href="https://www.instagram.com/ujjawal._.verma/" className='border-black border-4 hover:bg-black hover:text-white p-2 transition-all font-serif'>Instagram</a> <img src={require('./Content Writing/Insta.png')} alt="Instagram" className='w-48 pt-5 md:mx-auto'/>  </div>
            <div className='text-center text-2xl '> <a href="https://www.linkedin.com/in/ujjawal-verma-1a57a125a/" className='border-black border-4 hover:bg-black hover:text-white p-2 transition-all font-serif '>LinkedIn</a><img  src={require('./Content Writing/linkedININ.png')} alt="Linked-In" className='w-48 pt-5 md:mx-auto'/></div>
            <div className='text-center text-2xl '> <a href="https://twitter.com/ujjawal_verma9" className='border-black border-4 rounded-md hover:bg-black hover:text-white p-2 transition-all font-serif'>Twitter</a><img src={require('./Content Writing/linkedIn.png')} alt="X" className='w-48 pt-5 md:mx-auto'/></div>
        </div>
        
        </div>
      )
}

export default Contact