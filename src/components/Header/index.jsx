import React from 'react';
import logo from './logo.svg';
import './styles.scss';

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div>
                <nav className="navigation">
                    <ul>
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                About Us
                            </a>
                        </li>
                    </ul>
                </nav>
                </div>
                
            </div>
        </header>
    )
}

export default Header;