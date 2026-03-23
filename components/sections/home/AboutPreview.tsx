'use client';

import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg-elevated">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image placeholder — left in RTL */}
          <ScrollReveal variant="fadeLeft" delay={0.1}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-bg-card to-bg border border-border">
              <div className="w-full h-full flex items-center justify-center text-text-subtle font-heebo text-sm">
                תמונת המסעדה
              </div>
            </div>
          </ScrollReveal>

          {/* Text — right in RTL */}
          <ScrollReveal variant="fadeRight" delay={0.2}>
            <SectionHeading
              title="על המסעדה"
              align="right"
            />
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              באגט התרנגול הוקמה מתוך אהבה אמיתית לאוכל טוב ואיכותי. אנחנו
              מאמינים שבאגט מושלם מתחיל בלחם טרי שנאפה כל בוקר, ממשיך בחומרי
              גלם איכותיים, ומסתיים ברוטבים ביתיים שמכינים אצלנו במטבח.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              כל מנה אצלנו מוכנת ברגע ההזמנה, עם תשומת לב לכל פרט — כי אנחנו
              יודעים שאתם מגיעים אלינו בשביל חוויה, לא סתם ארוחה.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
