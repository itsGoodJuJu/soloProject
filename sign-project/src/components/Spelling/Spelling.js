import React, {useContext} from 'react';
import { wordContext } from './RandomWordAPI';

export default function Spelling() {
    const wordLetter = useContext(wordContext);

  return (
    <>
        <h3>Guess: {wordLetter}</h3>
    </>
  )
}

