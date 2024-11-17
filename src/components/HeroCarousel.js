import React from 'react';
import '../styles/HeroCarousel.css';
import homeImage from '../assets/home-main.png';
import { FaArrowAltCircleDown } from 'react-icons/fa'; // Import de l'icône

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
                <FaArrowAltCircleDown className="arrow-icon" />
            </div>
        </section>
    );
}

export default HeroCarousel;
