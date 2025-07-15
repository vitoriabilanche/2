import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Smartphone Pro Max',
    sales: 1234,
    revenue: 'R$ 123.456',
    change: 12.5,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 2,
    name: 'Notebook Gamer',
    sales: 856,
    revenue: 'R$ 85.600',
    change: -3.2,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 3,
    name: 'Fone Bluetooth',
    sales: 2341,
    revenue: 'R$ 46.820',
    change: 8.7,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 4,
    name: 'Smartwatch',
    sales: 567,
    revenue: 'R$ 34.020',
    change: 15.3,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 5,
    name: 'Tablet Pro',
    sales: 423,
    revenue: 'R$ 25.380',
    change: -1.8,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  }
];

export function TopProducts() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Produtos Mais Vendidos</h3>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          Ver relatório
        </button>
      </div>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-500 bg-gray-100 rounded-full group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                {index + 1}
              </span>
            </div>
            
            <img 
              src={product.image} 
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {product.name}
              </p>
              <p className="text-sm text-gray-500">
                {product.sales} vendas
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {product.revenue}
              </p>
              <div className={`flex items-center text-xs ${
                product.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.change >= 0 ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {Math.abs(product.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}