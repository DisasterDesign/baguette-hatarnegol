'use client';

import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const tags = [
  'אירועים קטנים עד 20 איש',
  'אירועי חברה',
  'אווירה של מסעדת שף',
];

export function EventsSection() {
  return (
    <section id="events" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background placeholder — replace with real food image */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card via-bg to-bg-card" />
      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="האירועים שלנו"
            subtitle="חגיגות, אירועי חברה ומפגשים — הכל במקום אחד"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            באגט התרנגול מציעה חלל ייחודי לאירועים פרטיים ועסקיים.
            תפריט מותאם אישית, שירות מקצועי ואווירה מושלמת לכל אירוע.
          </p>
        </ScrollReveal>

        {/* Tags */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-accent text-accent px-5 py-2 rounded-full font-heebo text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-accent hover:bg-accent-hover text-bg-card rounded-full font-heebo font-bold text-lg transition-colors duration-200"
            >
              להזמנת אירועים
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
