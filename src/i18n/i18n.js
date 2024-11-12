// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json'; // Chemin vers le fichier en anglais
import translationFR from './locales/fr.json'; // Chemin vers le fichier en français

// Configuration des ressources de traduction
const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr', // Langue par défaut
        fallbackLng: 'en', // Langue de secours si la traduction en français n'est pas disponible
        interpolation: {
            escapeValue: false // Permet d'éviter l'échappement automatique
        }
    });

export default i18n;
