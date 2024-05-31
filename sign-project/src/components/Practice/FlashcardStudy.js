import React, {useState, createContext} from 'react';
import Card from './Card';

export const flipContext = createContext();


export default function Flashcard() {
  
  const [flipCount, setFlipCount] = useState(0)

  function countFlips() {
    setFlipCount(flipCount + 1);
  }
  
  return (
    <>
      <h1>Study with some flashcards!</h1>
      <div className='cardLayout'>
        <p>Flip Count: {flipCount}</p>
        <flipContext.Provider value={[flipCount, setFlipCount]}>
          <Card />
          <Card />
          <Card />
          <Card />
        </flipContext.Provider>
      </div>
    </>
    
  )
}

