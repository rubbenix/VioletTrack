import React, { useState, useEffect } from 'react';
import { Trash2, Mail, ExternalLink, TrendingDown, TrendingUp } from 'lucide-react';
import { ProductStorage, type TrackedProduct } from '@/utils/storage';
import { Button } from '@/components/ui/button';

const TrackedProducts = () => {
  const [products, setProducts] = useState<TrackedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    setLoading(true);
    const trackedProducts = ProductStorage.getTrackedProducts();
    setProducts(trackedProducts);
    setLoading(false);
  };

  const handleRemoveProduct = (id: string) => {
    if (ProductStorage.removeProduct(id)) {
      loadProducts();
    }
  };

  const getPriceChange = (product: TrackedProduct) => {
    if (product.priceHistory.length < 2) return null;
    
    const currentPrice = product.priceHistory[product.priceHistory.length - 1].price;
    const previousPrice = product.priceHistory[product.priceHistory.length - 2].price;
    
    return currentPrice - previousPrice;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No hay productos en seguimiento
        </h3>
        <p className="text-gray-600 mb-4">
          Agrega tu primer producto usando el formulario de arriba
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">
          Productos en Seguimiento ({products.length})
        </h3>
        <Button
          onClick={() => {
            ProductStorage.clearAll();
            loadProducts();
          }}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
        >
          Limpiar Todo
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const priceChange = getPriceChange(product);
          
          return (
            <div key={product.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64x64?text=No+Image';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {product.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      ASIN: {product.asin}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">
                      {product.price} {product.currency}
                    </div>
                    {priceChange !== null && (
                      <div className={`flex items-center space-x-1 text-sm ${
                        priceChange > 0 ? 'text-red-600' : priceChange < 0 ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {priceChange > 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : priceChange < 0 ? (
                          <TrendingDown className="w-4 h-4" />
                        ) : null}
                        <span>
                          {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)} €
                        </span>
                      </div>
                    )}
                  </div>

                  {product.email && (
                    <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 rounded-lg p-2">
                      <Mail className="w-4 h-4" />
                      <span>Alertas activas: {product.email}</span>
                    </div>
                  )}

                  <div className="text-xs text-gray-500">
                    <div>Agregado: {formatDate(product.createdAt)}</div>
                    <div>Última verificación: {formatDate(product.lastChecked)}</div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button
                      onClick={() => window.open(product.url, '_blank')}
                      className="flex-1 border border-gray-300 hover:bg-gray-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Ver en Amazon
                    </Button>
                    <Button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackedProducts;
