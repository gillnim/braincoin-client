import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">BrainCoins</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/converter" className="nav-link">Converter</a>
                        </li>
                        <li className="nav-item">
                            <a href="/balance" className="nav-link">Balance</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
