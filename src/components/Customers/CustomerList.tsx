import React from 'react';
import { Customer } from '../../types';
import { Plus } from 'lucide-react';

interface CustomerListProps {
  customers: Customer[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Customers</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center transition-colors duration-150">
          <Plus size={16} className="mr-1" />
          Add Customer
        </button>
      </div>
      <div className="min-w-full divide-y divide-gray-200">
        <div className="bg-gray-50">
          <div className="grid grid-cols-6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="col-span-2">Customer</div>
            <div className="col-span-1">Vehicle</div>
            <div className="col-span-1">Subscription</div>
            <div className="col-span-1">Since</div>
            <div className="col-span-1">Actions</div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {customers.map((customer) => (
            <div key={customer.id} className="grid grid-cols-6 px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
              <div className="col-span-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <div className="text-sm text-gray-900">
                  {customer.vehicle.year} {customer.vehicle.make} {customer.vehicle.model}
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {customer.subscriptionId?.charAt(0).toUpperCase() + (customer.subscriptionId?.slice(1) || '')}
                </span>
              </div>
              <div className="col-span-1 flex items-center">
                <div className="text-sm text-gray-500">
                  {new Date(customer.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">Edit</button>
                <span className="text-gray-300">|</span>
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{customers.length}</span> of{" "}
          <span className="font-medium">{customers.length}</span> customers
        </div>
        <div>
          <button className="px-3 py-1 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Previous
          </button>
          <button className="ml-2 px-3 py-1 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;