import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.scss';

const Header = () => {


    const onClick = () => {
        const menuToggle = document.querySelector('#menu-togle');
        const mobileNavContainer = document.querySelector('#mobile-nav');
        menuToggle.classList.toggle('menu-icon-active');
        mobileNavContainer.classList.toggle('mobile-nav--active');
    }
    return (
        <header className="header">
            <div className="header-overlay">
                <div className="nav-container">

                    <img className="logo" src={logo} alt="logo"/>

                    <div className="nav-wrapper">
                        <ul className="nav">
                            <li className="nav__item">
                                <NavLink to="/" className="nav__link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav__item aboutUs">
                                <NavLink to="/aboutUs" className="nav__link" activeClassName="nav__link_active">
                                    About Us
                                </NavLink>
                            </li>
                        </ul>

                        <div onClick={onClick} type="button" id="menu-togle" className="menu-icon">
                            <div className="menu-icon-line"/>
                        </div>

                        <div id="mobile-nav" className="mobile-nav">
                            <ul className="mobile-nav__list">
                                <li className="mobile-nav__item">
                                    <NavLink to="/" className="mobile-nav__link">
                                        Home
                                    </NavLink></li>
                                <li className="mobile-nav__item">
                                    <NavLink to="/aboutUs" className="mobile-nav__link" activeClassName="mobile-nav__link_active">
                                        About Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;