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
  keywords: [
    'Abraham Ogol',
    'technology leader',
    'CTO',
    'AI engineering',
    'enterprise architecture',
    'product engineering',
    'digital transformation',
    'Africa technology',
  ],
  authors: [{ name: 'Abraham Ogol', url: 'https://www.linkedin.com/in/abramogol/' }],
  creator: 'Abraham Ogol',
  publisher: 'Abraham Ogol',
  alternates: { canonical: 'https://ogol254.github.io/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: ['/favicon.svg'],
  },
  manifest: '/site.webmanifest',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abraham Ogol',
              url: 'https://ogol254.github.io/',
              image: 'https://ogol254.github.io/assets/headshots/abraham-ogol.png',
              jobTitle: 'Engineer, AI & Technology Leader',
              description:
                'Hands-on engineer and technology leader who designs, codes, deploys and supports enterprise and AI systems.',
              email: 'mailto:abramogol@gmail.com',
              sameAs: ['https://www.linkedin.com/in/abramogol/', 'https://github.com/ogol254'],
              knowsAbout: [
                'Enterprise architecture',
                'Artificial intelligence',
                'Product engineering',
                'Cloud platforms',
                'IoT and connectivity',
                'Digital transformation',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
