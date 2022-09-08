

import Home from './components/Home/Home';
import Aboutme from './components/Aboutme/Aboutme';
import Projects from './components/Projects/Projects';
import Contactme from './components/Contactme/Contactme';
import { Routes, Route } from 'react-router-dom';

function App() { 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/aboutme' element={<Aboutme />}/>
      <Route path='/contactme' element={<Contactme />}/>
    </Routes>
    </>
  );
}

export default App;
