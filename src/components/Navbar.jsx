
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
 }
  return (
    <nav className="bg-[#ffbe0b] text-2xl lg:text-xl text-black p-2 px-4 sticky top-0 z-20 ">
      <div className=" container mx-auto flex justify-between items-center">
        <div className=" font-bold text-3xl">{currentLocation()}</div>

        <div className="flex lg:hidden space-x-10">
          <Link to="/" className=" hover:bg-white p-2 rounded-lg">Home</Link>
         
          <Link to="/projects" className=" hover:bg-white p-2 rounded-lg">Projects</Link>
         
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
         <Link to="/" className=" hover:bg-white block py-2 px-4" onClick={toggleMenu}>Home</Link>
         
          <Link to="/projects" onClick={toggleMenu} className=" hover:bg-white block py-2 px-4">Projects</Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
