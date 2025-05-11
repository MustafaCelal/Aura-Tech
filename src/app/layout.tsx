import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed from Geist
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ // Changed from geistSans and geistMono
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aura Tech - Creative Solutions for Modern Brands', // Ensured Aura Tech
  description: 'Aura Tech offers cutting-edge design, development, and marketing services to elevate your brand.', // Ensured Aura Tech
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}> {/* Changed to use Inter font variable */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}