import React from 'react';
import Navigation from '../Navigation/index';

import styles from './styles.module.scss';


function Header () {
    return (
        <div className={styles.header}>
            <Navigation />
        </div>
    );
}

export default Header;