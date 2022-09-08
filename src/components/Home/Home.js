import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import Background from '../Background';
import Work from '../Work';
import CreditsFooter from '../CreditsFooter';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Background />
        <Work />
        <Footer />
        <CreditsFooter />
    </div>
  );
}
