import React from 'react'
import TypingAnimation from './TypingAnimation.jsx'
import AboutMe from './AboutMe.jsx'

import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

const Home = () => {
  return (
    <div>
<div className="text-8xl font-bold  p-24 text-left w-fit mx-40">
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
<div className=''><Contact/></div></div>
  )
}

export default Home