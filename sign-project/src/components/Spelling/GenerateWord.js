import React, {createContext} from 'react';
// import SpellingAPI from '../APIs/SpellingAPI';
import RandomWordAPI from './RandomWordAPI';
import {aslLetters} from '../Spelling/aslLetters';
import './GenerateWord.css'

export const wordContext = createContext();

function Home() {

  const searchMap = aslLetters.map(letters => 
    <div className='letterCard' key={letters.letter}>
      <div>
        <h1 className='engLetter'>{letters.letter}</h1>
        <img className="signLetter" src={letters.url} width="45%" />
      </div>
    </div>
  )   

  return (
    <>
      <h1 className='spellTitle'>Practice your spelling!</h1>
      <RandomWordAPI />
      <div className='letterDiv'>
        {searchMap}
      </div>
    </>
  )
}

export default Home