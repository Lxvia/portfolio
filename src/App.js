import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Main from './pages/Main';
import Project from './pages/Project';

const App = () => {
  return (  
    <BrowserRouter>
    <ScrollToTop />
     <Routes>
       <Route path='/' element={
            <>
              <Navbar />
              <Main />
            </>
          }
        />
       <Route path=':projectSlug' element={<Project />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
