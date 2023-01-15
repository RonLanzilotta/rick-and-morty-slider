import { FormControlUnstyledContext } from '@mui/base';
import { useState } from 'react'

export default function Slider({ character }) {

    const [index, setIndex] = useState([0])

    function changeCharacter() {
        if (index === -1) {
            return index++;

        } else if ( index >= 20 ) {
            return index;

        } else {
            
        }
        }
    
  
  return (
    <div className="slider">
        <div className="sliderButton" id="left" onClick={() => setIndex(index--)}></div>
        <div className="imageField">
            <img className="characterImage" src={character[index].image}></img>
        </div>
        <div className="characterInfo"></div>
        <div className="sliderButton" id="right" onClick={() => setIndex(index++)}></div>
    </div>
  );
}
