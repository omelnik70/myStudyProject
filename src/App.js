import React from 'react';
import _ from 'lodash';

import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Routing from './Routing';


function App() {
  return (
      <div className='App-wrapper'>
        <div className='App-container'>
          <div className='App-header'>
            <Header />
          </div>
          <div className='App-content'>
            <Routing />
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
