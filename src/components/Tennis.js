// src/components/Tennis.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Tennis.css';

function Tennis() {
    const { t } = useTranslation();

    return (
        <section className="tennis">
            <h2>{t('tennis.title')}</h2>
            <p>{t('tennis.description')}</p>
        </section>
    );
}

export default Tennis;
