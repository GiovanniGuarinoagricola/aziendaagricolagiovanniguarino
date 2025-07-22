import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { CustomCursor } from './components/CustomCursor';

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
      <div className="relative min-h-screen">
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <Products />
          <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;