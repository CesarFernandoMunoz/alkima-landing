import { Jost, Source_Sans_3, Sora } from 'next/font/google'
import { site } from '../config/site'
import './globals.css'

// Jost (geométrica, al estilo Avant Garde) para titulares; Source Sans para texto; Sora se conserva para /finanzas.
const display = Jost({ subsets: ['latin'], weight: ['300', '500', '600'], variable: '--font-display', display: 'swap' })
const texto = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-texto', display: 'swap' })
const sora = Sora({ subsets: ['latin'], weight: ['400', '700', '800'], variable: '--font-sora', display: 'swap' })

const BASE_URL = site.url
const TITULO = `${site.nombre} — Software de operaciones y finanzas para empresas`
const DESCRIPCION =
  'Alkima Labs diseña y construye software de operaciones y finanzas para empresas de Ecuador: entregas y rutas, servicio técnico, cobranzas y análisis financiero.'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITULO,
    template: `%s | ${site.marca}`,
  },
  description: DESCRIPCION,
  authors: [{ name: site.nombre, url: BASE_URL }],
  creator: site.nombre,
  publisher: site.nombre,
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: BASE_URL,
    siteName: site.nombre,
    locale: site.locale,
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.nombre }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// Datos estructurados de la empresa. Solo hechos verificables: sin calificaciones ni reseñas.
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: site.nombre,
      url: BASE_URL,
      email: site.correo,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon-512.png`, width: 512, height: 512 },
      address: { '@type': 'PostalAddress', addressLocality: site.ciudad, addressCountry: 'EC' },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: site.nombre,
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'es',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${texto.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/isotipo.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0c29" />
        <meta name="color-scheme" content="dark" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
