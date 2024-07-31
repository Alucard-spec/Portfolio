import React from 'react'

const Projects = () => {
  return (
    <div>

      {/* SPotify Clone */}

    <div className=' py-14 bg-black text-white flex  flex-col justify-evenly border-2 border-black ' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left   "> <span className='border-b-4 border-yellow-400'>Spotify-Clone</span></div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col w-full px-16 lg:px-12 md:px-3 text-2xl md:text-xl italic items-center   '><div className='h-fit w-[60%] md:w-full my-auto'>
        Created a clone of Spotify using Next.js, Tailwind CSS, and Supabase. The project includes various functionalities such as user authentication, song upload, liked playlists, and song playback.<br />
<a href="https://spotify-clone-oydb.vercel.app/" className='text-blue-500 font-bold hover:bg-white p-1 rounded-xl'>Github Repo</a> </div>
<br /><div className='w-[40%] md:w-full'>
<img className=' object-cover mx-auto ' alt='project sample' src={require("./Content Writing/Spotify_clone.png")}  /></div>

</div>
    </div>

    {/* RPL TODO */}
    
    <div className=' py-14 bg-white  flex  flex-col justify-evenly border-2 border-black ' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left  "><span className='border-b-4 border-yellow-400'> Role Playing Life </span></div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col  px-16 lg:px-12 md:px-3 text-2xl md:text-xl items-center italic   '><div className='h-fit w-[60%] md:w-full my-auto'>
        Created a gamified to-do application where users could add tasks and assign them difficulty levels. Tasks with higher difficulty levels yielded higher scores upon completion, contributing to the user's overall score. Upon accumulating enough score, users advanced to higher ranks or levels, adding a competitive and rewarding element to task management.<br />
        <a href="https://github.com/Alucard-spec/RPL-Todo" className='text-blue-500 font-bold hover:bg-black p-1 rounded-xl'>Github Repo</a>  </div>
<br /><div className='w-[40%] md:w-full'>
<img className='object-cover mx-auto ' alt='Project sample' src={require("./Content Writing/RPL.png")}  /></div>

</div>
    </div>

      {/* Jump Game */}

    <div className=' py-14 bg-black text-white  flex  flex-col justify-evenly border-2 border-black ' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left  "> <span className='border-b-4 border-yellow-400'>Jump Game</span></div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col  px-16 lg:px-12 md:px-3 text-2xl md:text-xl items-center italic   '><div className='h-fit w-[60%] md:w-full my-auto'>
        Created a platformer video game using Godot, featuring two exciting levels. The game utilizes free assets from itch.io. Players are tasked with collecting as many strawberries as possible while navigating through the levels to reach the finish line.<br />
        <a href="https://github.com/Alucard-spec/platformer" className='text-blue-500 font-bold hover:bg-white p-1 rounded-xl'>Github Repo</a>  </div>
<br /><div className='w-[40%] md:w-full'>
<img className='object-cover mx-auto ' alt='Project sample' src={require("./Content Writing/Platformer.png")}  /></div>

</div>
    </div>

    {/* Type Warrior */}

    <div className=' py-14 bg-white  flex  flex-col justify-evenly border-2 border-black ' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left  "><span className='border-b-4 border-yellow-400'>Type Warrior</span></div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col  px-16 lg:px-12 md:px-3 text-2xl md:text-xl items-center italic   '><div className='h-fit w-[60%] md:w-full my-auto'>
        Created a typing test web app to measure typing speed in words per minute. The project was built using React.js and Tailwind CSS for a smooth and responsive user experience.<br />
        <a href="https://github.com/Alucard-spec/Type-Warrior" className='text-blue-500 font-bold hover:bg-black p-1 rounded-xl'>Github Repo</a>  </div>
<br /><div className='w-[40%] md:w-full'>
<img className='object-cover mx-auto ' alt='Project sample' src={require("./Content Writing/Type_warrior.png")}  /></div>

</div>
    </div>

    

    </div>
  )
}

export default Projects