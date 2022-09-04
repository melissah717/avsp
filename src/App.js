import * as React from 'react';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer'
import '../src/App.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans', 'san-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Clients" element={<Clients />} />
        </Routes>
        <Footer />
    </div >
    </ThemeProvider>
  );
}

export default App;
