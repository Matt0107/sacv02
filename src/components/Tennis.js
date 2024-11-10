import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Tennis.css';

const Tennis = () => {
  const { t } = useTranslation();

  return (
    <section className="tennis">
      <h2>{t('services.tennis.title')}</h2>
      <p>{t('services.tennis.description')}</p>
    </section>
  );
};

export default Tennis;
