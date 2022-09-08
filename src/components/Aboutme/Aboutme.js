import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Backg2 from '../Backg2';
import AboutContent from '../AboutContent';
import CreditsFooter from '../CreditsFooter';

function Aboutme() {
  return (
    <div>
      <Navbar/>
      <Backg2 heading="ABOUT ME" text="Developer"/>
      <AboutContent />
      <Footer/>
      <CreditsFooter />
    </div>
  )
}

export default Aboutme;