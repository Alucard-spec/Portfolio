import React from 'react'

import AboutMe from './AboutMe.jsx'


import Contact from './Contact.jsx'

const Home = () => {
  return (
    <div className='md:text-center pt-36'>
      <div className='flex flex-row-reverse justify-evenly'>
      <img src={require("./Content Writing/avatar.png")} className='flex-none w-64 h-64' alt="Avatar" />
<div className="text-8xl font-bold md:text-4xl lg:text-5xl  w-fit py-12 px-0 box-border ">

Ujjawal Verma
</div></div>


<AboutMe/>

<Contact/></div>
  )
}

export default Home