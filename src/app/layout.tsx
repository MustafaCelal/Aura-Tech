
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Aura Agency - Creative Solutions for Modern Brands',
  description: 'Aura Agency offers cutting-edge design, development, and marketing services to elevate your brand.',
  // icons: null, // Explicitly disable automatic icon handling - Removed this line
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] dark:from-[hsl(var(--gradient-start-dark))] dark:to-[hsl(var(--gradient-end-dark))] text-foreground`}> 
        {children}
        <Toaster />
      </body>
    </html>
  );
}

