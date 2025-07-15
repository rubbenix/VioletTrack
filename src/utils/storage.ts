// Utilidades para manejar el almacenamiento local de productos trackeados

export interface TrackedProduct {
  id: string;
  asin: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string;
  url: string;
  email?: string;
  createdAt: string;
  lastChecked: string;
  priceHistory: Array<{
    price: number;
    timestamp: string;
  }>;
}

export class ProductStorage {
  private static STORAGE_KEY = 'violettrack_products';

  static getTrackedProducts(): TrackedProduct[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error al cargar productos:', error);
      return [];
    }
  }

  static addProduct(product: Omit<TrackedProduct, 'id' | 'createdAt' | 'lastChecked' | 'priceHistory'>): TrackedProduct {
    const products = this.getTrackedProducts();
    
    // Verificar si el producto ya existe
    const existingProduct = products.find(p => p.asin === product.asin);
    if (existingProduct) {
      // Actualizar producto existente
      existingProduct.price = product.price;
      existingProduct.lastChecked = new Date().toISOString();
      existingProduct.priceHistory.push({
        price: product.price,
        timestamp: new Date().toISOString()
      });
      
      this.saveProducts(products);
      return existingProduct;
    }

    // Crear nuevo producto
    const newProduct: TrackedProduct = {
      ...product,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      priceHistory: [{
        price: product.price,
        timestamp: new Date().toISOString()
      }]
    };

    products.push(newProduct);
    this.saveProducts(products);
    
    return newProduct;
  }

  static updateProductEmail(asin: string, email: string): boolean {
    const products = this.getTrackedProducts();
    const product = products.find(p => p.asin === asin);
    
    if (product) {
      product.email = email;
      this.saveProducts(products);
      return true;
    }
    
    return false;
  }

  static removeProduct(id: string): boolean {
    const products = this.getTrackedProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    
    if (filteredProducts.length !== products.length) {
      this.saveProducts(filteredProducts);
      return true;
    }
    
    return false;
  }

  static saveProducts(products: TrackedProduct[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
      console.error('Error al guardar productos:', error);
    }
  }

  static getProductByAsin(asin: string): TrackedProduct | undefined {
    return this.getTrackedProducts().find(p => p.asin === asin);
  }

  static getTotalProducts(): number {
    return this.getTrackedProducts().length;
  }

  static clearAll(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
