import React from 'react';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Usuários' },
  { icon: ShoppingCart, label: 'Vendas' },
  { icon: BarChart3, label: 'Relatórios' },
  { icon: Settings, label: 'Configurações' },
];

const bottomItems = [
  { icon: HelpCircle, label: 'Ajuda' },
  { icon: LogOut, label: 'Sair' },
];

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-full",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Dashboard</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors group",
                  item.active
                    ? "bg-primary-50 text-primary-700 border border-primary-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  item.active ? "text-primary-600" : "text-gray-400 group-hover:text-gray-600"
                )} />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-2">
          {bottomItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}