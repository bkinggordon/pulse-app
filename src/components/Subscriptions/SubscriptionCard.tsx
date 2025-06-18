import React from 'react';
import { Subscription } from '../../types';
import { Check } from 'lucide-react';

interface SubscriptionCardProps {
  plan: Subscription;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ 
  plan, 
  isSelected = false,
  onSelect
}) => {
  return (
    <div 
      className={`
        relative flex flex-col rounded-lg border shadow-sm p-6 transition-all duration-300
        ${isSelected 
          ? 'border-blue-500 ring-2 ring-blue-500 shadow-md' 
          : 'border-gray-200 hover:shadow-md hover:border-gray-300'}
        ${plan.isPopular ? 'bg-blue-50' : 'bg-white'}
      `}
      onClick={() => onSelect && onSelect(plan.id)}
    >
      {plan.isPopular && (
        <div className="absolute top-0 transform -translate-y-1/2 inset-x-0 flex justify-center">
          <span className="inline-flex px-4 py-1 rounded-full text-xs font-semibold leading-5 bg-blue-600 text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
      </div>

      <div className="mb-5">
        <div className="flex items-end">
          <p className="text-3xl font-extrabold text-gray-900">${plan.price}</p>
          <p className="ml-1 text-xl font-medium text-gray-500">/{plan.billingCycle}</p>
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <p className="ml-3 text-sm text-gray-700">{feature}</p>
          </li>
        ))}
      </ul>

      <button
        className={`
          w-full py-3 px-4 rounded-md text-center text-sm font-medium transition-colors duration-200
          ${isSelected 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}
        `}
      >
        {isSelected ? 'Current Plan' : 'Select Plan'}
      </button>
    </div>
  );
};

export default SubscriptionCard;