import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RangiloRaas 2026 | Jaipur’s Biggest Luxury Garba & Dandiya Festival',
  description:
    'RangiloRaas 2026 — Where Colors Meet Dance. Experience Jaipur’s most premium Garba & Dandiya festival at Rajwada Palace, Jagatpura on 17–18 October 2026. Live orchestra, celebrity DJ, luxury decor & more. Book your tickets now.',
  keywords: [
    'RangiloRaas',
    'Garba Jaipur',
    'Dandiya 2026',
    'Navratri Jaipur',
    'Rajwada Palace',
    'luxury garba festival',
  ],
  openGraph: {
    title: 'RangiloRaas 2026 | Jaipur’s Biggest Luxury Garba & Dandiya Festival',
    description:
      'Where Colors Meet Dance. Rajwada Palace, Jaipur · 17–18 October 2026.',
    images: ['/images/hero.png'],
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
