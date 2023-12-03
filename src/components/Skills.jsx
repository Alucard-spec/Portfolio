import React from 'react';

const Skills = () => {

  
  return (
    <div className={`m-12 py-24 flex justify-evenly`} >
       <button class="bg-white font-bold text-3xl p-4 rounded-3xl h-fit my-auto  hover:bg-black hover:text-white transition-all">Skills</button>
        <div className='hover:scale-150 transition-all cursor-crosshair'><img src={require('./Content Writing/1.png')} alt='Content Writing' className='w-48' /></div>
        <div className='hover:scale-150 transition-all cursor-crosshair'><img src={require('./Content Writing/2.png')} alt='Content Writing' className='w-48' /></div>
        <div className='hover:scale-150 transition-all cursor-crosshair'><img src={require('./Content Writing/3.png')} alt='Content Writing' className='w-48'/></div>

    </div>
  )
}

export default Skills