import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Foto doppioni rimosse (10, 12, 19, 21): restano solo scatti diversi tra loro.
const GALLERY_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 20];
const galleryImages = GALLERY_IDS.map((id) => ({
  src: `/images/gallery/gallery-${String(id).padStart(2, '0')}.jpg`,
  id,
}));

export function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="gallery" className="py-20 bg-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4 inline-flex items-center justify-center gap-3">
            <Camera className="w-8 h-8 md:w-10 md:h-10 text-forest/70 shrink-0" aria-hidden="true" />
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-soil/80 max-w-xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={`${t('gallery.title')} ${index + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-3 py-1 rounded-full">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={`Gallery ${lightboxIndex + 1}`}
              className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
