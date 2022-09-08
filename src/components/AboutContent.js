import './AboutContent.css';
import React from 'react'
// import { Link } from 'react-router-dom';


function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a React front-end developer, React Native developer and MERN stack developer. 
            I'm a self-motivated, dedicated, and passionate individual who loves to think outside the box. 
            A budding engineer who is gravitated towards solving any challenge. 
            Always enthusiastic to work on new software and mobile/web applications.
            I strongly desire to be a life-long learner. </p>
            <a href='/contactme'>
                <button className='btn'>Contact</button>
            </a>
        </div>
    </div>
  )
}

export default AboutContent