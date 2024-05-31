import React, {useState, useContext, createContext} from 'react';
import ResetButton from './ResetButton'
import Whatup from '../../images/whatup.gif';
import { flipContext } from './FlashcardStudy';
import { cardBank } from './cardBank';
import './Flashcard.css';

export const indivContext = createContext()

export default function Card() {
    const [flipCount, setFlipCount] = useContext(flipContext);
    // creates a useState to keep track of how many times each individual card is flipped
    const [ indivCount, setIndivCount] = useState(0);
    // creates a useState to keep track of whether the card has been flipped or not
    const [flash, setFlash] = useState(false);

    // creates an onClick function to increment the count by one each time the flashcard is clicked
    // creates an onClick function to update the useState of whether the card was flashed or not
    function countFlips() {
        setFlipCount(flipCount + 1);
        setIndivCount(indivCount + 1);
        setFlash(!flash);
    }

    const mapBank = cardBank.map(signs => 
        // console.log(signs.url)
        // <div className='signCard' key={signs.id}>
        //     <img src={signs.url} alt="sign"></img>
        // </div>
        <>
            <div className={`flashcard ${flash ? "flash" : ""}`} onClick = {countFlips}>
                <h3 className='front' >{signs.word}</h3>
                <div className='back' >
                    <img className="whatUp" src={signs.url} alt="What's Up" height="98.44px" width="175px"></img>
                </div>
            </div>
            <p className='indivCount'> Individual Flip Count: {indivCount}</p>
            <indivContext.Provider value={[indivCount, setIndivCount]}>
                <ResetButton />
            </indivContext.Provider>
        </>
        
       
    )

  return (
    <>
        <div  className='card-flex'>
        {/* {mapBank} */}
            {/* ternary operator changes className to either flashcardflash or flashcard based on when the card is clicked */}
            <div className={`flashcard ${flash ? "flash" : ""}`} onClick = {countFlips}>
                {/* front of card */}
                <h3 className='front' >What's Up!</h3>
                 {/* back of card */}
                <div className='back' >
                    <img className="whatUp" src={Whatup} alt="What's Up" height="98.44px" width="175px"></img>
                </div>
            </div>
            <p className='indivCount'> Individual Flip Count: {indivCount}</p>
            <indivContext.Provider value={[indivCount, setIndivCount]}>
                <ResetButton />
            </indivContext.Provider>
        </div>
    </>
  )
}

