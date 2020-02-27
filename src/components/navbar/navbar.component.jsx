import React from 'react';
import './navbar.styles.scss';
import {ReactComponent as Logo} from '../../logo.svg';

const NavBar = () => (
    <div className="navbar">
        <Logo />
        <div className="navbar__burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default NavBar;