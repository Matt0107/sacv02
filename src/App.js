// src/App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Coding from './components/Coding';
import Tennis from './components/Tennis';
import Footer from './components/Footer';

function App() {
    // Références pour chaque section
    const homeRef = useRef(null);
    const codingRef = useRef(null);
    const tennisRef = useRef(null);
    const contactRef = useRef(null);

    // Fonction de défilement vers la section spécifiée
    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Navbar onNavigate={scrollToSection} refs={{ homeRef, codingRef, tennisRef, contactRef }} />
            <div ref={homeRef}>
                <HeroCarousel />
            </div>
            <div ref={tennisRef}>
                <Tennis />
            </div>
            <div ref={codingRef}>
                <Coding />
            </div>
            <div ref={contactRef}>
                <Footer />
            </div>
        </div>
    );
}

export default App;
