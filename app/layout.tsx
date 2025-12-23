import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Sayel Elektrik | İstanbul Anadolu Yakası Elektrikçi',
    template: '%s | Sayel Elektrik',
  },
  description: 'İstanbul Anadolu Yakası ve Kocaeli bölgesinde 7/24 elektrik tesisatı, arıza, sigorta, aydınlatma hizmetleri. Ataşehir, Kadıköy, Ümraniye, Pendik, Gebze ve çevresinde profesyonel elektrikçi.',
  keywords: [
    'elektrikçi',
    'istanbul elektrikçi',
    'anadolu yakası elektrikçi',
    'kadıköy elektrikçi',
    'ümraniye elektrikçi',
    'pendik elektrikçi',
    'gebze elektrikçi',
    'elektrik tesisatı',
    'elektrik arıza',
    '7/24 elektrikçi',
  ],
  authors: [{ name: 'Sayel Elektrik' }],
  creator: 'Sayel Elektrik',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://sayelelektrik.com',
    siteName: 'Sayel Elektrik',
    title: 'Sayel Elektrik | İstanbul Anadolu Yakası Elektrikçi',
    description: 'İstanbul Anadolu Yakası ve Kocaeli bölgesinde 7/24 profesyonel elektrikçi hizmeti.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayel Elektrik',
    description: 'İstanbul Anadolu Yakası ve Kocaeli bölgesinde 7/24 profesyonel elektrikçi hizmeti.',
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
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
