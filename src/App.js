

import { Route, Routes } from 'react-router-dom';

import Posts from "./components/Posts.jsx";
import Home from "./components/Home.jsx";
import Navigation from './components/Navigation.jsx';



function App() {
  const bodyStyle = {
    backgroundColor: '#ffbe0b',color:'#000814',margin:0,padding:0,
  };
  return (
      
      <div style={bodyStyle}  className="App">
        
        <Navigation/>
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/post" element={<Posts/>} />
      </Routes>
    
      

    </div>
   

  );
}

export default App;
