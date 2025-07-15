import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'yellow' | 'red';
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 border-blue-200',
  green: 'bg-green-50 text-green-600 border-green-200',
  yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  red: 'bg-red-50 text-red-600 border-red-200',
};

export function MetricCard({ title, value, change, icon: Icon, color = 'blue' }: MetricCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="metric-card group">
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "p-3 rounded-xl border transition-all duration-200 group-hover:scale-110",
          colorClasses[color]
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={cn(
          "text-sm font-medium px-2 py-1 rounded-full",
          isPositive ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
        )}>
          {isPositive ? '+' : ''}{change.toFixed(1)}%
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}