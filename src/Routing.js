import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Error from './pages/Error/index';
import Login from './pages/login/index';


function Routing() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/sign" element={ <Login /> } />
          <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default Routing;