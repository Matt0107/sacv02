// src/components/Tennis.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaChessKnight, FaBrain, FaUser, FaUsers } from 'react-icons/fa';
import '../styles/Tennis.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tennisImage from '../assets/prestige.jpg';

function Tennis() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const { t } = useTranslation();
    const services = t('tennis.services', { returnObjects: true });

    const icons = [
        <FaChartLine className="tennis-service-icon" />,
        <FaChessKnight className="tennis-service-icon" />,
        <FaBrain className="tennis-service-icon" />,
        <FaUser className="tennis-service-icon" />,
        <FaUsers className="tennis-service-icon" />
    ];

    // Diviser les services en deux colonnes
    const leftServices = services.slice(0, Math.ceil(services.length / 2));
    const rightServices = services.slice(Math.ceil(services.length / 2));

    return (
        <section className="tennis-section">
            <div className="tennis-header">
                <h2 className="tennis-title">{t('tennis.title')}</h2>
                <p className="tennis-subtitle">{t('tennis.subtitle')}</p>
            </div>

            <div className="tennis-content">
                <div className="tennis-services-column" data-aos="fade-right">
                    {leftServices.map((service, index) => (
                        <div key={index} className="tennis-service-card">
                            <div className="tennis-service-icon">{icons[index]}</div>
                            <div>
                                <h3 className="tennis-service-title">{service.title}</h3>
                                <p className="tennis-service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tennis-image" data-aos="zoom-in">
                    <img src={tennisImage} alt="Atmosphere de coaching tennis" />
                </div>

                <div className="tennis-services-column" data-aos="fade-left">
                    {rightServices.map((service, index) => (
                        <div key={index} className="tennis-service-card">
                            <div className="tennis-service-icon">{icons[index + leftServices.length]}</div>
                            <div>
                                <h3 className="tennis-service-title">{service.title}</h3>
                                <p className="tennis-service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Tennis;
