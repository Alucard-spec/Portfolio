

import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ExtendedAboutMe from './components/ExtendedAboutMe.jsx';



function App() {
  const bodyStyle = {
    backgroundColor: '#ffbe0b',color:'#000814',margin:0,padding:0,minHeight:'100vh',fontFamily:"Anta, sans-serif",fontWeight:400,fontStyle:"normal"
  };
  return (
      
      <div style={bodyStyle}  className="App ">
        
        <Navbar/>
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/aboutMe" element={<ExtendedAboutMe/>} />
      </Routes>
    
      

    </div>
   

  );
}

export default App;
