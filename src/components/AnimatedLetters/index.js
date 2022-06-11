import React from 'react';
import './index.scss';

// letterCase = class
// strArray = array of the charaters
// idx = the index to set the delay of our characters

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
        {
            strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters