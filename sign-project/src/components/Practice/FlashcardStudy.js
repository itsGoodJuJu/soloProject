import React, {useState, createContext} from 'react';
import Card from './Card';
import './Flashcard.css';

export const flipContext = createContext();

export default function Flashcard() {
  // keeps track of how many times you flip a flashcard, starts at 0
  const [flipCount, setFlipCount] = useState(0)
  
  return (
    <>
      <h1 className='study'>Study with some flashcards!</h1>
      <p className='flipCount'> Total Flip Count: {flipCount}</p>
      <div className='card-layout'>
        {/* <p>Flip Count: {flipCount}</p> */}
        <flipContext.Provider value={[flipCount, setFlipCount]}>
          <Card />
          <Card />
          {/* <Card />
          <Card /> */}
        </flipContext.Provider>
      </div>
    </>
    
  )
}

