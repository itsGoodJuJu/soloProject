import React, {useContext} from 'react';
import { wordContext } from '../APIs/RandomWordAPI';

function Spelling() {
    const wordLetter = useContext(wordContext);

  return (
    <>
        <h3>Guess: {wordLetter}</h3>
    </>
  )
}

export default Spelling