// src/components/Coding.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaProjectDiagram, FaPaintBrush, FaCode, FaHtml5, FaSearch, FaServer, FaTools, FaMobileAlt } from 'react-icons/fa';
import '../styles/Coding.css';

function Coding() {
    const { t } = useTranslation();

    // Charger les services à partir du fichier JSON
    const services = t('coding.services', { returnObjects: true });

    // Liste des icônes correspondantes pour chaque service
    const icons = [
        <FaProjectDiagram className="coding-icon" />, // Gestion de projets digitaux
        <FaPaintBrush className="coding-icon" />,      // Conception graphique & webdesign
        <FaCode className="coding-icon" />,            // Développement sur mesure
        <FaHtml5 className="coding-icon" />,           // Intégration web
        <FaSearch className="coding-icon" />,          // Optimisation SEO
        <FaServer className="coding-icon" />,          // Développement Frontend et Backend
        <FaTools className="coding-icon" />,           // Maintenance et support
        <FaMobileAlt className="coding-icon" />        // Responsive Design
    ];

    if (!Array.isArray(services)) {
        console.error('Les services ne sont pas récupérés correctement comme tableau.');
        return null;
    }

    return (
        <section className="coding">
            <h2 className="coding-title">{t('coding.title')}</h2>
            <p className="coding-subtitle">{t('coding.subtitle')}</p>
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

export default Coding;
