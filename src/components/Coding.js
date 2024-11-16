// src/components/Coding.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLaptop, FaCode, FaHtml5, FaCropAlt, FaServer, FaTools, FaMobileAlt } from 'react-icons/fa';
import '../styles/Coding.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import codingImage from '../assets/coding.jpg';

function Coding() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const { t } = useTranslation();
    const services = t('coding.services', { returnObjects: true });

    const icons = [
        <FaLaptop className="coding-service-icon" />,
        <FaCropAlt className="coding-service-icon" />,
        <FaCode className="coding-service-icon" />,
        <FaTools className="coding-service-icon" />,
        <FaMobileAlt className="coding-service-icon" />
    ];

    const leftServices = services.slice(0, Math.ceil(services.length / 2));
    const rightServices = services.slice(Math.ceil(services.length / 2));

    return (
        <section className="coding-section">
            <div className="coding-header">
                <h2 className="coding-title">{t('coding.title')}</h2>
                <p className="coding-subtitle">{t('coding.subtitle')}</p>
            </div>

            <div className="coding-content">
                <div className="coding-services-column" data-aos="fade-right">
                    {leftServices.map((service, index) => (
                        <div key={index} className="coding-service-card">
                            <div className="coding-service-icon">{icons[index]}</div>
                            <div>
                                <h3 className="coding-service-title">{service.title}</h3>
                                <p className="coding-service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="coding-image" data-aos="zoom-in">
                    <img src={codingImage} alt="Coding services and solutions" />
                </div>

                <div className="coding-services-column" data-aos="fade-left">
                    {rightServices.map((service, index) => (
                        <div key={index} className="coding-service-card">
                            <div className="coding-service-icon">{icons[index + leftServices.length]}</div>
                            <div>
                                <h3 className="coding-service-title">{service.title}</h3>
                                <p className="coding-service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Coding;
