import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/data/siteConfig';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Biloti | Commercial Cleaning, Pressure Washing & Property Services NZ',
    template: '%s | Biloti',
  },
  description: 'Biloti provides professional commercial cleaning, pressure washing, property maintenance and building services across New Zealand. Care Beyond Buildings.',
  keywords: [
    'Biloti',
    'Commercial Cleaning NZ',
    'Pressure Washing NZ',
    'Property Maintenance New Zealand',
    'Building Services',
    'Care Beyond Buildings',
    'Water Blasting NZ',
    'Pest Control NZ',
    'Garden Maintenance NZ',
  ],
  authors: [{ name: 'Biloti' }],
  creator: 'Biloti',
  publisher: 'Biloti',
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: siteConfig.url,
    title: 'Biloti | Commercial Cleaning, Pressure Washing & Property Services NZ',
    description: 'Biloti provides professional commercial cleaning, pressure washing, property maintenance and building services across New Zealand. Care Beyond Buildings.',
    siteName: 'Biloti',
    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: 'Biloti | Commercial Cleaning, Pressure Washing & Property Services NZ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biloti | Commercial Cleaning, Pressure Washing & Property Services NZ',
    description: 'Biloti provides professional commercial cleaning, pressure washing, property maintenance and building services across New Zealand. Care Beyond Buildings.',
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-[#0F172A] antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
