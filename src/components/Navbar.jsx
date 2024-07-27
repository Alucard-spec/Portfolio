
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location= useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 const currentLocation=()=>{
    if(location.pathname==='/'){
        return "Home";
    }
    else if(location.pathname==='/projects'){
        return "Projects";
    }
    else if(location.pathname==='/aboutMe'){
      return "About Me";
  }
  else if(location.pathname==='/blogs'){
    return "Blogs"
  }
 }
  return ( location.pathname!=="/"?(
    <nav className=" text-2xl lg:text-xl bg-yellow-200 text-black p-2 px-4 sticky top-0 z-20 ">
      <div className="   flex justify-between ">
        <div className=" font-bold text-3xl">{currentLocation()}</div>

        <div className="flex lg:hidden space-x-10">
          
          <div><Link to="/" className=" hover:bg-white p-2 rounded-lg ">Home</Link></div>
          <div><Link to="/aboutMe" className=" hover:bg-white p-2 rounded-lg">About</Link></div>
          <div><Link to="/projects" className=" hover:bg-white p-2 rounded-lg">Projects</Link></div>
          <div><Link to="/blogs" className=" hover:bg-white p-2 rounded-lg">Blogs</Link></div>
          
         
        </div>

        <div className="hidden lg:block sticky">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="hidden lg:block mt-2">
          <div>  <Link to="/" className=" hover:bg-yellow-200 block py-2 px-4" onClick={toggleMenu}>Home</Link></div>
          <div><Link to="/aboutMe" onClick={toggleMenu} className=" hover:bg-yellow-200 block py-2 px-4">About</Link></div>
          <div><Link to="/projects" onClick={toggleMenu} className=" hover:bg-yellow-200 block py-2 px-4">Projects</Link></div>
          <div><Link to="/blogs" onClick={toggleMenu} className=" hover:bg-yellow-200 block py-2 px-4">Blogs</Link></div>
        </div>
      )}
    </nav>
  ):"");
};

export default Navbar;
