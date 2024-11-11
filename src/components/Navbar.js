// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <h1 className="navbar-title">{t('navbar.title')}</h1>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#home">{t('navbar.home')}</a>
                    <a href="#coding">{t('navbar.coding')}</a>
                    <a href="#tennis">{t('navbar.tennis')}</a>
                    <a href="#contact">{t('navbar.contact')}</a>
                </div>
                <div className="navbar-lang-toggle">
                    <button onClick={() => changeLanguage('en')}>EN</button>
                    <button onClick={() => changeLanguage('fr')}>FR</button>
                </div>
                <div className="navbar-burger" onClick={toggleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
