import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const productImages = [
  'https://images.pexels.com/photos/1458346/pexels-photo-1458346.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1458347/pexels-photo-1458347.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1458348/pexels-photo-1458348.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1458349/pexels-photo-1458349.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export function Products() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const products = [
    {
      title: t('products.organic.title'),
      description: t('products.organic.description'),
      price: t('products.organic.price'),
      image: productImages[0],
    },
    {
      title: t('products.lawn.title'),
      description: t('products.lawn.description'),
      price: t('products.lawn.price'),
      image: productImages[1],
    },
    {
      title: t('products.tomato.title'),
      description: t('products.tomato.description'),
      price: t('products.tomato.price'),
      image: productImages[2],
    },
    {
      title: t('products.flower.title'),
      description: t('products.flower.description'),
      price: t('products.flower.price'),
      image: productImages[3],
    },
  ];

  return (
    <section 
      id="products" 
      ref={elementRef}
      className="py-20 bg-gradient-to-br from-forest to-soil relative overflow-hidden"
    >
      {/* Background organic shape */}
      <svg
        className="absolute top-20 left-10 w-72 h-72 opacity-5"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M50,100 C30,60 60,20 100,30 C140,40 170,70 160,110 C150,150 120,180 80,170 C40,160 50,100 50,100 Z"
          fill="white"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-sand/90 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}