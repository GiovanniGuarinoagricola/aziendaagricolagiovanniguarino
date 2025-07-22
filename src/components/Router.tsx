import React, { useState, useEffect } from 'react';
import { Home } from './Home';
import { PrivacyPolicy } from './PrivacyPolicy';
import { CookiePolicy } from './CookiePolicy';
import { TermsOfService } from './TermsOfService';

type Page = 'home' | 'privacy' | 'cookies' | 'terms' | 'gdpr';

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (['home', 'privacy', 'cookies', 'terms', 'gdpr'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };

    // Set initial page from URL
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigate function
  const navigate = (page: Page) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
      case 'gdpr':
        return <PrivacyPolicy />;
      case 'cookies':
        return <CookiePolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
} 