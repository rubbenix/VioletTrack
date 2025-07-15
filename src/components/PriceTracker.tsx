
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import TrackedProducts from './TrackedProducts';
import PriceChart from './PriceChart';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const PriceTracker = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Sección de productos trackeados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrackedProducts />
        </div>
      </section>
      
      <PriceChart />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default PriceTracker;
