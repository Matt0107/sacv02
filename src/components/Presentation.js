// src/components/Presentation.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Presentation.css';

function Presentation() {
    const { t } = useTranslation();

    return (
        <section className="presentation">
            <h2>{t('presentation.title')}</h2>
            <p>{t('presentation.description')}</p>
        </section>
    );
}

export default Presentation;
