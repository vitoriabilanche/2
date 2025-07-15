import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { SalesChart, WeeklyChart, DeviceChart } from './components/Chart';
import { RecentActivity } from './components/RecentActivity';
import { TopProducts } from './components/TopProducts';
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Calendar,
  Download
} from 'lucide-react';
import { formatCurrency, formatNumber } from './lib/utils';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const metrics = [
    {
      title: 'Receita Total',
      value: formatCurrency(124500),
      change: 12.5,
      icon: DollarSign,
      color: 'green' as const
    },
    {
      title: 'Usuários Ativos',
      value: formatNumber(8420),
      change: 8.2,
      icon: Users,
      color: 'blue' as const
    },
    {
      title: 'Vendas',
      value: formatNumber(1234),
      change: -2.1,
      icon: ShoppingCart,
      color: 'yellow' as const
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      change: 5.7,
      icon: TrendingUp,
      color: 'red' as const
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
      `}>
        <Sidebar 
          isCollapsed={sidebarCollapsed} 
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-gray-600 mt-1">Bem-vindo de volta! Aqui está o resumo dos seus dados.</p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                  <button className="btn-secondary flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Últimos 30 dias</span>
                  </button>
                  <button className="btn-primary flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Exportar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <MetricCard {...metric} />
                </div>
              ))}
            </div>

            {/* Charts grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="lg:col-span-2 animate-slide-up">
                <SalesChart />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <WeeklyChart />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <DeviceChart />
              </div>
            </div>

            {/* Bottom section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <TopProducts />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
                <RecentActivity />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;