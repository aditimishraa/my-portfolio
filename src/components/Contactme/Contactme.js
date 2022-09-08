import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Backg2 from '../Backg2';
import Form from '../Form';
import CreditsFooter from '../CreditsFooter';

function Contactme() {
  return (
    <div>
      <Navbar/>
      <Backg2 heading="CONTACT ME" text="Lets have a chat 😃"/>
      <Form />
      <Footer/>
      <CreditsFooter />
    </div>
  )
}

export default Contactme;