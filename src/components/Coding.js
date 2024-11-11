// src/components/Coding.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Coding.css';

function Coding() {
    const { t } = useTranslation();

    return (
        <section className="coding">
            <h2>{t('coding.title')}</h2>
            <p>{t('coding.description')}</p>
        </section>
    );
}

export default Coding;
