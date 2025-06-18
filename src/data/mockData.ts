import { Customer, Subscription, Transaction, DashboardStats } from '../types';

export const subscriptionPlans: Subscription[] = [
  {
    id: 'basic',
    name: 'Basic Maintenance',
    description: 'Essential vehicle maintenance on a monthly schedule',
    price: 29.99,
    billingCycle: 'monthly',
    features: [
      'Monthly oil check',
      'Tire pressure monitoring',
      'Basic fluid top-offs',
      'Monthly exterior wash'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Care',
    description: 'Comprehensive maintenance package with priority service',
    price: 79.99,
    billingCycle: 'monthly',
    features: [
      'Full synthetic oil changes',
      'Tire rotation & balancing',
      'Multi-point inspection',
      'Interior & exterior detailing',
      'Priority scheduling'
    ],
    isPopular: true
  },
  {
    id: 'ultimate',
    name: 'Ultimate Protection',
    description: 'Complete vehicle care with roadside assistance and more',
    price: 129.99,
    billingCycle: 'monthly',
    features: [
      'All Premium features',
      '24/7 Roadside assistance',
      'Rental car during service',
      'Annual deep cleaning detail',
      'Seasonal inspections',
      'All fluids included'
    ]
  }
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      vin: '4T1BF1FK5CU123456'
    },
    subscriptionId: 'premium',
    paymentMethod: {
      id: 'pm_1',
      type: 'credit',
      last4: '4242',
      expiryDate: '04/25',
      isDefault: true
    },
    createdAt: new Date('2023-10-15')
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 987-6543',
    vehicle: {
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      vin: '2HGFC2F59MH567890'
    },
    subscriptionId: 'basic',
    paymentMethod: {
      id: 'pm_2',
      type: 'debit',
      last4: '5555',
      expiryDate: '09/26',
      isDefault: true
    },
    createdAt: new Date('2023-11-03')
  },
  {
    id: '3',
    name: 'Michael Williams',
    email: 'michael.w@example.com',
    phone: '(555) 234-5678',
    vehicle: {
      make: 'Ford',
      model: 'F-150',
      year: 2019,
      vin: '1FTEW1E53JFB12345'
    },
    subscriptionId: 'ultimate',
    paymentMethod: {
      id: 'pm_3',
      type: 'credit',
      last4: '9876',
      expiryDate: '06/24',
      isDefault: true
    },
    createdAt: new Date('2023-09-22')
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: 'tx_1',
    customerId: '1',
    subscriptionId: 'premium',
    amount: 79.99,
    status: 'completed',
    date: new Date('2023-11-15'),
    invoiceUrl: '#'
  },
  {
    id: 'tx_2',
    customerId: '2',
    subscriptionId: 'basic',
    amount: 29.99,
    status: 'completed',
    date: new Date('2023-11-03'),
    invoiceUrl: '#'
  },
  {
    id: 'tx_3',
    customerId: '3',
    subscriptionId: 'ultimate',
    amount: 129.99,
    status: 'failed',
    date: new Date('2023-11-22'),
    invoiceUrl: '#'
  },
  {
    id: 'tx_4',
    customerId: '1',
    subscriptionId: 'premium',
    amount: 79.99,
    status: 'pending',
    date: new Date('2023-12-15'),
    invoiceUrl: '#'
  }
];

export const dashboardStats: DashboardStats = {
  totalCustomers: 37,
  activeSubscriptions: 31,
  monthlyRecurringRevenue: 2849.67,
  recentTransactions: mockTransactions.slice(0, 3)
};