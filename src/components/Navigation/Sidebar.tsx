import React from 'react';
import { LayoutDashboard, Users, CreditCard, FileText, Settings, Car, LogOut, Home } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', active: false },
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Users size={20} />, label: 'Customers', active: false },
    { icon: <Car size={20} />, label: 'Vehicles', active: false },
    { icon: <CreditCard size={20} />, label: 'Subscriptions', active: false },
    { icon: <FileText size={20} />, label: 'Invoices', active: false },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-slate-800 text-white">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-slate-900">
            <h1 className="text-xl font-bold flex items-center">
              <Car className="mr-2" />
              AutoSubscribe
            </h1>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    item.active 
                      ? 'bg-slate-700 text-white' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t border-slate-700">
            <a href="#" className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              <LogOut className="mr-3" size={20} />
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;