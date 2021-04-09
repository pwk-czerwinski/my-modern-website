import React from 'react';
import logo from './../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/**
 * Contains navbar with logo and menu links.
 */
const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="nav-logo">
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="main-menu-content">
                            <ul id="main-menu">
                                <li>
                                    <a href="/" className="menu-link-active">
                                        Start
                                    </a>
                                </li>
                                <li>
                                    <a href="/opinions">
                                        Opinions
                                    </a>
                                </li>
                                <li>
                                    <a href="/portfolio">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="/shop">
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a href="/cooperation">
                                        Cooperation
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => false}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* mobile menu */}
                        <div id="attach-mobile-menu" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
