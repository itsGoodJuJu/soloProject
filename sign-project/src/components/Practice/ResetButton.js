import React, {useContext} from 'react';
import { flipContext } from './FlashcardStudy';
import { indivContext } from './Card';
import './Flashcard.css'
import Button from 'react-bootstrap/Button';

export default function ResetButton() {
    // uses useContext to access flipCount useState from FlashcardStudy grandparent
    const [flipCount, setFlipCount] = useContext(flipContext);
    // uses useContext to access indivCount useState from Card parent
    const [indivCount, setIndivCount] = useContext(indivContext);

    function resetCount() {
        // updates useState back to 0
        setFlipCount(0);
        setIndivCount(0);
    }
  return (
    <>
        <Button className="resetButton" onClick={resetCount} variant="warning" >Reset Count</Button>
    </>
  )
}

