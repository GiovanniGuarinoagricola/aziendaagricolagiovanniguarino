import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'it' | 'en';

interface LanguageContextType {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Prodotti',
    'nav.about': 'Chi Siamo',
    'nav.contact': 'Contatti',
    
    // Hero
    'hero.title': 'Nutriamo la Terra, Coltiviamo il Futuro',
    'hero.subtitle': 'Prodotti biologici di alta qualità per la tua azienda agricola',
    'hero.cta': 'Scopri i Prodotti',
    
    // Products
    'products.title': 'I Nostri Prodotti',
    'products.subtitle': 'Selezione di prodotti biologici di alta qualità',
    'products.organic.title': 'Fertilizzante Organico Universale',
    'products.organic.description': 'Miscela ricca di nutrienti per tutte le piante da giardino',
    'products.organic.price': '€24,99',
    'products.lawn.title': 'Nutrimento Prato Verde',
    'products.lawn.description': 'Formula speciale per prati lussureggianti e resistenti',
    'products.lawn.price': '€19,99',
    'products.tomato.title': 'Boost Pomodori & Ortaggi',
    'products.tomato.description': 'Concentrato di minerali per ortaggi saporiti e abbondanti',
    'products.tomato.price': '€29,99',
    'products.flower.title': 'Fioritura Spettacolare',
    'products.flower.description': 'Stimola fioritura colorata e duratura',
    'products.flower.price': '€22,99',
    'products.addToCart': 'Aggiungi al Carrello',
    
    // About
    'about.title': 'La Nostra Storia',
    'about.subtitle': 'Tradizione e Innovazione',
    'about.text': 'Da oltre 35 anni, Giovanni\'s & Stefani Farm si dedica alla creazione di prodotti biologici che rispettano l\'ambiente e nutrono le piante in modo naturale. La nostra ricerca continua ci ha portati a sviluppare tecniche innovative che combinano antica saggezza agricola e moderne pratiche sostenibili.',
    
    // Footer
    'footer.company': 'Azienda',
    'footer.products': 'Prodotti',
    'footer.support': 'Supporto',
    'footer.aboutUs': 'Chi Siamo',
    'footer.careers': 'Lavora con Noi',
    'footer.news': 'Novità',
    'footer.organic': 'Biologici',
    'footer.lawn': 'Ortaggi',
    'footer.vegetables': 'Frutta',
    'footer.help': 'Aiuto',
    'footer.shipping': 'Spedizioni',
    'footer.returns': 'Resi',
    'footer.rights': 'Tutti i diritti riservati',
    
    // Loading
    'loading.text': 'Caricamento...',
    
    // Accessibility
    'a11y.languageSwitch': 'Cambia lingua',
    'a11y.addToCart': 'Aggiungi al carrello',
    'a11y.loading': 'Caricamento in corso',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Nourishing Earth, Growing Future',
    'hero.subtitle': 'High-quality organic products for your farm',
    'hero.cta': 'Discover Products',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Selection of high-quality organic products',
    'products.organic.title': 'Universal Organic Fertilizer',
    'products.organic.description': 'Nutrient-rich blend for all garden plants',
    'products.organic.price': '$27.99',
    'products.lawn.title': 'Green Lawn Nutrition',
    'products.lawn.description': 'Special formula for lush and resilient lawns',
    'products.lawn.price': '$21.99',
    'products.tomato.title': 'Tomato & Vegetable Boost',
    'products.tomato.description': 'Mineral concentrate for flavorful and abundant vegetables',
    'products.tomato.price': '$32.99',
    'products.flower.title': 'Spectacular Blooms',
    'products.flower.description': 'Stimulates colorful and long-lasting flowering',
    'products.flower.price': '$24.99',
    'products.addToCart': 'Add to Cart',
    
    // About
    'about.title': 'Our Story',
    'about.subtitle': 'Tradition and Innovation',
    'about.text': 'For over 35 years, Giovanni\'s & Stefani Farm has been dedicated to creating organic products that respect the environment and nourish plants naturally. Our continuous research has led us to develop innovative techniques that combine ancient farming wisdom with modern sustainable practices.',
    
    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.aboutUs': 'About Us',
    'footer.careers': 'Careers',
    'footer.news': 'News',
    'footer.organic': 'Organic',
    'footer.lawn': 'Vegetables',
    'footer.vegetables': 'Fruits',
    'footer.help': 'Help',
    'footer.shipping': 'Shipping',
    'footer.returns': 'Returns',
    'footer.rights': 'All rights reserved',
    
    // Loading
    'loading.text': 'Loading...',
    
    // Accessibility
    'a11y.languageSwitch': 'Switch language',
    'a11y.addToCart': 'Add to cart',
    'a11y.loading': 'Loading in progress',
  },
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<string>('it');

  useEffect(() => {
    const saved = localStorage.getItem('gs-farm-language');
    if (saved && (saved === 'it' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key as keyof typeof translations['it']] || key;
  };

  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage);
    localStorage.setItem('gs-farm-language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}