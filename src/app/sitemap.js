export default function sitemap() {
  const baseUrl = 'https://alkima.app'
  const now = new Date().toISOString()

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog/regla-50-30-20`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/fondo-emergencia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/deudas-bola-nieve`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
