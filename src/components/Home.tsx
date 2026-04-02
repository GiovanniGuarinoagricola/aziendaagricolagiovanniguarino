import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Products } from './Products';
import { About } from './About';
import { Gallery } from './Gallery';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import { CookieBanner } from './CookieBanner';

export function Home() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Gallery />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
} 