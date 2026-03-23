'use client';

import { Phone, Navigation } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/lib/siteConfig';

const dayLabels: Record<string, string> = {
  sunday: 'ראשון',
  monday: 'שני',
  tuesday: 'שלישי',
  wednesday: 'רביעי',
  thursday: 'חמישי',
  friday: 'שישי',
  saturday: 'שבת',
};

const stats = [
  { value: '2008', label: 'מאז' },
  { value: '17+', label: 'שנים' },
  { value: '7', label: 'ימים בשבוע' },
];

export function FindUs() {
  return (
    <section id="findus" className="py-20 md:py-28 bg-bg-elevated">
      <Container>
        <ScrollReveal>
          <SectionHeading title="ימים ושעות פתיחה" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Info side */}
          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="space-y-8">
              {/* Stats */}
              <div className="flex gap-8 justify-center lg:justify-start">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block font-frank text-accent text-4xl md:text-5xl font-bold">
                      {stat.value}
                    </span>
                    <span className="text-text-muted text-sm font-heebo">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hours table */}
              <div>
                <ul className="space-y-2">
                  {Object.entries(siteConfig.hours).map(([day, hours]) => (
                    <li
                      key={day}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="font-heebo text-white">{dayLabels[day]}</span>
                      <span className="font-heebo text-text-muted" dir="ltr">
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg-card rounded-full font-heebo font-semibold transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  חיוג מהיר
                </a>
                <a
                  href={siteConfig.wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg-card rounded-full font-heebo font-semibold transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  נווט עם Waze
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Map side */}
          <ScrollReveal variant="fadeLeft" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-border h-80 lg:h-full min-h-[320px]">
              <iframe
                src={siteConfig.googleMapsEmbed}
                className="w-full h-full"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת המסעדה"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
