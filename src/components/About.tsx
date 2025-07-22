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
    { icon: Award, value: '90', label: t('about.stats.acres') },
    { icon: Users, value: '3', label: t('about.stats.generations') },
    { icon: Globe, value: '3', label: t('about.stats.locations') },
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
            
            <p className="text-lg text-soil mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
            
            <div className="text-soil/80 leading-relaxed mb-8 space-y-4">
              {t('about.text').split('. ').slice(0, 3).map((sentence, index) => (
                <p key={index} className="text-sm md:text-base">
                  {sentence}{index < 2 ? '.' : ''}
                </p>
              ))}
              <details className="cursor-pointer">
                <summary className="text-forest font-semibold hover:text-forest/80 transition-colors">
                  {t('about.readMore')}
                </summary>
                <div className="mt-4 space-y-4">
                  {t('about.text').split('. ').slice(3).map((sentence, index) => (
                    <p key={index + 3} className="text-sm md:text-base">
                      {sentence}{index < t('about.text').split('. ').slice(3).length - 1 ? '.' : ''}
                    </p>
                  ))}
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
                    <span className="font-semibold text-forest">90 Acri di Terreno</span>
                  </div>
                </motion.div>
              </div>

              {/* Products Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/images/prodotti-nocciole.jpg"
                  alt="Azienda Agricola Giovanni Guarino - Nocciole e prodotti agricoli"
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
                    <span className="font-semibold text-forest text-sm">Nocciole Premium</span>
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