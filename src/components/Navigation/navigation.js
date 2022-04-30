import React from 'react';
import { Link } from 'react-router-dom';

import './navigation-style.scss';


function Navigation () {
    return (
        <nav className='Header-nav'>
            <ul className='Header-link'>
                <li>
                    <Link to="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link to="/about"><span>About</span></Link>
                </li>
                <li>
                    <Link to="/contact"><span>Contact</span></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
