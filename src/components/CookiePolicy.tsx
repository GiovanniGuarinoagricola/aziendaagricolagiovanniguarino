import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Target, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CookiePolicy() {
  const { language } = useLanguage();

  const handleBackToHome = () => {
    window.location.hash = 'home';
  };

  const cookieTypes = [
    {
      icon: Settings,
      title: language === 'it' ? 'Cookie Tecnici' : 'Technical Cookies',
      description: language === 'it' ? 
        'Necessari per il funzionamento del sito web. Non richiedono consenso.' :
        'Necessary for website functionality. No consent required.',
      examples: language === 'it' ? 
        'Cookie di sessione, preferenze linguistiche, carrello acquisti' :
        'Session cookies, language preferences, shopping cart',
      duration: language === 'it' ? 'Durata sessione' : 'Session duration'
    },
    {
      icon: Eye,
      title: language === 'it' ? 'Cookie Analitici' : 'Analytics Cookies',
      description: language === 'it' ? 
        'Utilizzati per raccogliere informazioni su come i visitatori utilizzano il sito.' :
        'Used to collect information about how visitors use the website.',
      examples: language === 'it' ? 
        'Google Analytics, statistiche di utilizzo' :
        'Google Analytics, usage statistics',
      duration: language === 'it' ? 'Fino a 2 anni' : 'Up to 2 years'
    },
    {
      icon: Target,
      title: language === 'it' ? 'Cookie di Marketing' : 'Marketing Cookies',
      description: language === 'it' ? 
        'Utilizzati per mostrare pubblicità pertinenti e misurare l\'efficacia delle campagne.' :
        'Used to show relevant advertising and measure campaign effectiveness.',
      examples: language === 'it' ? 
        'Facebook Pixel, Google Ads, retargeting' :
        'Facebook Pixel, Google Ads, retargeting',
      duration: language === 'it' ? 'Fino a 1 anno' : 'Up to 1 year'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest to-soil py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={handleBackToHome}
          className="mb-8 flex items-center space-x-2 text-white hover:text-sand transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'it' ? 'Torna alla Home' : 'Back to Home'}</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-sand/90 text-lg">
            {language === 'it' ? 
              'Informazioni sui cookie utilizzati su questo sito web' : 
              'Information about cookies used on this website'
            }
          </p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            {language === 'it' ? 'Cosa sono i Cookie?' : 'What are Cookies?'}
          </h2>
          <p className="text-sand/90 leading-relaxed">
            {language === 'it' ? 
              'I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Ci aiutano a fornire una migliore esperienza utente e a comprendere come viene utilizzato il nostro sito.' :
              'Cookies are small text files that are stored on your device when you visit a website. They help us provide a better user experience and understand how our site is used.'
            }
          </p>
        </motion.div>

        {/* Cookie Types */}
        <div className="space-y-6 mb-8">
          {cookieTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sand/90 mb-3">
                    {type.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white font-medium">
                        {language === 'it' ? 'Esempi:' : 'Examples:'}
                      </span>
                      <p className="text-sand/80">{type.examples}</p>
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        {language === 'it' ? 'Durata:' : 'Duration:'}
                      </span>
                      <p className="text-sand/80">{type.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cookie Management */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            {language === 'it' ? 'Gestione dei Cookie' : 'Cookie Management'}
          </h2>
          <p className="text-sand/90 leading-relaxed mb-4">
            {language === 'it' ? 
              'Puoi gestire le tue preferenze sui cookie in qualsiasi momento utilizzando il pannello delle impostazioni cookie o modificando le impostazioni del tuo browser.' :
              'You can manage your cookie preferences at any time using the cookie settings panel or by changing your browser settings.'
            }
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-sand rounded-full"></div>
              <span className="text-sand/90">
                {language === 'it' ? 
                  'Clicca sul banner cookie per modificare le tue preferenze' :
                  'Click on the cookie banner to modify your preferences'
                }
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-sand rounded-full"></div>
              <span className="text-sand/90">
                {language === 'it' ? 
                  'Modifica le impostazioni del browser per bloccare i cookie' :
                  'Change browser settings to block cookies'
                }
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-sand rounded-full"></div>
              <span className="text-sand/90">
                {language === 'it' ? 
                  'Cancella i cookie esistenti dalle impostazioni del browser' :
                  'Clear existing cookies from browser settings'
                }
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            {language === 'it' ? 'Contatti' : 'Contact Information'}
          </h2>
          <p className="text-sand/90">
            {language === 'it' ? 
              'Per domande relative ai cookie o alla privacy, contattaci all\'indirizzo: ' :
              'For questions related to cookies or privacy, contact us at: '
            }
            <a href="mailto:privacy@giovannistefanifarm.it" className="text-white underline hover:text-sand transition-colors">
              privacy@giovannistefanifarm.it
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-sand/70 text-sm">
            {language === 'it' ? 
              'Ultimo aggiornamento: ' + new Date().toLocaleDateString('it-IT') :
              'Last updated: ' + new Date().toLocaleDateString('en-US')
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
} 