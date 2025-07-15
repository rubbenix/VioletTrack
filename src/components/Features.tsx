import React from 'react';
import { Bell, TrendingDown, Shield, Zap, Smartphone, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Recibe notificaciones al instante cuando el precio baje a tu objetivo deseado.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingDown,
      title: "Análisis de Tendencias",
      description: "Visualiza la evolución completa del precio y predice futuros descuentos.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Datos Seguros",
      description: "Tus datos están protegidos y nunca compartimos tu información personal.",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Multi-Plataforma",
      description: "Accede desde cualquier dispositivo: móvil, tablet o computadora.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Súper Rápido",
      description: "Actualizaciones de precios en tiempo real con tecnología de última generación.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Histórico Completo",
      description: "Accede al historial completo de precios para tomar mejores decisiones.",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="features" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-8">
            ⚡ Características Principales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Todo lo que necesitas para{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ahorrar dinero
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas potentes y fáciles de usar que te ayudarán a encontrar las mejores ofertas 
            y nunca más pagar de más en Amazon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
