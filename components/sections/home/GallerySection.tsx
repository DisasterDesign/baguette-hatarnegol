'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryImages } from '@/lib/siteConfig';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="הגלריה שלנו"
            subtitle="רגעים מהמטבח ומהמסעדה"
          />
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative aspect-square rounded-lg overflow-hidden bg-bg-card border border-border cursor-pointer group"
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-text-subtle font-heebo text-xs">
                {img.alt}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Expand className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={galleryImages.map((img) => ({
            src: img.src,
            alt: img.alt,
          }))}
          plugins={[Zoom]}
          styles={{
            container: { backgroundColor: 'rgba(30, 37, 22, 0.98)' },
          }}
        />
      </Container>
    </section>
  );
}
