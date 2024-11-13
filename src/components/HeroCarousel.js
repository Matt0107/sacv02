// src/components/HeroCarousel.js
import React, { useState, useEffect } from 'react';
import '../styles/HeroCarousel.css';

import homeImage from '../assets/home.jpg';
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-carousel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="carousel-title-container">
                        <h2 className="carousel-title">{image.title}</h2>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default HeroCarousel;
