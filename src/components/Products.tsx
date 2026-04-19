import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Products() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const products = [
    {
      title: t('products.hazelnutCream.title'),
      description: t('products.hazelnutCream.description'),
      price: t('products.priceOnRequest'),
      image: '/images/products/superior-hazelnut-cream.jpg',
    },
    {
      title: t('products.hazelnutLiqueur.title'),
      description: t('products.hazelnutLiqueur.description'),
      price: t('products.priceOnRequest'),
      image: '/images/products/superior-hazelnut-liqueur.jpg',
    },
    {
      title: t('products.redWine.title'),
      description: t('products.redWine.description'),
      price: t('products.priceOnRequest'),
      image: '/images/products/superior-red-wine.jpg',
    },
    {
      title: t('products.whiteWine.title'),
      description: t('products.whiteWine.description'),
      price: t('products.priceOnRequest'),
      image: '/images/products/superior-white-wine.jpg',
    },
    {
      title: t('products.toastedHazelnut.title'),
      description: t('products.toastedHazelnut.description'),
      price: t('products.priceOnRequest'),
      image: '/images/products/superior-toasted-hazelnut.jpg',
    },
    {
      title: t('products.annurca.title'),
      description: t('products.annurca.description'),
      price: t('products.priceOnRequest'),
      image: '/images/products/mela-annurca-igp.jpg',
      comingSoon: true,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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