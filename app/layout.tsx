import './globals.css';
import type { Metadata } from 'next';
import { Manrope, DotGothic16, Archivo, Archivo_Narrow, Source_Serif_4 } from 'next/font/google';
import portfolioData from '@/data/portfolio.json';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dotgothic16',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${portfolioData.name} - ${portfolioData.role} Portfolio`,
  description: portfolioData.tagline,
  keywords: `${portfolioData.role}, portfolio, web development, mobile development, full-stack, Mihir Sharma`,
  openGraph: {
    type: 'website',
    title: `${portfolioData.name} - ${portfolioData.role} Portfolio`,
    description: portfolioData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Manrope:wght@400;600;700&family=Archivo:wght@400;800&family=Archivo+Narrow:wght@500&family=Source+Serif+4:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${manrope.variable} ${dotGothic16.variable} ${archivo.variable} ${archivoNarrow.variable} ${sourceSerif4.variable}`}
      >
        {children}
      </body>
    </html>
  );
}