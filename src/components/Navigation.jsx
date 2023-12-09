import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div><div className="flex justify-evenly text-2xl mb-12 p-4 bg-black text-white fixed w-[100%] z-10 opacity-30"> 
    <div><Link to='/'>HOME</Link></div>
    <div>Projects</div>
    <div><Link to='/post'>Posts/Blogs</Link></div>
  </div></div>
  )
}

export default Navigation