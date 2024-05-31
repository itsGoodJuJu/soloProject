import React, {useState, useContext} from 'react';
import './Flashcard.css';
import WannaPractice from '../../images/wannapractice.gif';
import Whatup from '../../images/whatup.gif';
import { flipContext } from './FlashcardStudy';
import ResetButton from './ResetButton'

export default function Card() {
    const [flipCount, setFlipCount] = useContext(flipContext);
    const [flash, setFlash] = useState(false);

    function countFlips() {
        setFlipCount(flipCount + 1);
        setFlash(!flash);
      }

  return (
    <>
        <div  className='card-grid'>
            <div className={`flashcard ${flash ? "flash" : ""}`} onClick = {countFlips}>
                <div className='front' >What's Up!</div>
                <div className='back' >
                    <img className="whatUp" src={Whatup} alt="What's Up" height="98.44px" width="175px"></img>
                </div>
            </div>
        </div>
        <ResetButton />
    </>
  )
}

