import React from 'react';
import _ from 'lodash';

import styles from './styles.module.scss';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Routing from '../../Routing';


function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>
          <Routing />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
