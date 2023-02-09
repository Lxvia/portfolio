import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  return (  
    <BrowserRouter>
     <Navbar />
     <Home />
     <About />
     <Projects />
    </BrowserRouter>
  );
};

export default App;
