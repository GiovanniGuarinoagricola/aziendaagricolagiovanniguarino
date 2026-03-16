import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

export function ProductCard({ title, description, price, image, index }: ProductCardProps) {
  const { t } = useLanguage();

  const handleWhatsAppOrder = () => {
    const message = [
      t('whatsapp.msgGreeting'),
      '',
      t('whatsapp.msgIntro'),
      `🌿 *${title}*`,
      '',
      t('whatsapp.msgRequest'),
      '',
      t('whatsapp.msgThanks'),
    ].join('\n');
    const whatsappUrl = `https://wa.me/393294555978?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
        
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-700">4.8</span>
        </div>
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
        
        <motion.button
          onClick={handleWhatsAppOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t('whatsapp.orderNow')}</span>
        </motion.button>
        
        <p className="text-sand/60 text-xs text-center mt-2">
          {t('whatsapp.fastOrder')}
        </p>
      </div>
    </motion.div>
  );
}