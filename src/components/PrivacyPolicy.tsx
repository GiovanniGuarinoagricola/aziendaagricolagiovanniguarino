import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function PrivacyPolicy() {
  const { t, language } = useLanguage();

  const handleBackToHome = () => {
    window.location.hash = 'home';
  };

  const sections = [
    {
      title: language === 'it' ? 'Titolare del Trattamento' : 'Data Controller',
      content: language === 'it' ? 
        'Impresa Agricola Guarino Giovanni, con sede legale in Via Fontana Regina, 34 Teano (Ce), in qualità di Titolare del trattamento dei dati personali.' :
        'Impresa Agricola Guarino Giovanni, with registered office at Via Fontana Regina, 34 Teano (Ce), as Data Controller of personal data.'
    },
    {
      title: language === 'it' ? 'Finalità del Trattamento' : 'Purpose of Processing',
      content: language === 'it' ? 
        'I dati personali vengono trattati per: gestione ordini e comunicazioni commerciali; adempimento obblighi fiscali e contabili; gestione reclami e assistenza clienti; invio newsletter e comunicazioni promozionali (previo consenso).' :
        'Personal data is processed for: order management and commercial communications; compliance with fiscal and accounting obligations; handling complaints and customer assistance; sending newsletters and promotional communications (with consent).'
    },
    {
      title: language === 'it' ? 'Base Giuridica' : 'Legal Basis',
      content: language === 'it' ? 
        'Il trattamento si basa su: consenso dell\'interessato per finalità di marketing; esecuzione del contratto per la gestione degli ordini; adempimento di obblighi legali per aspetti fiscali.' :
        'Processing is based on: data subject consent for marketing purposes; contract execution for order management; compliance with legal obligations for fiscal aspects.'
    },
    {
      title: language === 'it' ? 'Destinatari dei Dati' : 'Data Recipients',
      content: language === 'it' ? 
        'I dati possono essere comunicati a: corrieri per le spedizioni; consulenti fiscali e commercialisti; fornitori di servizi IT; autorità competenti quando richiesto dalla legge.' :
        'Data may be communicated to: couriers for shipments; tax consultants and accountants; IT service providers; competent authorities when required by law.'
    },
    {
      title: language === 'it' ? 'Conservazione dei Dati' : 'Data Retention',
      content: language === 'it' ? 
        'I dati vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti e comunque per non oltre 10 anni per gli obblighi fiscali.' :
        'Data is retained for the time necessary for the purposes for which it was collected and in any case for no more than 10 years for fiscal obligations.'
    },
    {
      title: language === 'it' ? 'Diritti dell\'Interessato' : 'Data Subject Rights',
      content: language === 'it' ? 
        'Hai il diritto di: accedere ai tuoi dati; rettificare dati inesatti; cancellare i dati (diritto all\'oblio); limitare il trattamento; portabilità dei dati; opporti al trattamento; revocare il consenso.' :
        'You have the right to: access your data; rectify inaccurate data; erase data (right to be forgotten); restrict processing; data portability; object to processing; withdraw consent.'
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {language === 'it' ? 'Informativa Privacy' : 'Privacy Policy'}
          </h1>
          <p className="text-sand/90 text-lg">
            {language === 'it' ? 
              'Ai sensi del Regolamento UE 2016/679 (GDPR)' : 
              'In accordance with EU Regulation 2016/679 (GDPR)'
            }
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-sand/90 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              {language === 'it' ? 'Contatti' : 'Contact Information'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sand" />
                <div>
                  <p className="text-white font-medium">
                    {language === 'it' ? 'Indirizzo' : 'Address'}
                  </p>
                  <p className="text-sand/80 text-sm">
                    Via Fontana Regina, 34<br />
                    Teano (Ce)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sand" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-sand/80 text-sm">
                    giovanniguarinosrl@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sand" />
                <div>
                  <p className="text-white font-medium">
                    {language === 'it' ? 'Telefono' : 'Phone'}
                  </p>
                  <p className="text-sand/80 text-sm">
                    331.8948442 – 392.9779532
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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