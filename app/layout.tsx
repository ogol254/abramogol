import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://ogol254.github.io/'),
  title: {
    default: 'Abraham Ogol — Engineer, AI & Technology Leader',
    template: '%s — Abraham Ogol',
  },
  description:
    'Hands-on engineer and technology executive who designs, codes, deploys and supports complex enterprise and AI systems while leading the teams behind them.',
  openGraph: {
    title: 'Abraham Ogol — Engineer, AI & Technology Leader',
    description: 'I do not just lead technology. I build it.',
    type: 'website',
    url: 'https://ogol254.github.io/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abraham Ogol — Engineer, AI & Technology Leader',
    description: 'I do not just lead technology. I build it.',
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
