import React from 'react'

const Projects = () => {
  return (
    <div>

      {/* SPotify Clone */}

    <div className=' py-14 bg-black text-white flex  flex-col justify-evenly border-2 border-black ' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left   "> <span className='border-b-4 border-yellow-400'>Spotify-Clone</span></div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col w-full px-16 lg:px-12 md:px-3 text-2xl md:text-xl italic items-center   '><div className='h-fit w-[60%] md:w-full my-auto'>
        Created a lively Spotify clone using Next.js, Tailwind CSS, and Supabase, bringing music streaming to life! This project includes a range of exciting features such as user authentication, song uploads, liked playlists, and seamless song playback, making it a joy to explore and enjoy your favorite tunes.<br />
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
        Created a gamified to-do application that turns task management into an exciting adventure! Users can add tasks and assign them difficulty levels, with tougher tasks yielding higher scores. As users complete tasks and rack up points, they advance to higher ranks or levels, making productivity fun and rewarding.<br />
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
        Created a platformer video game using Godot, featuring two levels filled with strawberries. The game, adorned with vibrant free assets from itch.io, invites players to collect as many juicy strawberries as possible while navigating through the levels to reach the finish line.<br />
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
        Created a fun and engaging typing test web app that measures typing speed in words per minute. Built with React.js and Tailwind CSS, the app delivers a smooth and responsive user experience, making the challenge of improving your typing skills both enjoyable and rewarding.<br />
        <a href="https://github.com/Alucard-spec/Type-Warrior" className='text-blue-500 font-bold hover:bg-black p-1 rounded-xl'>Github Repo</a>  </div>
<br /><div className='w-[40%] md:w-full'>
<img className='object-cover mx-auto ' alt='Project sample' src={require("./Content Writing/Type_warrior.png")}  /></div>

</div>
    </div>

    {/* School Website */}

    <div className=' py-14 bg-black text-white  flex  flex-col justify-evenly border-2 border-black ' >
       <div className=" font-bold text-5xl lg:text-4xl md:text-3xl px-16 lg:px-12 md:px-3  text-left  "> <span className='border-b-4 border-yellow-400'>School Website</span></div>
      <br />
       
        <div className='flex gap-16 lg:gap-6 md:gap-1 md:flex-col  px-16 lg:px-12 md:px-3 text-2xl md:text-xl items-center italic   '><div className='h-fit w-[60%] md:w-full my-auto'>
        Created a vibrant and interactive school website that showcases the school's features and curriculum using randomly generated data. The site is packed with fun functionalities like a gallery with filters, a lively carousel, and user-friendly forms. Using React.js for seamless front-end development and Tailwind CSS for a sleek, modern design, this project was a joy to build and brings the school's offerings to life.<br />
        <a href="https://github.com/Alucard-spec/School-website" className='text-blue-500 font-bold hover:bg-white p-1 rounded-xl'>Github Repo</a>  </div>
<br /><div className='w-[40%] md:w-full'>
<img className='object-cover mx-auto ' alt='Project sample' src={require("./Content Writing/School_website.png")}  /></div>

</div>
    </div>
   

    </div>
  )
}

export default Projects