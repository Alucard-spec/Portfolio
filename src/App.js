

import { Route, Routes,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ExtendedAboutMe from './components/ExtendedAboutMe.jsx';
import Blog from './components/Blog.jsx';



function App() {

  const {pathname}=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const bodyStyle = {
   margin:0,padding:0,minHeight:'100vh',fontFamily:"sans-serif",fontWeight:400,fontStyle:"normal"
  };
  return (
      
      <div style={bodyStyle}  className="App ">
        
        <Navbar/>
       
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/aboutMe" element={<ExtendedAboutMe/>} />
        <Route path="/blogs" element={<Blog/>} />
      </Routes>
    
      

    </div>
   

  );
}

export default App;
