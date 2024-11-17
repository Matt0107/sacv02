import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar({ onNavigate, refs }) {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsDropdownOpen(false);
        closeMenu();
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Liens pour grands écrans */}
                <div className="navbar-links">
                    <a onClick={() => onNavigate(refs.homeRef)}>{t('navbar.home')}</a>
                    <a onClick={() => onNavigate(refs.tennisRef)}>{t('navbar.tennis')}</a>
                    <a onClick={() => onNavigate(refs.codingRef)}>{t('navbar.coding')}</a>
                    <a onClick={() => onNavigate(refs.contactRef)}>{t('navbar.contact')}</a>
                </div>

                {/* Commutateur de langue pour grands écrans */}
                <div
                    className="language-switcher"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button className="language-button">{i18n.language.toUpperCase()}</button>
                    {isDropdownOpen && (
                        <div className="language-dropdown">
                            {i18n.language !== 'fr' && (
                                <button onClick={() => changeLanguage('fr')}>FR</button>
                            )}
                            {i18n.language !== 'en' && (
                                <button onClick={() => changeLanguage('en')}>EN</button>
                            )}
                        </div>
                    )}
                </div>

                {/* Icône burger pour petits écrans */}
                <div className="burger-icon" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            {/* Menu burger */}
            <div className={`burger-menu ${isMenuOpen ? 'show' : ''}`}>
                <button className="close-button" onClick={closeMenu}>×</button>
                <div className="burger-menu-links">
                    <a onClick={() => { onNavigate(refs.homeRef); closeMenu(); }}>{t('navbar.home')}</a>
                    <a onClick={() => { onNavigate(refs.tennisRef); closeMenu(); }}>{t('navbar.tennis')}</a>
                    <a onClick={() => { onNavigate(refs.codingRef); closeMenu(); }}>{t('navbar.coding')}</a>
                    <a onClick={() => { onNavigate(refs.contactRef); closeMenu(); }}>{t('navbar.contact')}</a>
                </div>
                {/* Commutateur de langue dans le menu burger */}
                <div className="burger-language-switcher">
                    {i18n.language !== 'fr' && (
                        <button onClick={() => changeLanguage('fr')}>FR</button>
                    )}
                    {i18n.language !== 'en' && (
                        <button onClick={() => changeLanguage('en')}>EN</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
