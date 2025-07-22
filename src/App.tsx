import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Router } from './components/Router';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for critical resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LanguageProvider>
        <LoadingSpinner />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}

export default App;