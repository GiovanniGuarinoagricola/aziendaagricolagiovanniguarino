import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import { gsap } from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';
import { useParallax } from '../hooks/useParallax';

export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useParallax(0.5);
  const shapeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (shapeRef.current) {
      // Organic shape morphing animation
      gsap.to(shapeRef.current, {
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        morphSVG: {
          shapeIndex: 1
        }
      });
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-br from-forest via-forest/90 to-soil"
      >
        {/* Organic shapes */}
        <svg
          ref={shapeRef}
          className="absolute top-20 right-20 w-64 h-64 opacity-10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M44.5,150.5 C29.5,130.5 35.5,95.5 55.5,80.5 C75.5,65.5 115.5,70.5 135.5,85.5 C155.5,100.5 165.5,130.5 150.5,150.5 C135.5,170.5 95.5,175.5 75.5,160.5 C55.5,145.5 44.5,150.5 44.5,150.5 Z"
            fill="white"
          />
        </svg>

        <svg
          className="absolute bottom-32 left-16 w-48 h-48 opacity-5 animate-float"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M60,40 C90,20 130,25 160,55 C190,85 185,125 155,155 C125,185 85,180 55,150 C25,120 30,80 60,40 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xs rounded-full mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Leaf className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-sand/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-white text-forest font-semibold rounded-full text-lg hover:bg-sand transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-1 h-16 bg-white/40 rounded-full"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}