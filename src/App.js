// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Coding from './components/Coding';
import Tennis from './components/Tennis';
import Footer from './components/Footer';

function App() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="App">
            <Navbar />
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <Hero />
            <Presentation />
            <Coding />
            <Tennis />
            <Footer />
        </div>
    );
}

export default App;
