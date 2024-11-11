// src/components/Hero.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <h2>{t('hero.welcome')}</h2>
            <p>{t('hero.description')}</p>
        </section>
    );
}

export default Hero;
