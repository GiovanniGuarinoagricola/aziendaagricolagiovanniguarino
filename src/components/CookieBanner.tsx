import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto p-6">
          {!showSettings ? (
            // Main Cookie Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Cookie className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('cookies.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookies.description')}
                  </p>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2 underline"
                  >
                    {t('cookies.customize')}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  {t('cookies.rejectAll')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                >
                  {t('cookies.acceptAll')}
                </button>
              </div>
            </div>
          ) : (
            // Cookie Settings
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('cookies.settings.title')}
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {t('cookies.necessary.title')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('cookies.necessary.description')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{t('cookies.alwaysActive')}</p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {t('cookies.analytics.title')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('cookies.analytics.description')}
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                    className={`ml-4 w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-orange-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow m-1"></div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {t('cookies.marketing.title')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('cookies.marketing.description')}
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                    className={`ml-4 w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-orange-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow m-1"></div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  {t('cookies.rejectAll')}
                </button>
                <button
                  onClick={acceptSelected}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium flex items-center"
                >
                  <Check className="w-4 h-4 mr-2" />
                  {t('cookies.savePreferences')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  {t('cookies.acceptAll')}
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 