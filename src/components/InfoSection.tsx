
import React from 'react';
import { Bell, TrendingDown, Shield, Zap, Clock, Target } from 'lucide-react';

const InfoSection = () => {
  const features = [
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Recibe notificaciones instantáneas cuando el precio baje al nivel que desees."
    },
    {
      icon: TrendingDown,
      title: "Análisis de Tendencias",
      description: "Visualiza la evolución completa del precio y predice futuros descuentos."
    },
    {
      icon: Shield,
      title: "Monitoreo 24/7",
      description: "Vigilamos los precios las 24 horas del día, todos los días del año."
    },
    {
      icon: Zap,
      title: "Actualizaciones Rápidas",
      description: "Datos actualizados cada hora para que no pierdas ninguna oportunidad."
    },
    {
      icon: Clock,
      title: "Histórico Completo",
      description: "Accede al historial completo de precios de cualquier producto."
    },
    {
      icon: Target,
      title: "Precio Objetivo",
      description: "Establece tu precio ideal y te avisamos cuando se alcance."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona <span className="text-purple-primary">PriceScope</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra tecnología avanzada rastrea millones de productos de Amazon para 
            ayudarte a ahorrar dinero de manera inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-purple-primary/10 rounded-xl p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-purple-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works steps */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tres pasos simples para ahorrar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Pega la URL
              </h4>
              <p className="text-gray-600">
                Copia y pega el enlace del producto de Amazon que quieres rastrear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Configura Alertas
              </h4>
              <p className="text-gray-600">
                Establece tu precio objetivo y la frecuencia de notificaciones.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Ahorra Dinero
              </h4>
              <p className="text-gray-600">
                Recibe alertas cuando el precio baje y compra en el momento perfecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
