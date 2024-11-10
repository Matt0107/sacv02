import React from 'react';
import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <section className="presentation">
      <h2>{t('presentation.title')}</h2>
      <p>{t('presentation.content')}</p>
    </section>
  );
};

export default Presentation;
