import React from 'react';
import { motion } from 'framer-motion';
import { Gift, CalendarClock } from 'lucide-react';
import { ProductCard, WhatsAppOrderButton, formatPrice } from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Prezzi in euro. `null` = prezzo su richiesta.
const PRODUCTS: { key: string; image: string; price: number | null; comingSoon?: boolean }[] = [
  { key: 'annurcaPreserve', image: '/images/products/annurca-apple-preserve.jpg', price: 10 },
  { key: 'annurcaCinnamonPreserve', image: '/images/products/annurca-apple-cinnamon-preserve.jpg', price: 10 },
  { key: 'hazelnutCream', image: '/images/products/superior-hazelnut-cream.jpg', price: 10 },
  { key: 'hazelnutLiqueur', image: '/images/products/superior-hazelnut-liqueur.jpg', price: 15 },
  { key: 'acaciaHoney', image: '/images/products/acacia-honey.jpg', price: 10 },
  { key: 'chestnutHoney', image: '/images/products/chestnut-honey.jpg', price: 10 },
  { key: 'wildflowerHoney', image: '/images/products/wildflower-honey.jpg', price: 10 },
  { key: 'redWine', image: '/images/products/superior-red-wine.jpg', price: null },
  { key: 'whiteWine', image: '/images/products/superior-white-wine.jpg', price: null },
  { key: 'toastedHazelnut', image: '/images/products/superior-toasted-hazelnut.jpg', price: null },
  { key: 'annurca', image: '/images/products/mela-annurca-igp.jpg', price: null, comingSoon: true },
];

const CHRISTMAS_BOX = { image: '/images/products/christmas-box.jpg', price: 50 };

export function Products() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const boxTitle = t('products.christmasBox.title');

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
          className="text-center mb-12"
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

        {/* Christmas Box in evidenza */}
        <motion.div
          className="mb-10 rounded-3xl border border-amber-300/40 bg-white/10 backdrop-blur-sm shadow-2xl grid grid-cols-1 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white flex items-center justify-center p-4 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <img
              src={CHRISTMAS_BOX.image}
              alt={boxTitle}
              className="w-full max-h-96 object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow mb-4">
              <Gift className="w-4 h-4" />
              {t('products.christmasBox.badge')}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">{boxTitle}</h3>
            <p className="text-sand/85 leading-relaxed mb-5">{t('products.christmasBox.description')}</p>
            <div className="flex items-center gap-2 text-amber-200 font-semibold mb-6">
              <CalendarClock className="w-5 h-5 shrink-0" />
              <span>{t('products.christmasBox.deadline')}</span>
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-white">{formatPrice(CHRISTMAS_BOX.price)}</span>
              <span className="text-sand/70 text-sm">{t('products.perPackage')}</span>
            </div>
            <WhatsAppOrderButton productTitle={boxTitle} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, index) => (
            <ProductCard
              key={p.key}
              title={t(`products.${p.key}.title`)}
              description={t(`products.${p.key}.description`)}
              price={p.price === null ? t('products.priceOnRequest') : formatPrice(p.price)}
              image={p.image}
              comingSoon={p.comingSoon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
