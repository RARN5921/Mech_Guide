import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Eye,
  Settings2,
  Library,
  Thermometer,
  ShoppingCart
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { to: '/', icon: <LayoutDashboard size={20} />, label: '대시보드' },
    { to: '/visual-advisor', icon: <Eye size={20} />, label: '설계 어드바이저' },
    { to: '/selection-engine', icon: <Settings2 size={20} />, label: '규격 추천 엔진' },
    { to: '/cad-library', icon: <Library size={20} />, label: 'CAD 라이브러리' },
    { to: '/material-optimizer', icon: <Thermometer size={20} />, label: '재질 최적화' },
    { to: '/commerce-connector', icon: <ShoppingCart size={20} />, label: '커머스 커넥터' },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-tight text-blue-400">MECH-GUIDE</h1>
        <p className="text-xs text-slate-400 mt-1">Mechanical Design Assistant</p>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500 text-center">
        © 2024 MECH-GUIDE. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
