import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

function WebagencyLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary">
      <rect width="32" height="32" rx="8" fill="currentColor"/>
      <path d="M9 23L12.5 9H14.5L18 23L16.5 23L15.25 18.5H11.75L10.5 23H9ZM12.25 17H14.75L13.5 11.5L12.25 17Z" fill="hsl(var(--background))"/>
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <WebagencyLogo />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Webagency
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="md">
            <Link href="#order">Order Now</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                <WebagencyLogo />
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Webagency
                </span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="md" className="w-full mt-2">
                <Link href="#order">Order Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
