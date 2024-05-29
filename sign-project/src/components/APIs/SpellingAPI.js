import React, {useEffect, useState} from 'react';

function SpellingAPI() {
    const [picture, setPicture] =useState('')
    const [fetchInput, setFetchInput] = useState('test');
    const [fetchResult, setFetchResult] = useState();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8044b06d7emshfb5457236878d59p169f95jsn501b451bebbc',
            'X-RapidAPI-Host': 'american-sign-language-spelling-tool.p.rapidapi.com'
        }
    };
    useEffect(() => {
        async function fetchSpelling() {
            await fetch(`https://american-sign-language-spelling-tool.p.rapidapi.com/dog?scale=.5`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '8044b06d7emshfb5457236878d59p169f95jsn501b451bebbc',
                    'X-RapidAPI-Host': 'american-sign-language-spelling-tool.p.rapidapi.com'
                }
            })
            .then(response => {
                response.blob();
                console.log(response)
            })
            // .then(blobResponse => {
            //     const imgURL = URL.createObjectURL(blobResponse);

            //     let data = blobResponse;
            //     setPicture(imgURL);
            //     console.log(imgURL);
            // })
            
        }
        fetchSpelling();
    }, [])
  return (
    <>
        <div>Spelling API</div>
        <img src={picture} alt="dog"></img>
    </>

  )
}

export default SpellingAPI