import React from 'react';
import './Background.css';
import IntroImg from '../assests/Home/background.jpg';
// import ProfileImg from '../assests/Home/profilepic.jpg';

import Typewriter from "typewriter-effect";
// import { Link } from 'react-router-dom';

export default function Background() {
  return (
    <div className='backg'>
        <div className='mask'>
            <img className='intro-img'
            src={IntroImg} alt="IntroImg" />

        </div>
        <div className='content'>
            <h1 className='primary-text'> {" "}
             Hello, I'm 
             <span className='highlighted-text'> Aditi</span>!
                <span className="wave">
                    👋🏻
                </span>
            </h1>
            <span className='roles'>
                        {" "}
                        <h3>
                            <Typewriter 
                            options={{
                                strings: [
                                  "MERN Stack Developer",
                                  "React/React Native Developer",
                                  "Full Stack Developer"
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                              }}/>

                        </h3>
                    
            </span> 
            <div>
                <a href='/projects' className='btn'>
                    Projects
                </a>
                <a href='https://drive.google.com/file/d/1m6TM_dTmNnPuyF3Zp1mnlAwgI2fFf2FG/view?usp=sharing' className='btn btn-light'>
                    Resume
                </a>
            </div>
            
                
    


        </div>
        
    </div>
  )
}
