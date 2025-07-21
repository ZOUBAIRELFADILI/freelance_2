import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/ServicesSection';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;