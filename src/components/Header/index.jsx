import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.scss';

const Header = () => {

    return (
        <header>
            <div className="container_header">
                <div className="logo">
                    <img src={logo} alt='alt_logo'></img>
                </div>
                <div>
                <nav className="navigation">
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="aboutUs">
                            <NavLink to="/aboutUs" activeClassName="aboutUs_active">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
                
            </div>
        </header>
    )
}

export default Header;