
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PriceChart from './PriceChart';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const PriceTracker = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PriceChart />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default PriceTracker;
