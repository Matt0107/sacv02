// src/components/Tennis.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaDumbbell, FaChessKnight, FaBrain, FaUser, FaUsers } from 'react-icons/fa';
import '../styles/Tennis.css';
import tennisImage from '../assets/prestige.jpg';

function Tennis() {
    const { t } = useTranslation();

    // Charger les services depuis le fichier JSON
    const services = t('tennis.services', { returnObjects: true });

    // Liste d'icônes correspondant aux services
    const icons = [
        <FaChartLine className="tennis-service-icon" />,   // Analyse des techniques
        <FaDumbbell className="tennis-service-icon" />,    // Préparation physique
        <FaChessKnight className="tennis-service-icon" />, // Stratégie de jeu
        <FaBrain className="tennis-service-icon" />,       // Entraînement mental
        <FaUser className="tennis-service-icon" />,        // Sessions individuelles
        <FaUsers className="tennis-service-icon" />        // Entraînements en groupe
    ];

    return (
        <section className="tennis-section">
            <div className="tennis-container">
                {/* Colonne gauche avec l'image */}
                <div className="tennis-image">
                    <img src={tennisImage} alt="Atmosphere de coaching tennis" />
                </div>

                {/* Colonne droite avec les titres, descriptions et icônes */}
                <div className="tennis-content">
                    <h2 className="tennis-title">{t('tennis.title')}</h2>
                    <p className="tennis-subtitle">{t('tennis.subtitle')}</p>
                    <div className="tennis-services-container">
                        {services.map((service, index) => (
                            <div key={index} className="tennis-service-card">
                                <div className="tennis-service-icon">{icons[index]}</div>
                                <h3 className="tennis-service-title">{service.title}</h3>
                                <p className="tennis-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tennis;
