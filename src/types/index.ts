export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicle: Vehicle;
  subscriptionId?: string;
  paymentMethod?: PaymentMethod;
  createdAt: Date;
}

export interface Vehicle {
  make: string;
  model: string;
  year: number;
  vin: string;
  licensePlate?: string;
}

export interface Subscription {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: 'monthly' | 'quarterly' | 'annually';
  features: string[];
  isPopular?: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'credit' | 'debit' | 'bank';
  last4: string;
  expiryDate?: string;
  isDefault: boolean;
}

export interface Transaction {
  id: string;
  customerId: string;
  subscriptionId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: Date;
  invoiceUrl?: string;
}

export interface DashboardStats {
  totalCustomers: number;
  activeSubscriptions: number;
  monthlyRecurringRevenue: number;
  recentTransactions: Transaction[];
}