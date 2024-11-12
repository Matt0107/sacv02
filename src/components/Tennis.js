// src/components/Tennis.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaDumbbell, FaChessKnight, FaBrain, FaUser, FaUsers } from 'react-icons/fa';
import '../styles/Tennis.css';

function Tennis() {
    const { t } = useTranslation();

    // Charger les services depuis le fichier JSON
    const services = t('tennis.services', { returnObjects: true });

    // Liste d'icônes correspondant aux services
    const icons = [
        <FaChartLine className="tennis-icon" />,   // Analyse des techniques
        <FaDumbbell className="tennis-icon" />,    // Préparation physique
        <FaChessKnight className="tennis-icon" />, // Stratégie de jeu
        <FaBrain className="tennis-icon" />,       // Entraînement mental
        <FaUser className="tennis-icon" />,        // Sessions individuelles
        <FaUsers className="tennis-icon" />        // Entraînements en groupe
    ];

    if (!Array.isArray(services)) {
        console.error("Les services de tennis ne sont pas récupérés correctement comme tableau.");
        return null;
    }

    return (
        <section className="tennis">
            <h2 className="tennis-title">{t('tennis.title')}</h2>
            <p className="tennis-subtitle">{t('tennis.subtitle')}</p>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{icons[index]}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Tennis;
