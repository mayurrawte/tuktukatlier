import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ConciergeButton } from '@/components/concierge-button';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Tuktuk Atelier | The Art of Little Things',
  description:
    'Premium handmade Lippan art—wall panels, planters, and home decor. Limited editions and custom commissions for luxury interiors.',
  keywords: [
    'Lippan art',
    'handmade decor',
    'luxury wall art',
    'decorative planters',
    'artisan home decor',
    'bespoke commissions',
    'artisan craft',
    'mirror work',
    'premium home decor',
  ],
  authors: [{ name: 'Tuktuk Atelier' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tuktukatelier.com',
    title: 'Tuktuk Atelier | The Art of Little Things',
    description:
      'Premium handmade Lippan art—wall panels, planters, and home decor for luxury interiors.',
    siteName: 'Tuktuk Atelier',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Tuktuk Atelier - Handcrafted Lippan Art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuktuk Atelier | The Art of Little Things',
    description:
      'Premium handmade Lippan art, wall panels, and bespoke decor for luxury interiors.',
    images: [
      'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=1200&q=80',
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ConciergeButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
