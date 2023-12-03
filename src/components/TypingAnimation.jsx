import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const TypingAnimation = () => {
 return(
<TypeAnimation
      sequence={[
        
        ' A Developer',
        1000, 
        ' A Designer',
        1000,
        ' A Writer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '4.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
 );
};

export default TypingAnimation;