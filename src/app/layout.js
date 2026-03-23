import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata = {
  title: 'Alkima — Tu dinero, bajo control',
  description: 'Alkima es la app de finanzas personales que te ayuda a controlar tus ingresos, gastos, inversiones, metas de ahorro y flujo de caja en un solo lugar. Empieza gratis.',
  keywords: ['finanzas personales', 'control de gastos', 'ahorro', 'presupuesto', 'inversiones', 'flujo de caja', 'app finanzas', 'Ecuador', 'latinoamerica'],
  authors: [{ name: 'Alkima' }],
  creator: 'Alkima',
  publisher: 'Alkima',
  metadataBase: new URL('https://alkima.app'),
  alternates: { canonical: 'https://alkima.app' },
  openGraph: {
    title: 'Alkima — Tu dinero, bajo control',
    description: 'Controla tus finanzas personales con Alkima. Ingresos, gastos, inversiones, metas y flujo de caja en un solo lugar.',
    url: 'https://alkima.app',
    siteName: 'Alkima',
    locale: 'es_EC',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Alkima — Finanzas Personales' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alkima — Tu dinero, bajo control',
    description: 'La app de finanzas personales que transforma cómo entiendes tu dinero.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={sora.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#0f0c29" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Alkima",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "App de finanzas personales para controlar ingresos, gastos, inversiones y metas de ahorro.",
              "url": "https://alkima.app",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "47"
              }
            })
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'var(--font-sora), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
