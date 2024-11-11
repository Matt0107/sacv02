// src/components/Navbar.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <h1 className="navbar-title">{t('navbar.title')}</h1>
            <ul className="navbar-menu">
                <li>{t('navbar.home')}</li>
                <li>{t('navbar.coding')}</li>
                <li>{t('navbar.tennis')}</li>
                <li>{t('navbar.contact')}</li>
            </ul>
        </nav>
    );
}

export default Navbar;
