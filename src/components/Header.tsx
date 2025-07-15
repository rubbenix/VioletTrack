
import React from 'react';
import { TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            PriceTracker Pro
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
            Características
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">
            Cómo Funciona
          </a>
          <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
            Contacto
          </a>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Comenzar Gratis
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
