import React, {useContext} from 'react';
import { flipContext } from './FlashcardStudy';
import { indivContext } from './Card';
import './Flashcard.css'
import Button from 'react-bootstrap/Button';

export default function ResetButton() {
    const [flipCount, setFlipCount] = useContext(flipContext);
    const [indivCount, setIndivCount] = useContext(indivContext);

    function resetCount() {
        setFlipCount(0);
        setIndivCount(0);
    }
  return (
    <>
        <Button className="resetButton" onClick={resetCount} variant="warning" >Reset Count</Button>
    </>
  )
}

