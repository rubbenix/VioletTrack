import React, { useState } from 'react';
import { Link2, Sparkles, Search, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductStorage } from '@/utils/storage';

interface Product {
  asin: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string;
  availability: string;
  url: string;
  timestamp: string;
}

interface TrackingResult {
  success: boolean;
  product?: Product;
  error?: string;
  message?: string;
}

const Hero = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleTrack = async () => {
    if (!url) {
      setResult({ success: false, error: 'Por favor ingresa una URL de Amazon' });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/track-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, email: email || null }),
      });

      const data: TrackingResult = await response.json();
      setResult(data);

      if (data.success && data.product) {
        // Guardar producto en el storage local
        ProductStorage.addProduct({
          asin: data.product.asin,
          title: data.product.title,
          price: data.product.price,
          currency: data.product.currency,
          imageUrl: data.product.imageUrl,
          url: data.product.url
        });
        
        setShowEmailInput(true);
        // Mantener URL para mostrar el producto encontrado
      }
    } catch (error) {
      setResult({ 
        success: false, 
        error: 'Error de conexión. Por favor intenta nuevamente.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = async () => {
    if (!email || !result?.product) return;

    setIsLoading(true);
    
    try {
      // Guardar email en el storage
      if (result.product) {
        ProductStorage.updateProductEmail(result.product.asin, email);
      }
      
      setResult({
        ...result,
        message: `¡Perfecto! Te enviaremos alertas a ${email} cuando el precio baje.`
      });
      
      // Limpiar después del éxito
      setTimeout(() => {
        setUrl('');
        setEmail('');
        setShowEmailInput(false);
        setResult(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error al guardar email:', error);
    } finally {
      setIsLoading(false);
    }
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
              disabled={!url || isLoading}
              className="px-8 h-14 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analizando...</span>
                </div>
              ) : (
                'Trackear Producto'
              )}
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            ✨ Gratis para siempre • 🔔 Alertas instantáneas • 📊 Historial completo
          </div>
        </div>

        {/* Resultado del tracking */}
        {result && (
          <div className="max-w-2xl mx-auto mb-8">
            {result.success ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    ¡Producto encontrado!
                  </h3>
                </div>
                
                {result.product && (
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={result.product.imageUrl} 
                        alt="Producto"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 text-left">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {result.product.title}
                        </h4>
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {result.product.price} {result.product.currency}
                        </div>
                        <div className="text-sm text-green-600">
                          {result.product.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Input de email */}
                {showEmailInput && (
                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="tu-email@ejemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button
                        onClick={handleEmailSubmit}
                        disabled={!email || isLoading}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Activar Alertas
                      </Button>
                    </div>
                  </div>
                )}

                {result.message && (
                  <div className="mt-4 text-green-700 font-medium">
                    {result.message}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center justify-center mb-2">
                  <AlertCircle className="h-8 w-8 text-red-500 mr-2" />
                  <h3 className="text-xl font-semibold text-red-800">
                    Error al procesar
                  </h3>
                </div>
                <p className="text-red-700">{result.error}</p>
              </div>
            )}
          </div>
        )}
        
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
