import { site } from '../../config/site'

const URL_FINANZAS = `${site.url}/finanzas`

export const metadata = {
  title: 'Finanzas personales para Latinoamérica',
  description:
    'Alkima Finanzas es una app gratuita de finanzas personales para Ecuador y Latinoamérica: ingresos, gastos, inversiones, metas de ahorro, cuentas por cobrar y flujo de caja en un solo lugar.',
  alternates: { canonical: URL_FINANZAS },
  openGraph: {
    title: 'Alkima Finanzas — Finanzas personales para Latinoamérica',
    description: 'Controla ingresos, gastos, inversiones, metas y flujo de caja en un solo lugar.',
    url: URL_FINANZAS,
    siteName: site.nombre,
    locale: site.locale,
    type: 'website',
  },
}

// Datos estructurados del producto. Sin calificaciones ni número de reseñas: no hay reseñas verificables.
const schemaProducto = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${URL_FINANZAS}#app`,
      name: 'Alkima Finanzas',
      url: URL_FINANZAS,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'App de finanzas personales para controlar ingresos, gastos, inversiones, cuentas por cobrar y metas de ahorro.',
      publisher: { '@id': `${site.url}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Alkima Finanzas es gratis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Hoy todas las funciones están disponibles sin costo y sin tarjeta de crédito.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usarla en el celular?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Es una aplicación web que se puede instalar desde el navegador del celular, sin tienda de apps.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Se conecta automáticamente a mi banco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No por ahora. Los movimientos se registran manualmente; la conexión automática está en la hoja de ruta.',
          },
        },
      ],
    },
  ],
}

export default function FinanzasLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProducto) }} />
      {children}
    </>
  )
}
