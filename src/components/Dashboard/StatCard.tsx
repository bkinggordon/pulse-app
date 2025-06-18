import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement<LucideIcon>;
  change?: {
    value: number;
    isPositive: boolean;
  };
  bgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change,
  bgColor = 'bg-white'
}) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 rounded-full bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
        {change && (
          <p className={`text-sm mt-1 ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
            <span className="text-gray-500 ml-1">since last month</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;