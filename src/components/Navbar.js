import './NavbarStyles.css';

import React from 'react';
// import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const handleClick = () => setClick(!click);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }
        else {
            setColor(false); 
        }
    };

    window.addEventListener('scroll', changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <a href="/" className='header-name'>
            <h1>A.</h1>
        </a>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li >
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/projects'>Projects</a>
            </li>
            <li>
                <a href='/aboutme'>About</a>
            </li>
            <li>
                <a href='/contactme'>Contact</a>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "white" }}/> ):
            (<FaBars size={20} style={{ color: "white" }}/>
            )}

        </div>
    </div>
  )
}