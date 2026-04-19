import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Star, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  index: number;
  comingSoon?: boolean;
}

export function ProductCard({ title, description, price, image, index, comingSoon = false }: ProductCardProps) {
  const { t } = useLanguage();
  const [showChoice, setShowChoice] = useState(false);

  const buildMessage = (lang: 'it' | 'en') => {
    if (lang === 'it') {
      return [
        'Salve!',
        '',
        `Sono interessato/a al seguente prodotto dell'Impresa Agricola Guarino Giovanni:`,
        `🌿 *${title}*`,
        '',
        'Potreste fornirmi informazioni su disponibilità e prezzi?',
        '',
        'Grazie mille!',
      ].join('\n');
    } else {
      return [
        'Hello!',
        '',
        `I am interested in the following product from Guarino Giovanni Agricultural Company:`,
        `🌿 *${title}*`,
        '',
        'Could you please provide information on availability and pricing?',
        '',
        'Thank you very much!',
      ].join('\n');
    }
  };

  const handleOrder = (lang: 'it' | 'en') => {
    const number = lang === 'it' ? '393318948442' : '393294555978';
    const message = buildMessage(lang);
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    setShowChoice(false);
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-white/20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative overflow-hidden bg-white/5">
        <img 
          src={image} 
          alt={title}
          className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = '/images/products/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        {comingSoon ? (
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            Coming Soon
          </div>
        ) : (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">4.8</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sand transition-colors">
          {title}
        </h3>
        
        <p className="text-sand/80 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-white">
            {price}
          </span>
          <span className="text-sand/70 text-sm">
            {t('products.perPackage')}
          </span>
        </div>
        
        <div className="relative">
          {comingSoon ? (
            <div className="w-full bg-amber-500/20 border border-amber-400/40 text-amber-200 font-semibold py-3 px-4 rounded-xl flex flex-col items-center justify-center text-center">
              <span className="text-base font-bold">🍎 Coming Soon</span>
              <span className="text-xs mt-1 opacity-80">{t('products.seasonal')}</span>
            </div>
          ) : null}
          {!comingSoon && <motion.button
            onClick={() => setShowChoice(!showChoice)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('whatsapp.orderNow')}</span>
          </motion.button>

          <AnimatePresence>
            {showChoice && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-full mb-2 left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Scegli la lingua / Choose language</span>
                  <button onClick={() => setShowChoice(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => handleOrder('it')}
                  className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition-colors text-left"
                >
                  <span className="text-2xl">🇮🇹</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Ordina in Italiano</p>
                    <p className="text-xs text-gray-500">+39 331 894 8442</p>
                  </div>
                </button>
                <div className="h-px bg-gray-100" />
                <button
                  onClick={() => handleOrder('en')}
                  className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition-colors text-left"
                >
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Order in English</p>
                    <p className="text-xs text-gray-500">+39 329 455 5978</p>
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          }
        </div>

        {!comingSoon && (
          <p className="text-sand/60 text-xs text-center mt-2">
            {t('whatsapp.fastOrder')}
          </p>
        )}
      </div>
    </motion.div>
  );
}