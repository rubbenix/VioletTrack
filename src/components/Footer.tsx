
import React from 'react';
import { TrendingUp, Twitter, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">PriceTracker Pro</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              La herramienta más inteligente para hacer seguimiento de precios en Amazon. 
              Ahorra dinero y nunca más pagues de más en tus compras favoritas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Producto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Actualizaciones</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 mx-2 text-red-500" />
              <span>© 2024 PriceTracker Pro. Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
