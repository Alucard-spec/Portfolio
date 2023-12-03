import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";

import Skills from "./components/Skills.jsx";

import TypingAnimation from "./components/TypingAnimation.jsx";



function App() {
  const bodyStyle = {
    backgroundColor: '#ffbe0b',color:'#000814',margin:0,padding:0,
  };
  return (
  
      <div style={bodyStyle}  className="App">
    <div className="text-8xl font-bold  p-12 text-left w-fit  mx-40">
      This Is <br />
      Ujjawal Verma
    </div>
    <div className="font-bold w-fit font-serif mx-auto origin-center " >
    <TypingAnimation/></div>
    <div>
     <AboutMe/>
    </div>
    <div>
      <Skills/>
    </div>
     <div><Contact/></div>

    </div>
   

  );
}

export default App;
