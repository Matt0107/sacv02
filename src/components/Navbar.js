import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="navbar">
      <h1>Serve and Code</h1>
      <ul>
        <li>{t('nav.home')}</li>
        <li>{t('nav.tennis')}</li>
        <li>{t('nav.coding')}</li>
        <li>{t('nav.contact')}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
