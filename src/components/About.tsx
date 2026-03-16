import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function About() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const features = [
    { icon: Leaf, value: '1985', label: t('about.stats.founded') },
    { icon: Award, value: '70', label: t('about.stats.hectares') },
    { icon: Users, value: '80.000', label: t('about.stats.trees') },
    { icon: Globe, value: '3', label: t('about.stats.cultivations') },
  ];

  return (
    <section 
      id="about" 
      ref={elementRef}
      className="py-20 bg-sand relative overflow-hidden"
    >
      {/* Background organic shapes */}
      <svg
        className="absolute top-16 right-16 w-64 h-64 opacity-10 animate-float"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M70,30 C110,10 150,25 170,65 C190,105 175,145 135,165 C95,185 55,170 35,130 C15,90 30,50 70,30 Z"
          fill="currentColor"
          className="text-forest"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-soil mb-6 leading-relaxed italic">
              {t('about.subtitle')}
            </p>
            
            <div className="text-soil/80 leading-relaxed mb-8 space-y-5">
              {/* Storia - sempre visibile */}
              <div>
                <h3 className="text-forest font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="inline-block w-6 h-px bg-forest"></span>
                  {t('about.section.history')}
                </h3>
                <p className="text-sm md:text-base">{t('about.history.text')}</p>
              </div>

              <details className="cursor-pointer group">
                <summary className="text-forest font-semibold hover:text-forest/80 transition-colors list-none flex items-center gap-2 select-none">
                  <span className="inline-block w-4 h-4 border-2 border-forest rounded-full flex items-center justify-center text-xs group-open:rotate-45 transition-transform">+</span>
                  {t('about.readMore')}
                </summary>
                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="text-forest font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="inline-block w-6 h-px bg-forest"></span>
                      {t('about.section.territory')}
                    </h3>
                    <p className="text-sm md:text-base">{t('about.territory.text')}</p>
                  </div>
                  <div>
                    <h3 className="text-forest font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="inline-block w-6 h-px bg-forest"></span>
                      {t('about.section.plantations')}
                    </h3>
                    <p className="text-sm md:text-base">{t('about.plantations.text')}</p>
                  </div>
                  <div>
                    <h3 className="text-forest font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="inline-block w-6 h-px bg-forest"></span>
                      {t('about.section.values')}
                    </h3>
                    <div className="space-y-1">
                      {t('about.values.text').split('\n').map((line, i) => (
                        <p key={i} className="text-sm md:text-base">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-forest/10 rounded-full mb-3">
                    <feature.icon className="w-6 h-6 text-forest" />
                  </div>
                  <div className="text-2xl font-bold text-forest mb-1">
                    {feature.value}
                  </div>
                  <div className="text-sm text-soil">
                    {feature.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Main Farm Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/images/azienda-panoramica.jpg"
                  alt="Azienda Agricola Giovanni Guarino - Vista panoramica dei terreni"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
                
                {/* Info overlay */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-forest">70 Ettari di Terreno</span>
                  </div>
                </motion.div>
              </div>

              {/* Products Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/images/footer-background.jpg"
                  alt="Impresa Agricola Guarino Giovanni - Prodotti premium"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
                
                {/* Products overlay */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-forest text-sm">Prodotti Premium</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}