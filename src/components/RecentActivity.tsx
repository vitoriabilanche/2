import React from 'react';
import { User, ShoppingCart, TrendingUp, AlertCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'user',
    icon: User,
    title: 'Novo usuário registrado',
    description: 'Maria Santos se cadastrou na plataforma',
    time: '2 min atrás',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    id: 2,
    type: 'sale',
    icon: ShoppingCart,
    title: 'Nova venda realizada',
    description: 'Pedido #1234 - R$ 299,90',
    time: '5 min atrás',
    color: 'text-green-600 bg-green-50'
  },
  {
    id: 3,
    type: 'growth',
    icon: TrendingUp,
    title: 'Meta mensal atingida',
    description: '105% da meta de vendas alcançada',
    time: '1 hora atrás',
    color: 'text-purple-600 bg-purple-50'
  },
  {
    id: 4,
    type: 'alert',
    icon: AlertCircle,
    title: 'Estoque baixo',
    description: 'Produto XYZ com apenas 5 unidades',
    time: '2 horas atrás',
    color: 'text-orange-600 bg-orange-50'
  },
  {
    id: 5,
    type: 'user',
    icon: User,
    title: 'Usuário atualizado',
    description: 'João Silva atualizou seu perfil',
    time: '3 horas atrás',
    color: 'text-blue-600 bg-blue-50'
  }
];

export function RecentActivity() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Atividade Recente</h3>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          Ver todas
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 group hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors">
            <div className={`p-2 rounded-lg ${activity.color} transition-transform group-hover:scale-110`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}