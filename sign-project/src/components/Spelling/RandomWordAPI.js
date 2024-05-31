import React, {useEffect, useState, createContext} from 'react';
import Spelling from './Spelling';
import Button from 'react-bootstrap/Button';

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
        <div className='genButton'>
            <Button onClick={fetchWord} variant="warning" >Generate Spelling Word</Button>
        </div>
        <h3 className='randWord'>{randomWord}</h3>
        {/* <wordContext.Provider value={randomWord[0]}>
            <Spelling />
        </wordContext.Provider> */}
    </>
  )
}

export default RandomWordAPI