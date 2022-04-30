import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Error from './pages/error/error';


function Routing() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default Routing;