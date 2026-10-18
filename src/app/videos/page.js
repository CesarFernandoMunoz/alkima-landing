import { site } from '../../config/site'
import { detalles } from '../../config/productos-detalle'
import { Cabecera, Pie, Flecha } from '../../components/Estructura'

export const metadata = {
  title: 'Videos demo de los productos',
  description: 'Vea en un minuto cómo funciona cada producto de Alkima Labs: Hoja Viva, Taller, CRM comercial y de cobranzas y Radar Empresarial.',
  alternates: { canonical: `${site.url}/videos` },
}

// Un video por producto, en el orden en que aparecen en el sitio. Con datos de prueba y narración en español.
export default function Videos() {
  const contacto = `mailto:${site.correo}?subject=${encodeURIComponent('Consulta sobre los productos')}`
  const lista = site.productos.filter(p => detalles[p.id]?.video)
  return (
    <div className="labs">
      <Cabecera producto="Labs" hrefMarca="/" enlaces={[['Productos', '/#productos'], ['Por qué nosotros', '/#por-que'], ['Cómo trabajamos', '/#como-trabajamos']]} accion={['Hablemos', contacto]} />
      <main>
        <section className="hero detalle-hero">
          <div className="contenedor">
            <a href="/#productos" className="volver"><span className="flecha-volver" aria-hidden="true">←</span> Volver a productos</a>
            <h1>Un minuto por producto.</h1>
            <p>Videos demo con pantallas reales y datos de prueba. Narración en español.</p>
          </div>
        </section>
        <section className="gris">
          <div className="contenedor">
            <div className="videos-lista">
              {lista.map(p => (
                <article key={p.id}>
                  <video controls preload="metadata" playsInline src={detalles[p.id].video} />
                  <h3>{p.nombre}</h3>
                  <p className="sub">{p.pregunta} <a href={`/productos/${p.id}`}>Ver el producto <Flecha /></a></p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Pie />
    </div>
  )
}
