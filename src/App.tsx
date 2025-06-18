import React from 'react';
import DashboardPage from './pages/DashboardPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  // In a real app, this would use a router
  // For demo purposes, we'll show the dashboard by default
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  // Side effect to allow navigation through the URL hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['dashboard', 'subscriptions', 'payment'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initialize from current hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title
  React.useEffect(() => {
    document.title = `AutoSubscribe - ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;
  }, [currentPage]);

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'subscriptions':
        return <SubscriptionsPage />;
      case 'payment':
        return <PaymentPage />;
      case 'dashboard':
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}

export default App;