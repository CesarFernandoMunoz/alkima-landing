// Estructura compartida de Alkima Labs: isotipo Nexo, marca, cabecera, pie y flecha (manual de marca 1.2). La usan la portada,
// Alkima Finanzas y el blog, para que toda la web se vea igual.
import { site } from '../config/site'

export const Flecha = () => <span className="flecha" aria-hidden="true">→</span>

/** Isotipo "Nexo": dos piezas (criterio y señal) separadas por un corte diagonal. `negativo` pinta la pieza oscura en blanco. */
export function Isotipo({ negativo = false, tamano = 26 }) {
  const pieza = negativo ? '#ffffff' : 'currentColor'
  const id = `${negativo ? 'n' : 'p'}${tamano}`
  return (
    <svg className="isotipo" width={tamano} height={Math.round(tamano * 100 / 120)} viewBox="0 0 120 100" aria-hidden="true" focusable="false">
      <defs><clipPath id={`corte-${id}`}><polygon points="-56.8,-114.4 195.2,221.6 435.2,41.6 183.2,-294.4" /></clipPath></defs>
      <rect x="50" y="6" width="62" height="48" rx="12" fill="#c8f449" transform="rotate(-12 81 30)" clipPath={`url(#corte-${id})`} />
      <polygon points="40,38 76,86 8,86" fill={pieza} stroke={pieza} strokeWidth="14" strokeLinejoin="round" />
    </svg>
  )
}

export function Marca({ href = '/', producto = 'labs', negativo = false }) {
  return (
    <a href={href} className="marca" aria-label={`Alkima ${producto}`}>
      <Isotipo negativo={negativo} /><b>alkima</b><span className="sufijo">{producto.toLowerCase()}</span>
    </a>
  )
}

/** Cabecera negra. `enlaces`: [[texto, href]]; `accion`: [texto, href] para el botón lima. */
export function Cabecera({ producto = 'Labs', hrefMarca = '/', enlaces = [], accion }) {
  return (
    <header className="cabecera">
      <div className="contenedor">
        <Marca href={hrefMarca} producto={producto} />
        <nav className="nav" aria-label="Principal">
          {enlaces.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
          {accion && <a href={accion[1]} className="boton">{accion[0]}</a>}
        </nav>
      </div>
    </header>
  )
}

export function Pie() {
  const l = site.legal
  const f = site.finanzas
  return (
    <footer className="pie">
      <div className="contenedor">
        <div>
          <div className="marca"><Isotipo /><b>alkima</b><span className="sufijo">labs</span></div>
          <div className="guia">Nosotros somos la guía.</div>
          {site.ciudad}, {site.pais}<br />
          {l.razonSocial || `Responsable: ${l.titular}`}{l.ruc ? ` · RUC ${l.ruc}` : ''}<br />
          <a href={`mailto:${site.correo}`}>{site.correo}</a>
        </div>
        <div>
          <div className="titulo">Productos</div>
          {site.productos.filter(p => p.enlace && p.id !== 'finanzas').map(p => <a key={p.id} href={p.enlace}>{p.nombre}</a>)}
          <a href={f.enlace}>{f.nombre}</a>
          <a href="/blog/regla-50-30-20">Blog de finanzas</a>
        </div>
        <div>
          <div className="titulo">Legal</div>
          <a href="/terminos">Términos de servicio</a>
          <a href="/privacidad">Política de privacidad</a>
          <a href="/cookies">Política de cookies</a>
        </div>
        <div className="final">© 2026 {site.nombre}. Desarrollado con herramientas de IA como Claude, con revisión y pruebas antes de cada entrega.</div>
      </div>
    </footer>
  )
}
