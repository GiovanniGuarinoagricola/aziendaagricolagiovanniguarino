import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LoadingSpinner() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-sand/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="inline-block animate-leaf-spin mb-4">
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-forest"
          >
            <path
              d="M12 2C12 2 7 7 7 12C7 15.31 9.69 18 13 18C16.31 18 19 15.31 19 12C19 7 14 2 12 2Z"
              fill="currentColor"
              fillOpacity="0.7"
            />
            <path
              d="M12 2C12 2 17 7 17 12C17 15.31 14.31 18 11 18C7.69 18 5 15.31 5 12C5 7 10 2 12 2Z"
              fill="currentColor"
              fillOpacity="0.4"
            />
          </svg>
        </div>
        <p className="text-forest font-medium" aria-live="polite">
          {t('loading.text')}
        </p>
      </div>
    </div>
  );
}