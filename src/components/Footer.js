import './FooterStyles.css';

import React from 'react';

import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}} className='svg'/>
                    <div>
                        <p> Bhubaneswar, Odisha</p>
                    </div>
                </div>
                
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/> 
                    <a href='mailto:aditimishra537@gmail.com'>aditimishra537@gmail.com</a>
                    
                    </h4>
                
                </div>
            </div>
            <div className='right'>
                <h4>
                    Way to connect : 
                </h4>
                <div className='social'>
                    <a href="https://github.com/aditimishraa">
                        <FaGithub size={30} style={{color: "white", marginRight: "2rem"}  }/> 
                    </a>
                    <a href='https://twitter.com/Adiiiitiii'>
                        <FaTwitter size={30} style={{color: "white", marginRight: "2rem"}}/> 

                    </a>
                    <a href='https://www.instagram.com/?hl=en'>
                        <FaInstagram size={30} style={{color: "white", marginRight: "2rem"}}/> 

                    </a>
                    <a href='http://www.linkedin.com/in/aditimishra01'>
                        <FaLinkedin size={30} style={{color: "white", marginRight: "2rem"}}/> 

                    </a>
                    

                </div>
                
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Footer