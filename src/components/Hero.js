import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button className="hero-button">{t('hero.cta')}</button>
      </div>
    </section>
  );
};

export default Hero;
