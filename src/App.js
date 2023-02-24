import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Project from './pages/Project';

const App = () => {
  return (  
    <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path='/' element={<Main />}/>
       <Route path='/project' element={<Project />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
