import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import Tennis from '../components/Tennis';
import Coding from '../components/Coding';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Presentation />
      <Tennis />
      <Coding />
      <Footer />
    </div>
  );
};

export default Home;
