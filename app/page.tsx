import { Hero } from '@/components/sections/home/Hero';
import { AboutPreview } from '@/components/sections/home/AboutPreview';
import { EventsSection } from '@/components/sections/home/EventsSection';
import { GallerySection } from '@/components/sections/home/GallerySection';
import { FindUs } from '@/components/sections/home/FindUs';
import { ContactForm } from '@/components/sections/home/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <EventsSection />
      <GallerySection />
      <FindUs />
      <ContactForm />
    </>
  );
}
