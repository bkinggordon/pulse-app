<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pulse - Mental Health App</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.27.0/dist/umd/react-router-dom.production.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.0/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect, useContext, Suspense, memo } = React;
    const { BrowserRouter: Router, Routes, Route, Navigate, useNavigate } = ReactRouterDOM;

    // Theme Context
    const ThemeContext = React.createContext();
    const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');
      useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }, [theme]);
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    // Mood Context
    const MoodContext = React.createContext();
    const MoodProvider = ({ children }) => {
      const [mood, setMood] = useState(null);
      return (
        <MoodContext.Provider value={{ mood, setMood }}>
          {children}
        </MoodContext.Provider>
      );
    };

    // Auth Context (Simulated)
    const AuthContext = React.createContext();
    const AuthProvider = ({ children }) => {
      const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate auth
      const login = () => setIsAuthenticated(true);
      const logout = () => setIsAuthenticated(false);
      return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };

    // Protected Route
    const ProtectedRoute = ({ children }) => {
      const { isAuthenticated } = useContext(AuthContext);
      return isAuthenticated ? children : <Navigate to="/" replace />;
    };

    // Error Boundary
    class ErrorBoundary extends React.Component {
      state = { hasError: false };
      static getDerivedStateFromError() {
        return { hasError: true };
      }
      render() {
        return this.state.hasError ? (
          <div className="text-center p-4 text-red-500">Something went wrong.</div>
        ) : (
          this.props.children
        );
      }
    }

    // Components
    const Header = memo(() => {
      const { theme, setTheme } = useContext(ThemeContext);
      const { logout } = useContext(AuthContext);
      const navigate = useNavigate();
      return (
        <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Pulse</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                onClick={() => { logout(); navigate('/'); }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      );
    });

    const CrisisResourcesButton = memo(() => (
      <button
        className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-600"
        aria-label="Access crisis resources"
        onClick={() => alert('Crisis Resources: Call 988 or visit 988lifeline.org')}
      >
        Crisis Help
      </button>
    ));

    const Onboarding = () => {
      const { login } = useContext(AuthContext);
      const navigate = useNavigate();
      return (
        <div className="max-w-md mx-auto p-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Welcome to Pulse</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Track your mood, journal your thoughts, and connect with a community.
          </p>
          <button
            onClick={() => { login(); navigate('/mood-music'); }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Get Started
          </button>
        </div>
      );
    };

    const MoodMusic = () => (
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mood Music</h2>
        <p className="text-gray-600 dark:text-gray-300">Select music based on your mood.</p>
      </div>
    );

    const Journal = () => (
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Journal</h2>
        <p className="text-gray-600 dark:text-gray-300">Write your thoughts here.</p>
      </div>
    );

    const Community = () => (
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Community</h2>
        <p className="text-gray-600 dark:text-gray-300">Connect with others.</p>
      </div>
    );

    const Profile = () => (
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Profile</h2>
        <p className="text-gray-600 dark:text-gray-300">Manage your account.</p>
      </div>
    );

    // App
    function App() {
      return (
        <ThemeProvider>
          <MoodProvider>
            <AuthProvider>
              <Router>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                  <Header />
                  <main className="pt-16 pb-16">
                    <ErrorBoundary>
                      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
                        <Routes>
                          <Route path="/" element={<Onboarding />} />
                          <Route path="/mood-music" element={<MoodMusic />} />
                          <Route
                            path="/journal"
                            element={<ProtectedRoute><Journal /></ProtectedRoute>}
                          />
                          <Route path="/community" element={<Community />} />
                          <Route
                            path="/profile"
                            element={<ProtectedRoute><Profile /></ProtectedRoute>}
                          />
                          <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                      </Suspense>
                    </ErrorBoundary>
                  </main>
                  <CrisisResourcesButton />
                </div>
              </Router>
            </AuthProvider>
          </MoodProvider>
        </ThemeProvider>
      );
    }

    // Render
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>