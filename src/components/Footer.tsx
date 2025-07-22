import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Leaf, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', bgColor: 'bg-[#3B5998]', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', bgColor: 'bg-[#55ACEE]', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', bgColor: 'bg-[#E4405F]', label: 'Instagram' },
  ];

  const usefulLinks = [
    'Home', 'About', 'Services', 'Portfolio', 'Contact',
    'About us', 'Our Services', 'Expert Team', 'Contact us', 'Latest News'
  ];

  return (
    <footer className="bg-[#151414] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-backgroun.jpg"
          alt="Azienda Agricola Giovanni Guarino - Paesaggio rurale"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151414] via-[#151414]/90 to-[#151414]/70"></div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* CTA Section */}
        <div className="container mx-auto px-4 border-b border-[#373636]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-3 bg-[#ff5e14] rounded-full">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-1">Find us</h4>
                <span className="text-[#757575]">Via delle Castellazioni 19, 81017 Melito di Napoli (NA)</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-3 bg-[#ff5e14] rounded-full">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-1">Call us</h4>
                <span className="text-[#757575]">+39 081 123 4567</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 bg-[#ff5e14] rounded-full">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-1">Mail us</h4>
                <span className="text-[#757575]">info@giovannistefanifarm.it</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Leaf className="w-10 h-10 text-[#ff5e14]" />
                <span className="text-2xl font-serif font-bold text-white">Azienda Agricola Giovanni Guarino</span>
              </div>
              <p className="text-[#7e7e7e] mb-8 leading-relaxed">
                Azienda Agricola Giovanni Guarino specializzata in prodotti agricoli di alta qualità. Fondata nel 1985, gestiamo 90 acri distribuiti in tre località per offrire i migliori prodotti della terra campana.
              </p>
              <div className="text-[#7e7e7e] text-sm space-y-2 mb-6">
                <p><strong>Ragione Sociale:</strong> Azienda Agricola Giovanni Guarino</p>
                <p><strong>Sede Legale:</strong> Via delle Castellazioni 19, 81017 Melito di Napoli (NA)</p>
                <p><strong>P.IVA:</strong> 08236581214</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white text-xl font-semibold mb-4">Follow us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`${social.bgColor} p-2.5 rounded-full hover:opacity-80 transition-opacity`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Company Links */}
              <div>
                <h4 className="text-white text-xl font-semibold mb-6">{t('footer.company')}</h4>
                <ul className="space-y-3">
                  {[
                    { key: 'footer.aboutUs', href: '#about' },
                    { key: 'footer.products', href: '#products' },
                    { key: 'footer.contact', href: '#contact' },
                    { key: 'footer.careers', href: '#' },
                  ].map((item, index) => (
                    <motion.li key={item.key}>
                      <a
                        href={item.href}
                        className="text-[#7e7e7e] hover:text-[#ff5e14] transition-colors duration-300 block"
                      >
                        {t(item.key)}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Legal & GDPR */}
              <div>
                <h4 className="text-white text-xl font-semibold mb-6">{t('footer.legal')}</h4>
                <ul className="space-y-3">
                  {[
                    { key: 'footer.privacy', href: '#privacy' },
                    { key: 'footer.cookies', href: '#cookies' },
                    { key: 'footer.terms', href: '#terms' },
                    { key: 'footer.gdpr', href: '#gdpr' },
                  ].map((item, index) => (
                    <motion.li key={item.key}>
                      <a
                        href={item.href}
                        className="text-[#7e7e7e] hover:text-[#ff5e14] transition-colors duration-300 block"
                      >
                        {t(item.key)}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#202020] py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-[#878787] text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Copyright © 2024 <a href="#" className="text-[#ff5e14] hover:underline">Azienda Agricola Giovanni Guarino</a>. {t('footer.rights')}
              </motion.p>
              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[
                  { key: 'nav.home', href: '#home' },
                  { key: 'footer.terms', href: '#terms' },
                  { key: 'footer.privacy', href: '#privacy' },
                  { key: 'footer.cookies', href: '#cookies' },
                  { key: 'nav.contact', href: '#contact' }
                ].map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    className="text-[#878787] hover:text-[#ff5e14] text-sm transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}