import React, {useState} from 'react';
import './Flashcard.css';
import WannaPractice from '../../images/wannapractice.gif';
import Whatup from '../../images/whatup.gif';

export default function Card() {
    const [flash, setFlash] = useState(false);
  return (
    <>
        <div className='card-grid'>
            <div className={`flashcard ${flash ? "flash" : ""}`} onClick = {() => setFlash(!flash)}>
                <div className='front' >What's Up!</div>
                <div className='back' >
                    <img className="whatUp" src={Whatup} alt="What's Up" height="98.44px" width="175px"></img>
                </div>
            </div>
        </div>
    </>
  )
}

