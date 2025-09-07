import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Perkify - Loyalty & Rewards Tracker',
  description: 'Mobile-first loyalty and rewards tracking platform for businesses and customers. Progressive Web App with Android support.',
  keywords: ['loyalty program', 'rewards', 'mobile app', 'PWA', 'business', 'customer engagement'],
  authors: [{ name: 'Perkify Team' }],
  creator: 'Perkify',
  publisher: 'Perkify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://perkify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Perkify - Loyalty & Rewards Tracker',
    description: 'Mobile-first loyalty and rewards tracking platform for businesses and customers.',
    url: 'https://perkify.app',
    siteName: 'Perkify',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perkify - Loyalty & Rewards Tracker',
    description: 'Mobile-first loyalty and rewards tracking platform for businesses and customers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider storageKey="perkify-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
