// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar({ onNavigate, refs }) {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLangMenu = () => {
        setLangMenuOpen(!langMenuOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLangMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentLang = i18n.language;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a onClick={() => onNavigate(refs.homeRef)}>{t('navbar.home')}</a>
                    <a onClick={() => onNavigate(refs.tennisRef)}>{t('navbar.tennis')}</a>
                    <a onClick={() => onNavigate(refs.codingRef)}>{t('navbar.coding')}</a>
                    <a onClick={() => onNavigate(refs.contactRef)}>{t('navbar.contact')}</a>
                </div>
                
                <div className="navbar-lang-toggle" onMouseEnter={toggleLangMenu} onMouseLeave={() => setLangMenuOpen(false)}>
                    <button>{currentLang.toUpperCase()}</button>
                    {langMenuOpen && (
                        <div className="lang-dropdown">
                            {currentLang !== 'en' && <button onClick={() => changeLanguage('en')}>EN</button>}
                            {currentLang !== 'fr' && <button onClick={() => changeLanguage('fr')}>FR</button>}
                        </div>
                    )}
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
