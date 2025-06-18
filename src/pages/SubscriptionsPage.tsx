import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import SubscriptionPlans from '../components/Subscriptions/SubscriptionPlans';
import { subscriptionPlans } from '../data/mockData';

const SubscriptionsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Subscriptions</h1>
        <p className="text-gray-600">Manage your recurring service plans</p>
      </div>

      <SubscriptionPlans plans={subscriptionPlans} initialSelected="premium" />
    </DashboardLayout>
  );
};

export default SubscriptionsPage;