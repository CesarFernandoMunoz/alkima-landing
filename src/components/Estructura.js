// Estructura compartida de Alkima Labs: marca con anillo, cabecera, pie y flecha. La usan la portada,
// Alkima Finanzas y el blog, para que toda la web se vea igual.
import { site } from '../config/site'

export const Flecha = () => <span className="flecha" aria-hidden="true">→</span>

export function Marca({ href = '/', producto = 'Labs' }) {
  return (
    <a href={href} className="marca" aria-label={`Alkima ${producto}`}>
      <span className="anillo" aria-hidden="true" /><b>Alkima</b>{producto}
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
          <div className="marca"><span className="anillo" aria-hidden="true" /><b>Alkima</b>Labs</div>
          {site.ciudad}, {site.pais}<br />
          {l.razonSocial || `Responsable: ${l.titular}`}{l.ruc ? ` · RUC ${l.ruc}` : ''}<br />
          <a href={`mailto:${site.correo}`}>{site.correo}</a>
        </div>
        <div>
          <div className="titulo">Productos</div>
          {site.productos.filter(p => p.enlace).map(p => <a key={p.id} href={p.enlace}>{p.nombre}</a>)}
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
