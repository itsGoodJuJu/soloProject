import React, {createContext} from 'react';
// import SpellingAPI from '../APIs/SpellingAPI';
import RandomWordAPI from '../APIs/RandomWordAPI';
import {aslLetters} from '../Dictionary/aslLetters';
import './Home.css'

export const wordContext = createContext();

function Home() {

  const searchMap = aslLetters.map(letters => 
    // return letter.url;
    <div className='letterCard' key={letters.letter}>
      <div>
        <img className="signLetter" src={letters.url} />
        <h4>{letters.letter}</h4>
      </div>
    </div>
  )   
  // console.log(searchMap)

  return (
    <>
      <div>Home</div>
      <RandomWordAPI />
      {searchMap}
    </>
  )
}

export default Home