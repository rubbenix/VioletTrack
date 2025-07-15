
import React, { useState } from 'react';
import { Search, Link2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulamos una búsqueda
    setTimeout(() => {
      console.log('Buscando producto:', url);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 text-center">
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

        <form onSubmit={handleSubmit} className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row gap-3 p-2 bg-purple-100 rounded-xl shadow-lg border border-purple-300">
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
                  <span>Buscando...</span>
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

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Zap className="h-4 w-4 text-purple-primary" />
            <span>Análisis en tiempo real</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Alertas instantáneas</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Histórico completo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
