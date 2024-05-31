import React, {useContext} from 'react';
import { flipContext } from './FlashcardStudy';

export default function ResetButton() {
    const [flipCount, setFlipCount] = useContext(flipContext);

    function resetCount() {
        setFlipCount(0)
    }
  return (
    <>
        <button onClick={resetCount} >Reset Count</button>
    </>
  )
}

