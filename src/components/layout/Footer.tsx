import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

function WebagencyLogo() {
  // Re-using the logo from Header.tsx for consistency
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary">
      <rect width="32" height="32" rx="8" fill="currentColor"/>
      <path d="M9 23L12.5 9H14.5L18 23L16.5 23L15.25 18.5H11.75L10.5 23H9ZM12.25 17H14.75L13.5 11.5L12.25 17Z" fill="hsl(var(--background))"/>
    </svg>
  );
}

const navigationLinks = {
  navigation: [
    { label: 'Portfolio', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  aboutUs: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Address */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <WebagencyLogo />
              <span className="text-xl font-bold tracking-tight">
                Aura Tech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Bahnhofstrasse 1<br />
              8001 Zürich, Switzerland
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">About Us</h3>
            <ul className="space-y-2">
              {navigationLinks.aboutUs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+41441234567" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  +41 44 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:hello@auratech.agency" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  hello@auratech.agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Aura Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
