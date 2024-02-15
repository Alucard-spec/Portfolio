

import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';



function App() {
  const bodyStyle = {
    backgroundColor: '#ffbe0b',color:'#000814',margin:0,padding:0,minHeight:'100vh'
  };
  return (
      
      <div style={bodyStyle}  className="App ">
        
        <Navbar/>
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    
      

    </div>
   

  );
}

export default App;
