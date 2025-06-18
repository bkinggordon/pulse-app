import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PaymentForm from '../components/Payment/PaymentForm';

const PaymentPage: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Payment data submitted:', data);
    // In a real application, this would integrate with a payment processor
    alert('Payment method added successfully!');
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payment Settings</h1>
        <p className="text-gray-600">Manage your payment methods and billing settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PaymentForm onSubmit={handleSubmit} />
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Billing Information</h3>
          
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Next billing date</p>
            <p className="text-md font-medium">December 15, 2023</p>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Payment methods</p>
            <div className="bg-gray-50 rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-800 font-bold mr-3">
                  Visa
                </div>
                <div>
                  <p className="text-sm font-medium">Visa ending in 4242</p>
                  <p className="text-xs text-gray-500">Expires 04/25</p>
                </div>
              </div>
              <span className="text-xs font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full">
                Default
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Billing History</h4>
            <div className="border border-gray-200 rounded-md divide-y">
              <div className="p-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium">Premium Plan</p>
                  <p className="text-xs text-gray-500">Nov 15, 2023</p>
                </div>
                <div className="text-sm font-medium">$79.99</div>
              </div>
              <div className="p-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium">Premium Plan</p>
                  <p className="text-xs text-gray-500">Oct 15, 2023</p>
                </div>
                <div className="text-sm font-medium">$79.99</div>
              </div>
              <div className="p-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium">Premium Plan</p>
                  <p className="text-xs text-gray-500">Sep 15, 2023</p>
                </div>
                <div className="text-sm font-medium">$79.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentPage;