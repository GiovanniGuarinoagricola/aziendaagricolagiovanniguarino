import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Leaf, Facebook, Twitter, Instagram, Send } from 'lucide-react';
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
    <footer className="bg-[#151414] relative">
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
              <span className="text-[#757575]">1010 Avenue, sw 54321, chandigarh</span>
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
              <span className="text-[#757575]">9876543210</span>
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
              <span className="text-[#757575]">mail@info.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="w-10 h-10 text-[#ff5e14]" />
              <span className="text-2xl font-serif font-bold text-white">Giovanni's & Stefani Farm</span>
            </div>
            <p className="text-[#7e7e7e] mb-8 leading-relaxed">
              Premium organic fertilizers for sustainable cultivation since 1985. We provide the best products for your agricultural needs.
            </p>
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

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-xl font-semibold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:h-0.5 after:w-12 after:bg-[#ff5e14]">
              Useful Links
              </h3>
            <div className="grid grid-cols-2 gap-4">
              {usefulLinks.map((link, index) => (
                    <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-[#878787] hover:text-[#ff5e14] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                    >
                  {link}
                    </motion.a>
                ))}
            </div>
          </motion.div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white text-xl font-semibold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:h-0.5 after:w-12 after:bg-[#ff5e14]">
              Subscribe
            </h3>
            <p className="text-[#7e7e7e] mb-6">
              Don't miss to subscribe to our new feeds, kindly fill the form below.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-[#2E2E2E] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff5e14] transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="absolute right-1 top-1 bg-[#ff5e14] text-white p-3 rounded-full hover:bg-[#e54d0d] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 -rotate-45" />
              </motion.button>
            </form>
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
              Copyright © 2024 <a href="#" className="text-[#ff5e14] hover:underline">Giovanni's & Stefani Farm</a>. All Rights Reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {['Home', 'Terms', 'Privacy', 'Policy', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#878787] hover:text-[#ff5e14] text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}