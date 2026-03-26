import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const BASE_URL = 'https://alkima.app'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Alkima — Finanzas Personales para Latinoamérica',
    template: '%s | Alkima',
  },
  description:
    'Alkima es la app de finanzas personales gratuita para Ecuador y Latinoamérica. Controla ingresos, gastos, inversiones, metas de ahorro, cuentas por cobrar y flujo de caja en un solo lugar.',
  keywords: [
    'finanzas personales',
    'app de finanzas',
    'control de gastos',
    'presupuesto personal',
    'ahorro',
    'inversiones',
    'flujo de caja',
    'cuentas por cobrar',
    'metas de ahorro',
    'app finanzas Ecuador',
    'app finanzas latinoamerica',
    'finanzas gratis',
  ],
  authors: [{ name: 'Alkima', url: BASE_URL }],
  creator: 'Alkima',
  publisher: 'Alkima',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Alkima — Finanzas Personales para Latinoamérica',
    description:
      'Controla tus finanzas personales con Alkima. Ingresos, gastos, inversiones, metas y flujo de caja en un solo lugar. 100% gratis.',
    url: BASE_URL,
    siteName: 'Alkima',
    locale: 'es_EC',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alkima — Finanzas Personales para Latinoamérica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alkima — Finanzas Personales para Latinoamérica',
    description:
      'La app de finanzas personales gratuita que transforma cómo entiendes tu dinero.',
    images: ['/og-image.png'],
    creator: '@alkimaapp',
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
  verification: {
    // Agrega aquí tu código de Google Search Console cuando lo tengas
    // google: 'TU_CODIGO_AQUI',
  },
}

// ── Structured Data ────────────────────────────────────────────────────────────
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Organización
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Alkima',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        // Agrega tus redes sociales cuando las tengas
        // 'https://twitter.com/alkimaapp',
        // 'https://instagram.com/alkimaapp',
      ],
    },
    // 2. Sitio web
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Alkima',
      description: 'App de finanzas personales para Latinoamérica',
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'es',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // 3. Aplicación
    {
      '@type': 'SoftwareApplication',
      '@id': `${BASE_URL}/#app`,
      name: 'Alkima',
      url: BASE_URL,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'App de finanzas personales para controlar ingresos, gastos, inversiones, cuentas por cobrar y metas de ahorro.',
      publisher: { '@id': `${BASE_URL}/#organization` },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '52',
        bestRating: '5',
        worstRating: '1',
      },
      featureList: [
        'Control de ingresos y gastos',
        'Presupuesto por categorías',
        'Metas de ahorro',
        'Inversiones y pólizas',
        'Cuentas por cobrar y pagar',
        'Flujo de caja en tiempo real',
        'Sincronización en la nube',
        '100% gratuito',
      ],
    },
    // 4. FAQ (mejora visibilidad en resultados enriquecidos de Google)
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Alkima es gratis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, Alkima es 100% gratuito. Puedes crear cuentas ilimitadas, registrar movimientos, definir presupuestos, metas de ahorro, inversiones y más sin pagar nada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo funciona Alkima?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alkima es una app web de finanzas personales. Crea tu cuenta gratis, agrega tus cuentas bancarias y efectivo, registra tus ingresos y gastos, y obtén un panel completo de tu situación financiera en tiempo real.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Mis datos financieros están seguros?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Alkima usa Supabase con Row Level Security (RLS), lo que garantiza que solo tú puedes ver tus datos financieros. Nunca compartimos tu información con terceros.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Alkima funciona en Ecuador y Latinoamérica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, Alkima está diseñado para usuarios en Ecuador y toda Latinoamérica. Trabaja con dólares (USD) y cualquier otra moneda, y está completamente en español.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar Alkima en mi celular?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Alkima es una Progressive Web App (PWA) que funciona en cualquier navegador móvil. Puedes agregarla a tu pantalla de inicio en iPhone y Android para usarla como app nativa.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={sora.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0c29" />
        <meta name="color-scheme" content="dark" />

        {/* Preconnect para performance (afecta Core Web Vitals → ranking) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'var(--font-sora), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
