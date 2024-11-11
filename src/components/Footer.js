// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t('footer.rights')}</p>
        </footer>
    );
}

export default Footer;
