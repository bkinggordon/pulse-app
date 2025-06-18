import React, { useState } from 'react';
import { Subscription } from '../../types';
import SubscriptionCard from './SubscriptionCard';

interface SubscriptionPlansProps {
  plans: Subscription[];
  initialSelected?: string;
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ 
  plans,
  initialSelected
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(initialSelected);

  const handleSelectPlan = (id: string) => {
    setSelectedPlan(id);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Subscription Plans</h2>
        <p className="mt-1 text-sm text-gray-500">
          Choose the best subscription plan for your automotive business
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <SubscriptionCard 
            key={plan.id} 
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelect={handleSelectPlan}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;