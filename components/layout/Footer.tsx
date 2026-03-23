'use client';

import { Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="text-center">
          <span className="font-playfair text-accent text-3xl font-bold tracking-wide">
            {siteConfig.nameEn}
          </span>
          <p className="mt-2 text-text-muted text-sm font-heebo">
            {siteConfig.address.full}
          </p>
        </div>

        {/* Social */}
        <div className="flex justify-center mt-6">
          {siteConfig.social.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-accent text-text-muted hover:text-accent transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mt-8">
          {siteConfig.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-text-muted hover:text-accent transition-colors text-sm font-heebo"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-center items-center gap-4 text-text-subtle text-xs">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. כל הזכויות שמורות.
          </p>
          <span className="hidden sm:inline">|</span>
          <div className="flex gap-4">
            <span>מדיניות פרטיות</span>
            <span>הצהרת נגישות</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
