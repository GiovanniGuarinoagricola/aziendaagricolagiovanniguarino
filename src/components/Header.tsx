import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, Sprout } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home', icon: <Leaf size={16} /> },
    { key: 'nav.products', href: '#products', icon: <Sprout size={16} /> },
    { key: 'nav.about', href: '#about', icon: <Leaf size={16} className="rotate-45" /> },
    { key: 'nav.contact', href: '#contact', icon: <Sprout size={16} className="rotate-90" /> },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-40 transition-all duration-700`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isScrolled 
            ? 'from-white/95 to-white/75' 
            : 'from-black/50 to-transparent'
        } backdrop-blur-sm transition-all duration-700 z-10`} />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: isScrolled ? 0.1 : 0.8 }}
        >
          <source src="/media/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Leaf className={`w-8 h-8 ${isScrolled ? 'text-forest' : 'text-white'} transition-colors duration-500`} />
              <motion.div
                className={`absolute -inset-1 ${isScrolled ? 'bg-forest/20' : 'bg-white/20'} rounded-full -z-10 transition-colors duration-500`}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <span className={`text-xl font-serif font-bold ${
              isScrolled ? 'text-forest' : 'text-white'
            } transition-colors duration-500`}>
              Giovanni Guarino
            </span>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`flex items-center space-x-2 font-medium transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-forest' : 'text-white hover:text-sand'
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <motion.span
                  className="transition-transform duration-300"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                >
                  {item.icon}
                </motion.span>
                <span>{t(item.key)}</span>
              </motion.a>
            ))}
          </nav>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled ? 'text-forest' : 'text-white'
              } transition-colors duration-500`}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div 
              className="relative z-20 bg-white/95 backdrop-blur-lg border-t border-white/10"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 font-medium hover:text-forest hover:bg-forest/5 transition-all duration-300 p-3 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="transition-transform duration-300 group-hover:rotate-12">
                      {item.icon}
                    </span>
                    <span>{t(item.key)}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}