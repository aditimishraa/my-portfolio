import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Backg2 from '../Backg2';
import Work from '../Work';
import CreditsFooter from '../CreditsFooter';


function Projects() {
  return (
    <div>
      <Navbar />
      <Backg2 heading="PROJECTS" text="Some of my most recent works" />
      <Work /> 
      <Footer />
      <CreditsFooter />
    </div>
  );
}

export default Projects; 