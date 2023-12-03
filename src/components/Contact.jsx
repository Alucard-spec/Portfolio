import React from 'react'

const Contact = () => {
    return (
        <div>
        <div className='m-12 py-24 flex justify-evenly' >
           <button class="bg-white font-bold text-3xl p-4 rounded-3xl h-fit my-auto  hover:bg-black hover:text-white transition-all">Contact</button>
            <div className='text-center text-4xl'><a href="https://www.instagram.com/ujjawal._.verma/" className='border-black border-4 hover:bg-black hover:text-white p-2 transition-all font-serif'>Instagram</a> <img src={require('./Content Writing/Insta.png')} alt="Instagram" className='w-48 pt-5'/>  </div>
            <div className='text-center text-4xl '> <a href="https://www.linkedin.com/in/ujjawal-verma-1a57a125a/" className='border-black border-4 hover:bg-black hover:text-white p-2 transition-all font-serif'>Linked In</a><img src={require('./Content Writing/linkedININ.png')} alt="Linked-In" className='w-48 pt-5'/></div>
            <div className='text-center text-4xl'> <a href="https://twitter.com/ujjawal_verma9" className='border-black border-4 rounded-md hover:bg-black hover:text-white p-2 transition-all font-serif'>Twitter</a><img src={require('./Content Writing/linkedIn.png')} alt="X" className='w-48 pt-5'/></div>
        </div>
        <div  className='text-center font-bold'><div className='text-3xl'>That's It For Now </div><br /><div className='text-2xl '>More Stuff Coming Soon </div>
       </div>
        </div>
      )
}

export default Contact