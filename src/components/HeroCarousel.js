// src/components/HeroCarousel.js
import React from 'react';
import '../styles/HeroCarousel.css';
import homeImage from '../assets/home-main.png';

function HeroCarousel() {
    return (
        <section
            className="hero-carousel"
            style={{ backgroundImage: `url(${homeImage})` }}
        >
            <div className="carousel-overlay"></div>
            <div
                className="carousel-arrow-container"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="arrow-down"></div>
            </div>
        </section>
    );
}

export default HeroCarousel;
