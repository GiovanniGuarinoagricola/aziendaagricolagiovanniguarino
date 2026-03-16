import React, { useState, useEffect } from 'react';
import { Home } from './Home';
import { PrivacyPolicy } from './PrivacyPolicy';
import { CookiePolicy } from './CookiePolicy';
import { TermsOfService } from './TermsOfService';

type Page = 'home' | 'privacy' | 'cookies' | 'terms' | 'gdpr';

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);

      if (hash === 'privacy' || hash === 'gdpr') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else if (hash === 'cookies') {
        setCurrentPage('cookies');
        window.scrollTo(0, 0);
      } else if (hash === 'terms') {
        setCurrentPage('terms');
        window.scrollTo(0, 0);
      } else {
        // home, products, about, contact → mostra home e scrolla alla sezione
        setCurrentPage('home');
        if (hash && hash !== 'home') {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 80);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

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