import React from 'react'

const Projects = () => {
  return (
    <div className='md:text-center pt-24'>
    <div className=' py-14 flex  flex-col justify-evenly border-2 border-black m-1' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 text-left md:text-center"> Spotify-Clone</div>
      <br />
       
        <div className='w-full px-16 text-2xl md:text-xl italic   '>
A clone of one of the most popular streaming websites spotify. <br />Made with the help of Next-js , Tailwind and Supabase . <br />
Contains various functinalities like User Authentication, Song Upload , Liked Playlist and ofcourse song playback. <br />
<br />
<iframe src="https://spotify-clone-oydb.vercel.app/" frameborder="0" title='spotify-clone'></iframe>
<span className='font-bold'> Live Website</span> -{'>'} <a href="https://spotify-clone-oydb.vercel.app/" className='text-purple-800 font-bold hover:bg-white p-3'>Spotify-Clone</a>
</div>
    </div></div>
  )
}

export default Projects