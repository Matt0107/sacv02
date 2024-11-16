import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar({ onNavigate, refs }) {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Fonction pour gérer le défilement
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Change l'état en fonction du défilement
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fonction pour basculer l'état du menu burger
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour fermer le menu burger
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        closeMenu();
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Navbar links for large screens */}
                <div className="navbar-links">
                    <a onClick={() => onNavigate(refs.homeRef)}>{t('navbar.home')}</a>
                    <a onClick={() => onNavigate(refs.tennisRef)}>{t('navbar.tennis')}</a>
                    <a onClick={() => onNavigate(refs.codingRef)}>{t('navbar.coding')}</a>
                    <a onClick={() => onNavigate(refs.contactRef)}>{t('navbar.contact')}</a>
                </div>

                {/* Commutateur de langue pour grands écrans */}
                <div className="language-switcher">
                    <button onClick={() => changeLanguage('fr')}>FR</button>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>

                {/* Burger Icon for small screens */}
                <div className="burger-icon" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            {/* Burger Menu */}
            <div className={`burger-menu ${isMenuOpen ? 'show' : ''}`}>
                <button className="close-button" onClick={closeMenu}>×</button>
                <div className="burger-menu-links">
                    <a onClick={() => { onNavigate(refs.homeRef); closeMenu(); }}>{t('navbar.home')}</a>
                    <a onClick={() => { onNavigate(refs.tennisRef); closeMenu(); }}>{t('navbar.tennis')}</a>
                    <a onClick={() => { onNavigate(refs.codingRef); closeMenu(); }}>{t('navbar.coding')}</a>
                    <a onClick={() => { onNavigate(refs.contactRef); closeMenu(); }}>{t('navbar.contact')}</a>
                </div>
                {/* Language Switcher inside the menu */}
                <div className="burger-language-switcher">
                    <button onClick={() => changeLanguage('fr')}>FR</button>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
