import React, {createContext} from 'react';
import Welcome from '../../images/welcome.gif';
import './Home.css';

export const wordContext = createContext();

export default function Home() {

  return (
    <>
      <h1 className='welcome'>Welcome to Handy-Dandy!</h1>
      <div className='gifDiv'>
        {/* welcome gif */}
        <img className='welcomeGif' src={Welcome} alt="Welcome"/>
      </div>
      <div className='messageDiv'>
        {/* welcome message */}
        <div className='message'>
          Here on Handy-Dandy, you have access to information on American Sign Language (a really handy skill to learn)! <br /> <br /> Navigate the website to learn some new signs, practice your finger-spelling, and test your knowledge with a quiz! Consider checking out our donation page to support the website or our local deaf school, the Atlanta Area School for the Deaf (AASD).
        </div>
      </div>
    </>
  )
}
