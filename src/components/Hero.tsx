import React, { useState } from 'react';
import { Link2, Sparkles } from 'lucide-react';

const Hero = () => {
  const [url, setUrl] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = async () => {
    if (!url) return;
    
    setIsTracking(true);
    // Simulate tracking process
    setTimeout(() => {
      console.log('Tracking product:', url);
      setIsTracking(false);
      setUrl('');
    }, 2000);
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-8 shadow-sm">
          <Sparkles className="h-4 w-4 mr-2" />
          ¡Ahorra hasta 70% en tus compras de Amazon!
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Rastrea Precios de{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Amazon
          </span>{' '}
          Inteligentemente
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Recibe alertas cuando bajen los precios de tus productos favoritos. 
          Nunca más pagues de más en Amazon.
        </p>
        
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-3 p-2 bg-white rounded-xl shadow-2xl border border-gray-100">
            <div className="flex-1 relative">
              <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="url"
                placeholder="https://www.amazon.com/producto..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full pl-12 h-14 text-lg border-0 focus:ring-0 bg-transparent outline-none"
                style={{ lineHeight: '3.5rem' }}
              />
            </div>
            <button 
              onClick={handleTrack}
              disabled={!url || isTracking}
              className="px-8 h-14 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isTracking ? 'Rastreando...' : 'Trackear Producto'}
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            ✨ Gratis para siempre • 🔔 Alertas instantáneas • 📊 Historial completo
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Monitoreo 24/7</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Alertas Instantáneas</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Datos Históricos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
