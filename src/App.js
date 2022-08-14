import * as React from 'react';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik', 'san-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div >
    </ThemeProvider>
  );
}

export default App;
