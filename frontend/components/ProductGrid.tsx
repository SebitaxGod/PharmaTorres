'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image_url?: string;
  short_description?: string;
  requires_prescription: boolean;
}

interface ProductGridProps {
  limit?: number;
  category?: string;
  featured?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  limit = 8, 
  category,
  featured = false 
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/products`;
        
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (category) params.append('category', category);
        if (featured) params.append('featured', 'true');
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }

        const data = await response.json();
        console.log('API Response:', data); // Debug log
        
        // El backend devuelve { message: '...', data: [...] }
        const productsData = data.data || data.products || data || [];
        
        // Asegurar que siempre sea un array
        if (Array.isArray(productsData)) {
          setProducts(productsData);
        } else {
          console.error('Invalid products data:', productsData); // Debug log
          throw new Error('La respuesta no contiene un array de productos válido');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error fetching products:', err);
        
        // Datos de ejemplo como fallback si la API no está disponible
        setProducts([
          {
            id: '1',
            name: 'Paracetamol 500mg',
            price: 2500,
            short_description: 'Alivio rápido del dolor y fiebre',
            requires_prescription: false,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '2',
            name: 'Ibuprofeno 400mg',
            price: 3200,
            short_description: 'Antiinflamatorio potente',
            requires_prescription: false,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '3',
            name: 'Amoxicilina 500mg',
            price: 8900,
            short_description: 'Antibiótico recetado',
            requires_prescription: true,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '4',
            name: 'Centrum Adultos',
            price: 12900,
            short_description: 'Vitaminas y minerales esenciales',
            requires_prescription: false,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '5',
            name: 'Eucerin Protector Solar FPS 60',
            price: 18900,
            short_description: 'Protección solar avanzada',
            requires_prescription: false,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '6',
            name: 'Shampoo Anticaspa',
            price: 4500,
            short_description: 'Elimina la caspa efectivamente',
            requires_prescription: false,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '7',
            name: 'Loratadina 10mg',
            price: 3800,
            short_description: 'Alivio de síntomas alérgicos',
            requires_prescription: false,
            image_url: '/api/placeholder/200/200'
          },
          {
            id: '8',
            name: 'Omeprazol 20mg',
            price: 4500,
            short_description: 'Control de acidez estomacal',
            requires_prescription: true,
            image_url: '/api/placeholder/200/200'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, category, featured]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from({ length: limit }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 h-56 rounded-xl mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Error al cargar productos: {error}</p>
        <p className="text-sm text-gray-400 mt-2">
          Verifique que el servidor backend esté ejecutándose
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.isArray(products) && products.slice(0, limit).map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image_url || '/api/placeholder/200/200',
            requiresPrescription: product.requires_prescription
          }}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
