import React, { useState } from 'react';
import { Search, Link2, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

const ProductTracker = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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

      if (data.success) {
        setShowEmailInput(true);
        // Limpiar URL después del éxito, mantener email
        setUrl('');
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
      // Aquí podrías hacer otra llamada al API para guardar el email
      console.log('Guardando email para alertas:', email);
      
      setResult({
        ...result,
        message: `¡Perfecto! Te enviaremos alertas a ${email} cuando el precio baje.`
      });
      
    } catch (error) {
      console.error('Error al guardar email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rastrea cualquier producto de{' '}
            <span className="text-purple-primary">Amazon</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pega el enlace del producto y recibe alertas cuando el precio baje.
            Nunca pierdas una oferta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-full mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-3 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex-1 relative">
              <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="url"
                placeholder="https://www.amazon.com/producto..."
                value={url}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                className="pl-12 border-0 focus:ring-0 text-lg h-12"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !url}
              className="bg-purple-primary hover:bg-purple-600 text-white px-8 py-3 rounded-xl h-12 text-lg font-semibold transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analizando...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Trackear Precio</span>
                </div>
              )}
            </Button>
          </div>
        </form>

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

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Análisis en tiempo real</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Alertas por email</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Historial de precios</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTracker;
