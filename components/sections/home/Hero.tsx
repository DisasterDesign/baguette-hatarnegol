'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background placeholder — replace with real food image */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card via-bg to-bg-card" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4 py-20">
        {/* Restaurant name in English */}
        <motion.h1
          className="font-playfair text-accent text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {siteConfig.nameEn}
        </motion.h1>

        {/* Hebrew subtitle */}
        <motion.p
          className="mt-4 font-frank text-white/90 text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {siteConfig.name} — {siteConfig.slogan}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-6 w-20 h-px bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#events"
            className="inline-block px-10 py-4 bg-accent hover:bg-accent-hover text-bg-card rounded-full font-heebo font-bold text-lg transition-colors duration-200"
          >
            לתפריט המסעדה
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
