'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { Container } from '@/components/ui/Container';
import { galleryImages } from '@/lib/siteConfig';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative aspect-square rounded-xl overflow-hidden bg-bg-card border border-border cursor-pointer group shadow-hard-lg"
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              whileHover={{ scale: 1.02, boxShadow: '20px 22px 4px rgba(0, 0, 0, 0.6)', transition: { duration: 0.2 } }}
            >
              {/* TODO: Replace with real Image component when images are available */}
              <div className="absolute inset-0 flex items-center justify-center text-text-subtle font-heebo text-sm">
                {img.alt}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            container: { backgroundColor: 'rgba(10, 10, 10, 0.98)' },
          }}
        />
      </Container>
    </section>
  );
}
