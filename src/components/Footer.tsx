import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Leaf, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  const { t } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/ImpresaagricolaGuarinoGiovanni/?locale=it_IT', bgColor: 'bg-[#3B5998]', label: 'Facebook' },
    { icon: <WhatsAppIcon className="w-5 h-5" />, href: 'https://wa.me/393294555978', bgColor: 'bg-[#25D366]', label: 'WhatsApp' },
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
          src="/images/footer-background.jpg"
          alt="Azienda Agricola Giovanni Guarino - Paesaggio rurale"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151414] via-[#151414]/90 to-[#151414]/70"></div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* CTA Section */}
        <div id="contact" className="container mx-auto px-4 border-b border-[#373636]">
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
                <span className="text-[#757575]">Via Fontana Regina, 34 Teano (Ce)</span>
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
                <p className="text-[#757575] text-sm">🇮🇹 +39 331 894 8442</p>
                <p className="text-[#999] text-xs mb-2">for Italian order / info</p>
                <p className="text-[#757575] text-sm">🇬🇧 +39 329 455 5978</p>
                <p className="text-[#999] text-xs">for English order / info</p>
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
                <span className="text-[#757575]">giovanniguarinosrl@gmail.com</span>
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
                {!logoError ? (
                  <img
                    src="/images/logo.png"
                    alt="Impresa Agricola Guarino Giovanni"
                    className="h-14 w-auto object-contain brightness-0 invert"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <Leaf className="w-10 h-10 text-[#ff5e14]" />
                )}
                <span className="text-2xl font-serif font-bold text-white">Impresa Agricola Guarino Giovanni</span>
              </div>
              <p className="text-[#7e7e7e] mb-8 leading-relaxed">
                Impresa Agricola Guarino Giovanni — fondata nel 1985 a Teano (Ce). Produzione di mele Annurca, nocciole e nettarine su 70 ettari di terreno vulcanico. L'arte della natura.
              </p>
              <div className="text-[#7e7e7e] text-sm space-y-2 mb-6">
                <p><strong>Ragione Sociale:</strong> Impresa Agricola Guarino Giovanni</p>
                <p><strong>Sede Legale:</strong> Via Fontana Regina, 34 Teano (Ce)</p>
                <p>🇮🇹 <strong>Tel IT:</strong> +39 331 894 8442</p>
                <p>🇬🇧 <strong>Tel EN:</strong> +39 329 455 5978</p>
                <p><strong>Email:</strong> giovanniguarinosrl@gmail.com</p>
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
                Copyright © 2025 <a href="#" className="text-[#ff5e14] hover:underline">Impresa Agricola Guarino Giovanni</a>. {t('footer.rights')}
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