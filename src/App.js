// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Coding from './components/Coding';
import Tennis from './components/Tennis';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroCarousel />
            <Tennis />
            <Coding />
            <Footer />
        </div>
    );
}

export default App;
