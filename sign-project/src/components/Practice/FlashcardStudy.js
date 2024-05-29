import React, {useState} from 'react';
import Card from './Card';

export default function Flashcard() {

  return (
    <>
      <h1>Study with some flashcards!</h1>
      <div className='cardLayout'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
    
  )
}

