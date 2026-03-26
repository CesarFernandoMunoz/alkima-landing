// sitemap.js — Next.js App Router
// Google lo lee en https://alkima.app/sitemap.xml
// Verifica en: https://search.google.com/search-console

export default function sitemap() {
  const baseUrl = 'https://alkima.app'

  // Fechas de última modificación reales (actualiza cuando edites cada página)
  const now     = new Date().toISOString()
  const blog1   = '2025-01-15T00:00:00.000Z' // regla-50-30-20
  const blog2   = '2025-01-20T00:00:00.000Z' // fondo-emergencia
  const blog3   = '2025-01-25T00:00:00.000Z' // deudas-bola-nieve

  return [
    // ── Páginas principales ──────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Artículos del blog ───────────────────────────────────────────
    {
      url: `${baseUrl}/blog/regla-50-30-20`,
      lastModified: blog1,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/fondo-emergencia`,
      lastModified: blog2,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/deudas-bola-nieve`,
      lastModified: blog3,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Agrega aquí nuevos artículos cuando los publiques ────────────
    // {
    //   url: `${baseUrl}/blog/tu-nuevo-articulo`,
    //   lastModified: 'YYYY-MM-DDTHH:mm:ss.000Z',
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
