import { site } from '../config/site'
import { Marca } from './Estructura'

// Estructura común de las páginas legales. El contenido de cada una vive en su propia página.
export function PaginaLegal({ titulo, children }) {
  const l = site.legal
  const responsable = l.razonSocial || l.titular
  const fecha = new Date(l.fechaActualizacionLegal).toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
  return (
    <div className="labs">
      <header className="cabecera">
        <div className="contenedor">
          <Marca href="/" />
        </div>
      </header>
      <main className="legal">
        <h1>{titulo}</h1>
        <p className="meta">
          Última actualización: {fecha}. Responsable: {responsable}{l.ruc ? `, RUC ${l.ruc}` : ''}, {site.ciudad}, {site.pais}. Contacto: <a href={`mailto:${site.correo}`}>{site.correo}</a>.
        </p>
        {children}
      </main>
    </div>
  )
}

export const H2 = ({ children }) => <h2>{children}</h2>
export const P = ({ children }) => <p>{children}</p>
export const UL = ({ children }) => <ul style={{ paddingLeft: 22 }}>{children}</ul>
