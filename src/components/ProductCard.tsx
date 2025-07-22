import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
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

  return (
    <motion.div
      className="group relative bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 15,
        rotateX: 5,
        z: 50,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      }}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-serif font-semibold text-white group-hover:text-sand transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-sand/80 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col space-y-3">
          <span className="text-2xl font-bold text-white">
            {price}
          </span>
          
          <motion.button
            className="w-full flex items-center justify-center space-x-2 bg-white text-forest px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-sand transition-colors duration-200 group-hover:shadow-lg"
            whileHover={{ 
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
              }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
              }
            }}
            aria-label={`${t('a11y.addToCart')} ${title}`}
          >
            <ShoppingCart size={16} className="transition-transform duration-200 group-hover:rotate-12" />
            <span>{t('products.addToCart')}</span>
          </motion.button>
        </div>
      </div>

      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
    </motion.div>
  );
}