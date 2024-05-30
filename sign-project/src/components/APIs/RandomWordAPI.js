import React, {useEffect, useState, createContext} from 'react';
import Spelling from '../Home/Spelling';

export const wordContext = createContext();

function RandomWordAPI() {
    const [randomWord, setRandomWord] = useState('');

    async function fetchWord() {
        await fetch(`https://api.api-ninjas.com/v1/randomword`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'npzR9OW8m8K3lv2EStDS2g==2nyTikLKW2HmEbhP'
            }
        }) 
        .then(res => res.json())
        .then(data => {
            setRandomWord(data.word)
        })
        
    }

  return (
    <>
        <button onClick={fetchWord}>Generate</button>
        <div>{randomWord}</div>
        <wordContext.Provider value={randomWord[0]}>
            <Spelling />
        </wordContext.Provider>
    </>
  )
}

export default RandomWordAPI