// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import des icônes

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t('footer.rights')}</p>
            <div className="footer-icons">
                <a href="mailto:example@mail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/mathieu-du" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
