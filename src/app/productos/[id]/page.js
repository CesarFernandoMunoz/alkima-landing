import { notFound } from 'next/navigation'
import { site, etiquetasEstado, enlaceWhatsApp } from '../../../config/site'
import { detalles } from '../../../config/productos-detalle'
import { Cabecera, Pie, Flecha } from '../../../components/Estructura'
import { existsSync } from 'fs'
import { join } from 'path'

const ids = Object.keys(detalles)

export function generateStaticParams() {
  return ids.map(id => ({ id }))
}

// En Next 15 los parámetros llegan como promesa.
export async function generateMetadata(props) {
  const params = await props.params
  const p = site.productos.find(x => x.id === params.id)
  const d = detalles[params.id]
  if (!p || !d) return {}
  // Descripción corta para buscadores (Bing marca error por encima de 160 caracteres); el resumen completo queda en la página.
  const descripcion = d.resumen.length <= 155 ? d.resumen : d.resumen.slice(0, 152).replace(/\s+\S*$/, '') + '…'
  return {
    title: `${p.nombre} · ${d.titular}`,
    description: descripcion,
    alternates: { canonical: `${site.url}/productos/${params.id}` },
    openGraph: { title: p.nombre, description: descripcion, url: `${site.url}/productos/${params.id}`, siteName: site.nombre, locale: site.locale, type: 'website' },
  }
}

// Solo se muestran las pantallas que existen en public/: así la página no enseña imágenes rotas mientras se capturan.
const pantallasDisponibles = lista => lista.filter(s => existsSync(join(process.cwd(), 'public', s.src)))

export default async function Producto(props) {
  const params = await props.params
  const p = site.productos.find(x => x.id === params.id)
  const d = detalles[params.id]
  if (!p || !d) notFound()
  const contacto = enlaceWhatsApp(site.whatsapp.mensajes.producto.replace('{producto}', p.nombre), `Consulta sobre ${p.nombre}`)
  const correo = `mailto:${site.correo}?subject=${encodeURIComponent(`Consulta sobre ${p.nombre}`)}`
  const externo = contacto.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  const pantallas = pantallasDisponibles(d.pantallas)

  return (
    <div className="labs">
      <Cabecera producto="Labs" hrefMarca="/" enlaces={[['Productos', '/#productos'], ['Por qué nosotros', '/#por-que'], ['Cómo trabajamos', '/#como-trabajamos']]} accion={['Hablemos', contacto]} />

      <main>
        <section className="hero detalle-hero">
          <div className="contenedor">
            <a href="/#productos" className="volver"><span className="flecha-volver" aria-hidden="true">←</span> Volver a productos</a>
            <span className={`estado ${p.estado}`}>{etiquetasEstado[p.estado]}{p.desde ? ` · ${p.desde.toLowerCase()}` : ''}</span>
            <h1>{p.nombre}</h1>
            <p className="pregunta-grande">{p.pregunta}</p>
            <p>{d.resumen}</p>
            <div className="acciones">
              {d.enlaceVivo && <a href={d.enlaceVivo} className="btn btn-lima">Abrir {p.nombre} <Flecha /></a>}
              <a href={contacto} {...externo} className="btn btn-negro">Quiero algo así para mi empresa <Flecha /></a>
            </div>
          </div>
        </section>

        {pantallas.length > 0 && (
          <section className="gris">
            <div className="contenedor">
              <h2><span className="ligero">Así se ve.</span>Pantallas reales, con datos de prueba.</h2>
              <div className="galeria">
                {pantallas.map(s => (
                  <figure key={s.src} className={`pantalla${s.movil ? ' movil' : ''}`}>
                    <img src={s.src} alt={s.pie} loading="lazy" />
                    <figcaption>{s.pie}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="blanca">
          <div className="contenedor">
            <h2><span className="ligero">Qué hace.</span>{d.titular}</h2>
            <p className="sub">Para quién: {d.paraQuien}</p>
            <div className="modulos">
              {d.modulos.map(([t, x]) => (
                <article key={t} className="modulo"><h3>{t}</h3><p>{x}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="gris">
          <div className="contenedor dos-columnas">
            <div>
              <h2><span className="ligero">Cómo funciona.</span>Cuatro pasos.</h2>
              <ol className="pasos">
                {d.flujo.map((f, i) => <li key={f}><span className="numero" aria-hidden="true">{i + 1}</span>{f}</li>)}
              </ol>
            </div>
            <div>
              <h2><span className="ligero">Cómo se entrega.</span>Listo para operar.</h2>
              <ul className="entrega">
                {d.entrega.map(e => <li key={e}>{e}</li>)}
              </ul>
              {p.cifras && (
                <div className="cifras">
                  {p.cifras.map(([v, t]) => <div key={t}><b>{v}</b><span>{t}</span></div>)}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="contacto">
          <div className="contenedor">
            <h2>¿Su operación tiene esta misma pregunta?</h2>
            <p>Cuéntenos cómo lo resuelve hoy. Le respondemos con una propuesta clara: qué se puede automatizar, cuánto tomaría y qué ahorra.</p>
            <a href={contacto} {...externo} className="btn btn-lima">Escríbanos por WhatsApp <Flecha /></a>
            <a href={correo} style={{ display: 'block', marginTop: 18, color: 'rgba(255,255,255,.72)', fontSize: 15 }}>o por correo: {site.correo}</a>
          </div>
        </section>
      </main>

      <Pie />
    </div>
  )
}
