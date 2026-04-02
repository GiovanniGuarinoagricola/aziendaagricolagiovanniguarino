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
    'hero.title': 'Prodotti a KM0 di alta qualità per la tua salute e benessere.',
    'hero.subtitle': 'Prodotti a KM0 di alta qualità per la tua salute e benessere.',
    'hero.cta': 'Scopri i Prodotti',
    
    // Products
    'products.title': 'I Nostri Prodotti',
    'products.subtitle': 'Una selezione esclusiva dei migliori prodotti dell\'Impresa Agricola Guarino Giovanni',
    'products.hazelnutCream.title': 'Superior Hazelnut Cream',
    'products.hazelnutCream.description': 'Crema di nocciole superiore prodotta con le nostre nocciole Tonda Gentile Trilobata, coltivate nei nostri 50.000 alberi a Teano.',
    'products.hazelnutLiqueur.title': 'Superior Hazelnut Liqueur',
    'products.hazelnutLiqueur.description': 'Liquore di nocciole superiore, ricavato dalle nocciole pregiate del nostro territorio vulcanico campano.',
    'products.redWine.title': 'Superior Red Wine',
    'products.redWine.description': 'Vino rosso superiore prodotto con uva selezionata coltivata nel fertile suolo vulcanico di Teano.',
    'products.whiteWine.title': 'Superior White Wine',
    'products.whiteWine.description': 'Vino bianco superiore, fresco ed elegante, espressione autentica del nostro territorio.',
    'products.toastedHazelnut.title': 'Superior Toasted Hazelnut',
    'products.toastedHazelnut.description': 'Nocciola tostata superiore, raccolta, selezionata e tostata artigianalmente per preservarne gusto e aroma.',
    'products.priceOnRequest': 'Prezzo su richiesta',
    'products.perPackage': 'per confezione',
    'products.addToCart': 'Richiedi su WhatsApp',
    
    // About
    'about.title': 'La Nostra Storia',
    'about.subtitle': 'L\'arte della natura — tradizione e innovazione dal 1985',
    'about.section.history': 'LA STORIA',
    'about.history.text': 'Nel 1985, l\'Impresa Agricola Guarino Giovanni è stata fondata da due fratelli, Antonio e Nicola Guarino. Oggi l\'azienda è gestita professionalmente dai loro figli, Giovanni Guarino e Giovanni Guarino. Inizialmente l\'attività agricola si concentrava principalmente sulle mele Annurca, le nettarine e l\'allevamento suino. Successivamente, con l\'integrazione dei loro figli nell\'azienda, si è deciso di espandersi con la coltivazione delle nocciole e di avviare un\'attività di «agrofarmaci», con prodotti progettati per proteggere e trattare le piante in modo naturale. Questi sforzi hanno portato l\'azienda a diventare il punto di riferimento per gli «agrofarmaci» nella Regione Campania e valorizzano i nostri prodotti agricoli, in particolare la mela Annurca, famosa in tutto il mondo, conosciuta come la «Regina di tutte le Mele».',
    'about.section.territory': 'IL TERRITORIO',
    'about.territory.text': 'L\'Impresa Agricola Guarino Giovanni è situata a Teano, in Italia, un comune immerso in un vasto territorio di origine vulcanica, ricco di sorgenti naturali e circondato da foreste. Le caratteristiche uniche del territorio di Teano, unite al clima mite e alla fertilità del suolo vulcanico, rendono Teano la sede ideale per la produzione delle nostre famose mele Annurca, pesche e nocciole.',
    'about.section.plantations': 'GLI IMPIANTI',
    'about.plantations.text': 'Oggi l\'azienda si estende su circa 70 ettari e vanta una vasta produzione grazie ai nostri tre impianti. Il primo impianto di mele Annurca Red comprende 20.000 alberi, il secondo impianto include 50.000 piante di nocciolo mentre il terzo impianto di nettarine conta 10.000 alberi.',
    'about.section.values': 'I VALORI',
    'about.values.text': '• Qualità Insuperabile: i nostri prodotti sono di altissima qualità ricchi di valori nutritivi\n• Innovazione d\'Avanguardia: siamo pionieri all\'avanguardia nella ricerca delle soluzioni più innovative per migliorare continuamente i nostri prodotti.\n• Tradizione Familiare: agiamo con rispetto per la natura e per le tradizioni più antiche.\n• Passione Senza Freni: senza amore, impegno e passione non potremmo mai svolgere il nostro lavoro.',
    'about.stats.founded': 'Fondata',
    'about.stats.hectares': 'Ettari',
    'about.stats.trees': 'Alberi',
    'about.stats.cultivations': 'Coltivazioni',
    'about.readMore': 'Leggi di più',
    
    // Footer
    'footer.company': 'Azienda',
    'footer.products': 'Prodotti',
    'footer.support': 'Supporto',
    'footer.contact': 'Contatti',
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
    'whatsapp.fastOrder': 'Ordine veloce tramite WhatsApp',
    'whatsapp.msgGreeting': 'Salve!',
    'whatsapp.msgIntro': 'Sono interessato/a al seguente prodotto dell\'Impresa Agricola Guarino Giovanni:',
    'whatsapp.msgRequest': 'Potreste fornirmi informazioni su disponibilità e prezzi?',
    'whatsapp.msgThanks': 'Grazie mille!',
    
    // Gallery
    'gallery.title': 'La Nostra Azienda',
    'gallery.subtitle': 'Scorci di natura, lavoro e passione dai nostri campi a Teano',

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
    'hero.title': 'High-quality zero Kilometer products for your health and wellness.',
    'hero.subtitle': 'High-quality zero Kilometer products for your health and wellness.',
    'hero.cta': 'Discover Products',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'An exclusive selection of the finest products from Guarino Giovanni Agricultural Company',
    'products.hazelnutCream.title': 'Superior Hazelnut Cream',
    'products.hazelnutCream.description': 'Superior hazelnut cream crafted with our Tonda Gentile Trilobata hazelnuts, grown across our 50,000 trees in Teano.',
    'products.hazelnutLiqueur.title': 'Superior Hazelnut Liqueur',
    'products.hazelnutLiqueur.description': 'Superior hazelnut liqueur made from premium hazelnuts grown in the volcanic soil of the Campania region.',
    'products.redWine.title': 'Superior Red Wine',
    'products.redWine.description': 'Superior red wine produced from select grapes cultivated in the fertile volcanic soil of Teano.',
    'products.whiteWine.title': 'Superior White Wine',
    'products.whiteWine.description': 'Superior white wine, fresh and elegant — an authentic expression of our unique territory.',
    'products.toastedHazelnut.title': 'Superior Toasted Hazelnut',
    'products.toastedHazelnut.description': 'Superior toasted hazelnuts, hand-harvested, selected and roasted to preserve their unique taste and aroma.',
    'products.priceOnRequest': 'Price on request',
    'products.perPackage': 'per package',
    'products.addToCart': 'Order on WhatsApp',
    
    // About
    'about.title': 'Our History',
    'about.subtitle': 'The Art of Nature — tradition and innovation since 1985',
    'about.section.history': 'OUR HISTORY',
    'about.history.text': 'In 1985, the Giovanni Guarino Agricultural Company was founded by two brothers, Antonio and Nicola Guarino. Today, the business is professionally managed by their sons, Giovanni Guarino and Giovanni Guarino. Initially, the agricultural activity focused primarily on Annurca apples, nectarines, and pig farming. Subsequently, with the integration of their sons into the company, it was decided to expand with the cultivation of hazelnuts and to establish an «agrochemicals» business, with products designed to protect and treat plants naturally. These efforts have resulted in the company becoming the single point of reference for «agrochemicals» in the Campania Region and highlights the value of our agricultural products, in particular the world-famous Annurca apple, known as the «Queen of all Apples».',
    'about.section.territory': 'OUR TERRITORY',
    'about.territory.text': 'The Guarino Giovanni Agricultural Company is located in Teano, Italy, a municipality nestled inside a vast territory of volcanic origin that is rich in natural springs and surrounded by forests. The unique characteristics of the Teano territory, combined with the mild climate and fertility of the volcanic soil, make Teano the ideal location for the production of our world-famous Annurca apples, peaches, and hazelnuts.',
    'about.section.plantations': 'OUR PLANTATIONS',
    'about.plantations.text': 'Today the company extends over approximately 70 hectares and boasts a vast production thanks to our three plantations. Our first plantation of Annurca Red apples consists of 20,000 trees, our second plantation includes 50,000 hazelnut trees while our third plantation of nectarines totals 10,000 trees.',
    'about.section.values': 'OUR VALUES',
    'about.values.text': '• Unrivaled Quality: our products are the highest quality with the richness of nutritional value\n• Spearheading Innovation: we are pioneers at the forefront of research in the most innovative solutions to continuously improve our products.\n• Family Tradition: we act with respect for nature and the oldest traditions.\n• Unbridled Passion: without love, commitment and passion we could never do our job.',
    'about.stats.founded': 'Founded',
    'about.stats.hectares': 'Hectares',
    'about.stats.trees': 'Trees',
    'about.stats.cultivations': 'Cultivations',
    'about.readMore': 'Read more',
    
    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
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
    'whatsapp.fastOrder': 'Quick order via WhatsApp',
    'whatsapp.msgGreeting': 'Hello!',
    'whatsapp.msgIntro': 'I am interested in the following product from Guarino Giovanni Agricultural Company:',
    'whatsapp.msgRequest': 'Could you please provide information on availability and pricing?',
    'whatsapp.msgThanks': 'Thank you very much!',
    
    // Gallery
    'gallery.title': 'Our Farm',
    'gallery.subtitle': 'Glimpses of nature, work and passion from our fields in Teano',

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