'use client'
// Botón flotante para escribir por WhatsApp. No carga scripts de terceros ni usa cookies: es un enlace a wa.me
// que abre la conversación con un mensaje inicial según la página. Número y textos viven en config/site.js.
import { usePathname } from 'next/navigation'
import { site, enlaceWhatsApp } from '../config/site'

function mensajePara(ruta) {
  const m = site.whatsapp.mensajes
  if (ruta.startsWith('/productos/')) {
    const id = ruta.split('/')[2]
    const p = site.productos.find(x => x.id === id)
    return p ? m.producto.replace('{producto}', p.nombre) : m.inicio
  }
  if (ruta.startsWith('/finanzas')) return m.finanzas
  if (ruta.startsWith('/blog')) return m.blog
  return m.inicio
}

export function BotonWhatsApp() {
  const ruta = usePathname() || '/'
  const { numero, ocultarEn } = site.whatsapp
  if (!numero || ocultarEn.some(r => ruta === r || ruta.startsWith(`${r}/`))) return null
  const href = enlaceWhatsApp(mensajePara(ruta))
  return (
    <a className="boton-whatsapp" href={href} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.1.56 4.15 1.63 5.95L4 29l8.37-1.6a12.2 12.2 0 0 0 3.67.56C22.67 27.96 28 22.63 28 16.06 28 9.48 22.67 3 16.04 3Zm0 22.8c-1.18 0-2.34-.2-3.43-.6l-.49-.18-4.97.95.97-4.78-.2-.5a9.6 9.6 0 0 1-1.32-4.79c0-5.4 4.42-9.74 9.44-9.74 5.3 0 9.6 4.4 9.6 9.9 0 5.4-4.3 9.74-9.6 9.74Zm5.27-7.27c-.29-.14-1.71-.84-1.98-.93-.27-.1-.46-.15-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.5.14-.18.19-.3.29-.5.1-.19.05-.36-.03-.5-.07-.15-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.77 1.17 2.96.15.2 2.03 3.1 4.92 4.34.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34Z"/>
      </svg>
      <span className="boton-whatsapp-texto">Escríbenos</span>
    </a>
  )
}
