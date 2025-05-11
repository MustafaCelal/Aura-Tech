export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Aura Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
