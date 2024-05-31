import React, {useState, useContext, createContext} from 'react';
import ResetButton from './ResetButton'
import Whatup from '../../images/whatup.gif';
import { flipContext } from './FlashcardStudy';
import { cardBank } from './cardBank';
import './Flashcard.css';

export const indivContext = createContext()

export default function Card() {
    const [flipCount, setFlipCount] = useContext(flipContext);
    const [ indivCount, setIndivCount] = useState(0);
    const [flash, setFlash] = useState(false);
    const [word, setWord] = useState('');
    const [sign, setSign] = useState('');

    function countFlips() {
        setFlipCount(flipCount + 1);
        setIndivCount(indivCount + 1);
        setFlash(!flash);
    }

    const mapBank = cardBank.map(signs => 
        // console.log(signs.url)
        <div className='signCard' key={signs.id}>
            <img src={signs.url} alt="sign"></img>
            
        </div>
        // <>
        //     <div className={`flashcard ${flash ? "flash" : ""}`} onClick = {countFlips}>
        //         <h3 className='front' >{signs.word}</h3>
        //         <div className='back' >
        //             <img className="whatUp" src={signs.url} alt="What's Up" height="98.44px" width="175px"></img>
        //         </div>
        //     </div>
        //     <p className='indivCount'> Individual Flip Count: {indivCount}</p>
        //     <indivContext.Provider value={[indivCount, setIndivCount]}>
        //         <ResetButton />
        //     </indivContext.Provider>
        // </>
        
       
    )
    // console.log(word);

  return (
    <>
        <div  className='card-flex'>
        {/* {mapBank} */}
            <div className={`flashcard ${flash ? "flash" : ""}`} onClick = {countFlips}>
                <h3 className='front' >What's Up!</h3>
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

