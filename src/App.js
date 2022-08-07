import * as React from 'react';
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router'
import Nav from './components/Nav';

function App() {
  return (
      <div className="App">

        <Nav />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div >
  );
}

export default App;
