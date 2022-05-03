import React from 'react';
import _ from 'lodash';

import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Routing from './Routing';


function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-content">
          <Routing />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
