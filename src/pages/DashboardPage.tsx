import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import StatCard from '../components/Dashboard/StatCard';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import CustomerList from '../components/Customers/CustomerList';
import { dashboardStats, mockCustomers, mockTransactions } from '../data/mockData';
import { Users, CreditCard, TrendingUp, Calendar } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600">Here's an overview of your automotive subscription business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Customers"
          value={dashboardStats.totalCustomers}
          icon={<Users size={20} />}
          change={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="Active Subscriptions"
          value={dashboardStats.activeSubscriptions}
          icon={<Calendar size={20} />}
          change={{ value: 5.1, isPositive: true }}
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${dashboardStats.monthlyRecurringRevenue.toFixed(2)}`}
          icon={<TrendingUp size={20} />}
          change={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Payment Success Rate"
          value="98.5%"
          icon={<CreditCard size={20} />}
          change={{ value: 0.5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <CustomerList customers={mockCustomers} />
        </div>
        <div>
          <RecentTransactions transactions={mockTransactions} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;