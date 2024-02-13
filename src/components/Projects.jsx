import React from 'react'

const Projects = () => {
  return (
    <div className=' pt-24'>
    <div className=' py-14 flex  flex-col justify-evenly border-2 border-black m-1' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left  "> Spotify-Clone</div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col w-full px-16 lg:px-12 md:px-3 text-2xl md:text-xl italic   '><div className='h-fit my-auto'>
A clone of one of the most popular streaming websites spotify. <br />Made with the help of Next-js , Tailwind and Supabase . <br />
Contains various functinalities like User Authentication, Song Upload , Liked Playlist and ofcourse song playback.<br />
<span className='font-bold'> Live Website</span> -{'>'} <a href="https://spotify-clone-oydb.vercel.app/" className='text-purple-800 font-bold hover:bg-white p-3'>Spotify-Clone</a> </div>
<br /><div>
<iframe className=' h-96 w-96 md:w-60 md:h-60 md:' src="https://spotify-clone-oydb.vercel.app/" frameborder="0" title='spotify-clone' ></iframe></div>

</div>
    </div></div>
  )
}

export default Projects