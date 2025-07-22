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
    'about.text': 'Per fornire un po\' di storia e background del nostro piccolo pezzo di paradiso, Giovanni & Stefani Farms è stata ufficialmente fondata da tre fratelli, Antonio, Domenico e Nicola Guarino, nel 1985 su soli 5 acri di terreno, e inizialmente producevano solo una varietà di prodotti suini per la vendita al pubblico. Nel corso del tempo e degli anni, Antonio, Domenico e Nicola Guarino hanno coltivato la terra piantando alberi di nocciole, peschi, meli e viti, viti che potete vedere lungo gli accessi dalla strada principale al nostro impianto di lavorazione. La nostra piccola fattoria ora produce il nostro pollame, vino, mele, pesche e, come avrete intuito, nocciole. Antonio, Domenico e Nicola hanno anche espanso l\'impronta della fattoria nel corso degli anni e ora abbiamo un totale di 90 acri distribuiti in tre località separate. Sono un agricoltore di seconda generazione e mio figlio Nicola, se sceglierà, sarà un agricoltore di terza generazione. Come agricoltore, non sarò mai ricco come Enzo Ferrari, ma amerò sempre quello che faccio. Quello che è iniziato da umili origini si è rapidamente evoluto in qualcosa di molto più grande quando la domanda dei clienti è aumentata esponenzialmente per le nostre nocciole. Credo che ciò che distingue veramente Giovanni & Stefani Farms nel mondo della qualità e produzione delle nocciole sia il cuore dietro la nostra attività: la "famiglia". Giovanni & Stefani è ancora gestita dalle persone che l\'hanno costruita dal nulla - e si vede. La nostra dedizione incrollabile è una testimonianza della stabilità e affidabilità della nostra fattoria. Quando chiami Giovanni & Stefani, non stai solo trattando con un\'altra corporazione senza volto; qualcuno della famiglia è disponibile per rispondere alla tua chiamata e affrontare le tue preoccupazioni. L\'approccio pratico della nostra famiglia assicura che i nostri valori di affidabilità, qualità e cura del cliente siano integrati in ogni aspetto della nostra attività, ed è per questo che crediamo che Ferrero abbia scelto di lavorare con noi. Dedichiamo tutto questo ad Antonio, Domenico e Nicola Guarino, che con tanto sacrificio sono riusciti a plasmare il nostro futuro, e noi ricambiamo con l\'amore e la dedizione che ci hanno trasmesso negli anni.',
    'about.stats.founded': 'Fondata',
    'about.stats.acres': 'Acri',
    'about.stats.generations': 'Generazioni',
    'about.stats.locations': 'Sedi',
    'about.readMore': 'Leggi di più',
    
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
    'footer.legal': 'Legale',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Termini di Servizio',
    'footer.gdpr': 'GDPR',
    
    // Cookie Banner
    'cookies.title': 'Utilizziamo i Cookie',
    'cookies.description': 'Utilizziamo cookie essenziali per il funzionamento del sito e cookie opzionali per migliorare la tua esperienza. Puoi accettare tutti i cookie o personalizzare le tue preferenze.',
    'cookies.acceptAll': 'Accetta Tutti',
    'cookies.rejectAll': 'Rifiuta Tutti',
    'cookies.customize': 'Personalizza',
    'cookies.settings.title': 'Impostazioni Cookie',
    'cookies.necessary.title': 'Cookie Necessari',
    'cookies.necessary.description': 'Essenziali per il funzionamento del sito web e per la sicurezza.',
    'cookies.analytics.title': 'Cookie Analitici',
    'cookies.analytics.description': 'Ci aiutano a capire come i visitatori interagiscono con il sito.',
    'cookies.marketing.title': 'Cookie di Marketing',
    'cookies.marketing.description': 'Utilizzati per mostrare annunci personalizzati.',
    'cookies.alwaysActive': 'Sempre attivi',
    'cookies.savePreferences': 'Salva Preferenze',
    
    // WhatsApp Integration
    'whatsapp.orderNow': 'Ordina su WhatsApp',
    'whatsapp.orderMessage': 'Ciao! Sono interessato al prodotto:',
    
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
    'about.text': 'To provide some background and history about our little piece of heaven, Giovanni & Stefani Farms was officially established by three brothers, Antonio, Domenico and Nicola Guarino, in 1985 on just 5 acres of land, and they only produced a variety of pork products for sale to the public. Over time and throughout the years, Antonio, Domenico and Nicola Guarino cultivated the land planting hazelnut trees, peach trees, apple trees and grapes, grapes you can see lining the approaches from the main road to our processing plant. Our little farm now produces our own poultry, wine, apples, peaches and, as you may have guessed, hazelnuts. Antonio, Domenico and Nicola also expanded the farm\'s footprint over the years and we now have a grand total of 90 acres across three separate locations. I am a second-generation farmer and my son Nicola, if he chooses, will be a third-generation farmer. As a farmer, I\'ll never be as rich as Enzo Ferrari, but I\'ll always love what I do. What started from humble beginnings quickly evolved into something much bigger when customer demand increased exponentially for our hazelnuts. I believe that what truly sets Giovanni & Stefani Farms apart in the world of Hazelnut quality and production is the heart behind our business— "family". Giovanni & Stefani is still run by the people who built it from the ground up — and it shows. Our unwavering dedication is a testament to our farm\'s stability and reliability. When you call Giovanni & Stefani, you\'re not just dealing with another faceless corporation; someone from the family is available to take your call and address your concerns. Our family\'s hands-on approach ensures that our values of reliability, quality, and customer care are integrated into every aspect of our business which is why we believe Ferrero chose to work with us. We dedicate all of this to Antonio, Domenico and Nicola Guarino, who with so much sacrifice have managed to shape our future, and we reciprocate with the love and dedication they have passed on to us over the years.',
    'about.stats.founded': 'Founded',
    'about.stats.acres': 'Acres',
    'about.stats.generations': 'Generations',
    'about.stats.locations': 'Locations',
    'about.readMore': 'Read more',
    
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
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms of Service',
    'footer.gdpr': 'GDPR',
    
    // Cookie Banner
    'cookies.title': 'We Use Cookies',
    'cookies.description': 'We use essential cookies for site functionality and optional cookies to improve your experience. You can accept all cookies or customize your preferences.',
    'cookies.acceptAll': 'Accept All',
    'cookies.rejectAll': 'Reject All',
    'cookies.customize': 'Customize',
    'cookies.settings.title': 'Cookie Settings',
    'cookies.necessary.title': 'Necessary Cookies',
    'cookies.necessary.description': 'Essential for website functionality and security.',
    'cookies.analytics.title': 'Analytics Cookies',
    'cookies.analytics.description': 'Help us understand how visitors interact with the website.',
    'cookies.marketing.title': 'Marketing Cookies',
    'cookies.marketing.description': 'Used to display personalized advertisements.',
    'cookies.alwaysActive': 'Always active',
    'cookies.savePreferences': 'Save Preferences',
    
    // WhatsApp Integration
    'whatsapp.orderNow': 'Order on WhatsApp',
    'whatsapp.orderMessage': 'Hello! I am interested in the product:',
    
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