import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TermsOfService() {
  const { language } = useLanguage();

  const handleBackToHome = () => {
    window.location.hash = 'home';
  };

  const sections = [
    {
      title: language === 'it' ? 'Informazioni Generali' : 'General Information',
      content: language === 'it' ? 
        'Questi termini di servizio regolano l\'utilizzo del sito web e l\'acquisto di prodotti da Azienda Agricola Giovanni Guarino. Utilizzando questo sito, accetti integralmente questi termini.' :
        'These terms of service govern the use of the website and the purchase of products from Azienda Agricola Giovanni Guarino. By using this site, you fully accept these terms.'
    },
    {
      title: language === 'it' ? 'Prodotti e Prezzi' : 'Products and Prices',
      content: language === 'it' ? 
        'I prodotti offerti sono quelli visibili sul sito al momento dell\'ordine. I prezzi sono espressi in Euro e comprensivi di IVA. Ci riserviamo il diritto di modificare prezzi e disponibilità senza preavviso.' :
        'The products offered are those visible on the site at the time of order. Prices are expressed in Euros and include VAT. We reserve the right to change prices and availability without notice.'
    },
    {
      title: language === 'it' ? 'Ordini e Pagamenti' : 'Orders and Payments',
      content: language === 'it' ? 
        'Gli ordini vengono processati tramite WhatsApp. Il pagamento può essere effettuato in contanti alla consegna, bonifico bancario o carte di credito. La merce viaggia a rischio e pericolo del destinatario.' :
        'Orders are processed via WhatsApp. Payment can be made in cash on delivery, bank transfer or credit cards. Goods travel at the risk and peril of the recipient.'
    },
    {
      title: language === 'it' ? 'Spedizioni e Consegne' : 'Shipping and Delivery',
      content: language === 'it' ? 
        'Le spedizioni vengono effettuate in tutta Italia. I tempi di consegna variano da 2 a 7 giorni lavorativi. Per ordini superiori a €50 la spedizione è gratuita.' :
        'We ship throughout Italy. Delivery times vary from 2 to 7 working days. For orders over €50, shipping is free.'
    },
    {
      title: language === 'it' ? 'Diritto di Recesso' : 'Right of Withdrawal',
      content: language === 'it' ? 
        'Hai diritto di recedere dal contratto entro 14 giorni dalla ricezione della merce, ad eccezione dei prodotti freschi deperibili. I costi di restituzione sono a tuo carico.' :
        'You have the right to withdraw from the contract within 14 days of receiving the goods, except for fresh perishable products. Return costs are at your expense.'
    },
    {
      title: language === 'it' ? 'Garanzie e Responsabilità' : 'Warranties and Liability',
      content: language === 'it' ? 
        'Garantiamo la qualità dei nostri prodotti agricoli. La nostra responsabilità è limitata al valore dei prodotti acquistati. Non siamo responsabili per danni indiretti.' :
        'We guarantee the quality of our agricultural products. Our liability is limited to the value of the products purchased. We are not responsible for indirect damages.'
    },
    {
      title: language === 'it' ? 'Proprietà Intellettuale' : 'Intellectual Property',
      content: language === 'it' ? 
        'Tutti i contenuti del sito (testi, immagini, loghi) sono protetti da copyright e proprietà intellettuale di Azienda Agricola Giovanni Guarino.' :
        'All site content (texts, images, logos) are protected by copyright and intellectual property of Impresa Agricola di Guarino Giovanni.'
    },
    {
      title: language === 'it' ? 'Legge Applicabile' : 'Applicable Law',
      content: language === 'it' ? 
        'Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di Napoli.' :
        'These terms are governed by Italian law. For any dispute, the Court of Naples will have jurisdiction.'
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
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {language === 'it' ? 'Termini di Servizio' : 'Terms of Service'}
          </h1>
          <p className="text-sand/90 text-lg">
            {language === 'it' ? 
              'Condizioni generali di vendita e utilizzo del sito' : 
              'General conditions of sale and use of the site'
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30"
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-orange-300 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {language === 'it' ? 'Importante' : 'Important'}
                </h2>
                <p className="text-sand/90 leading-relaxed">
                  {language === 'it' ? 
                    'Utilizzando questo sito web e effettuando ordini, dichiari di aver letto, compreso e accettato integralmente questi termini di servizio. In caso di dubbi o domande, contattaci prima di procedere con l\'acquisto.' :
                    'By using this website and placing orders, you declare that you have read, understood and fully accepted these terms of service. If you have any doubts or questions, please contact us before proceeding with your purchase.'
                  }
                </p>
              </div>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-start space-x-4">
              <Scale className="w-6 h-6 text-sand mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {language === 'it' ? 'Dati Societari' : 'Company Information'}
                </h2>
                <div className="text-sand/90 space-y-2">
                  <p><strong>Ragione Sociale:</strong> Azienda Agricola Giovanni Guarino</p>
                  <p><strong>Sede Legale:</strong> Via delle Castellazioni 19, 81017 Melito di Napoli (NA)</p>
                  <p><strong>P.IVA:</strong> 08236581214</p>
                  <p><strong>Email:</strong> info@giovannistefanifarm.it</p>
                  <p><strong>Telefono:</strong> +39 081 123 4567</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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