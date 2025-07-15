
import React from 'react';
import { TrendingDown, TrendingUp, Calendar, DollarSign } from 'lucide-react';

const PriceChart = () => {
  // Datos simulados para el gráfico
  const mockData = [
    { date: '2024-01-01', price: 299.99 },
    { date: '2024-01-15', price: 279.99 },
    { date: '2024-02-01', price: 259.99 },
    { date: '2024-02-15', price: 289.99 },
    { date: '2024-03-01', price: 249.99 },
    { date: '2024-03-15', price: 229.99 },
  ];

  const currentPrice = 229.99;
  const originalPrice = 299.99;
  const savings = originalPrice - currentPrice;
  const savingsPercentage = ((savings / originalPrice) * 100).toFixed(1);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Evolución del Precio
          </h3>
          <p className="text-gray-600">
            Visualiza cómo ha cambiado el precio a lo largo del tiempo
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Precio Actual</p>
              <p className="text-2xl font-bold text-gray-900">${currentPrice}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <TrendingDown className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Precio Original</p>
              <p className="text-2xl font-bold text-gray-900">${originalPrice}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <TrendingUp className="h-8 w-8 text-purple-primary mx-auto mb-2" />
              <p className="text-sm text-gray-500">Ahorro</p>
              <p className="text-2xl font-bold text-green-600">${savings}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Descuento</p>
              <p className="text-2xl font-bold text-green-600">{savingsPercentage}%</p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Gráfico de Precios - Últimos 3 meses
              </h4>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-purple-primary text-white rounded-lg">
                  3M
                </button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">
                  6M
                </button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">
                  1A
                </button>
              </div>
            </div>
            
            {/* Placeholder gráfico */}
            <div className="h-64 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#571787" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#571787" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50 150 Q 100 120 150 100 T 250 80 T 350 60"
                    stroke="#571787"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M 50 150 Q 100 120 150 100 T 250 80 T 350 60 L 350 200 L 50 200 Z"
                    fill="url(#priceGradient)"
                  />
                </svg>
              </div>
              <div className="text-center z-10">
                <div className="text-purple-primary mb-2">
                  <TrendingDown className="h-12 w-12 mx-auto" />
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  Gráfico interactivo de evolución de precios
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Los datos se mostrarán aquí una vez que rastrees un producto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceChart;
