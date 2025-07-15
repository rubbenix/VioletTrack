import React from 'react';
import { Link2, Search, Bell } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Pega el Enlace",
      description: "Copia y pega el enlace del producto de Amazon que quieres rastrear.",
      color: "purple"
    },
    {
      icon: Search,
      title: "Configuramos el Seguimiento",
      description: "Nuestro sistema comienza a monitorear el precio automáticamente cada hora.",
      color: "blue"
    },
    {
      icon: Bell,
      title: "Recibe Alertas",
      description: "Te notificamos al instante cuando el precio baje a tu objetivo deseado.",
      color: "green"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Cómo Funciona
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En solo 3 pasos simples, comienza a ahorrar dinero en tus compras de Amazon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Líneas conectoras para pantallas grandes */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-100",
              blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-100", 
              green: "from-green-500 to-green-600 bg-green-50 border-green-100"
            };
            
            return (
              <div key={index} className="text-center relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[1]} rounded-2xl shadow-lg mb-6 relative z-10`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <div className={`bg-white p-8 rounded-2xl shadow-sm border ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[2]} ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[3]} hover:shadow-md transition-shadow duration-300`}>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Número del paso */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 cursor-pointer">
            <span className="font-semibold">¡Empieza ahora y ahorra en tu próxima compra!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
