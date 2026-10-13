import { site } from '../config/site'

// Google lo lee en /sitemap.xml. Agregar aquí cada página nueva.
export default function sitemap() {
  const base = site.url
  const ahora = new Date().toISOString()
  const legal = new Date(site.legal.fechaActualizacionLegal).toISOString()

  const paginas = [
    { ruta: '', frecuencia: 'monthly', prioridad: 1.0, fecha: ahora },
    { ruta: '/finanzas', frecuencia: 'weekly', prioridad: 0.9, fecha: ahora },
    { ruta: '/blog/regla-50-30-20', frecuencia: 'monthly', prioridad: 0.8, fecha: '2025-01-15T00:00:00.000Z' },
    { ruta: '/blog/fondo-emergencia', frecuencia: 'monthly', prioridad: 0.8, fecha: '2025-01-20T00:00:00.000Z' },
    { ruta: '/blog/deudas-bola-nieve', frecuencia: 'monthly', prioridad: 0.8, fecha: '2025-01-25T00:00:00.000Z' },
    { ruta: '/terminos', frecuencia: 'yearly', prioridad: 0.3, fecha: legal },
    { ruta: '/privacidad', frecuencia: 'yearly', prioridad: 0.3, fecha: legal },
    { ruta: '/cookies', frecuencia: 'yearly', prioridad: 0.3, fecha: legal },
  ]

  return paginas.map(p => ({
    url: `${base}${p.ruta}`,
    lastModified: p.fecha,
    changeFrequency: p.frecuencia,
    priority: p.prioridad,
  }))
}
