// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import '../styles/HeroCarousel.css';

// Importez les images directement
import homeImage from '../assets/home.png';
import testImage from '../assets/test2.jpg';

function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
            src: homeImage, // Utilisation de l'import pour garantir le bon chemin
            title: "Améliorez votre jeu de tennis"
        },
        {
            src: testImage,
            title: "Devenez développeur web"
        }
    ];

    // Changement de diapositive automatique toutes les 5 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="hero-carousel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="carousel-content">
                        <h2>{image.title}</h2>
                    </div>
                </div>
            ))}
            <div className="carousel-controls">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}

export default HeroCarousel;