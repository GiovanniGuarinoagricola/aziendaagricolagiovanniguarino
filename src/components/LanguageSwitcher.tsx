import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative">
      <motion.button
        onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-xs hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('a11y.languageSwitch')}
      >
        <span className="text-sm font-medium text-white">
          {language === 'it' ? '🇮🇹' : '🇺🇸'}
        </span>
        <span className="text-sm font-medium text-white uppercase">
          {language}
        </span>
      </motion.button>
    </div>
  );
}