'use client';

import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactForm() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-card">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="צרו קשר"
            subtitle="כל מה שתרצו לשאול או לדעת"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            className="max-w-xl mx-auto space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white font-heebo placeholder:text-text-subtle transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="טלפון"
                dir="ltr"
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white font-heebo placeholder:text-text-subtle text-right transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="כל מה שתרצו לשאול או לדעת"
                rows={4}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white font-heebo placeholder:text-text-subtle resize-none transition-colors"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-accent hover:bg-accent-hover text-bg-card rounded-full font-heebo font-bold text-lg transition-colors duration-200"
              >
                שלח
              </button>
            </div>
          </form>
        </ScrollReveal>
      </Container>
    </section>
  );
}
