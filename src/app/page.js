import { site, etiquetasEstado } from '../config/site'
import { Cabecera, Pie, Flecha, Isotipo } from '../components/Estructura'

const principios = [
  ['Entendemos primero, construimos después', 'Antes de escribir código recorremos su operación: quién hace qué, dónde se pierde tiempo y qué decisión no se puede tomar por falta de datos.'],
  ['Datos separados por empresa', 'Cada empresa ve únicamente su información. Los datos de un cliente nunca se mezclan con los de otro.'],
  ['Acceso por roles y bitácora', 'Cada persona entra solo a lo que le corresponde y queda registrado quién cambió qué y cuándo.'],
  ['Manual y nota técnica', 'Cada entrega trae manual en lenguaje llano y una nota técnica para quien dé mantenimiento. Nada queda atado a nosotros.'],
]

export default function Home() {
  const contacto = `mailto:${site.correo}?subject=${encodeURIComponent('Consulta sobre software a medida')}`
  const radar = site.productos.find(p => p.id === 'radar')

  return (
    <div className="labs">
      <Cabecera producto="Labs" hrefMarca="/" enlaces={[['Productos', '#productos'], ['Por qué nosotros', '#por-que'], ['Cómo trabajamos', '#como-trabajamos']]} accion={['Hablemos', '#contacto']} />

      <main>
        <section className="hero">
          <div className="contenedor">
            <span className="etiqueta">Software de operaciones y finanzas · {site.ciudad}, {site.pais}</span>
            <h1>Software que entiende su negocio<span className="punto">.</span></h1>
            <p className="guia">Nosotros somos la guía.</p>
            <p>Construimos las herramientas que su operación necesita y su ERP no resuelve: cartera y cobranzas, entregas y rutas, servicio técnico, análisis financiero. Con inteligencia artificial y con sus datos a salvo.</p>
            <div className="acciones">
              <a href={contacto} className="btn btn-negro">Hablemos de su proyecto <Flecha /></a>
              <a href="#productos" className="btn btn-borde">Ver productos</a>
            </div>
          </div>
        </section>

        <div className="franja" aria-label="Lo que nos define">
          <div className="contenedor">
            <span>Profesionales con casos empresariales reales</span>
            <span>Inteligencia artificial donde ahorra horas de verdad</span>
            <span>Sus datos separados, con bitácora y acceso por rol</span>
          </div>
        </div>

        <section id="guia" className="blanca">
          <div className="contenedor concepto">
            <div className="figura" aria-hidden="true"><Isotipo negativo tamano={300} /></div>
            <div>
              <h2>Dos piezas, una decisión<span className="punto">.</span></h2>
              <p>Una empresa llega con una pregunta que su sistema no responde y sale con una respuesta clara. Nuestra marca son dos piezas que solo sirven juntas: el criterio de quien conoce la operación y la señal que dan los datos. Entre las dos queda el espacio donde usted decide.</p>
              <div className="piezas">
                <div className="pieza"><span className="marca-pieza criterio" aria-hidden="true" /><h3>El criterio</h3><p>Experiencia en operaciones y finanzas. Entendemos el negocio antes de escribir código.</p></div>
                <div className="pieza"><span className="marca-pieza senal" aria-hidden="true" /><h3>La señal</h3><p>Tecnología e inteligencia artificial aplicadas. El dato que ilumina la decisión.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="por-que" className="gris">
          <div className="contenedor">
            <div className="declaracion">
              <h2>Cualquiera puede hacer una página con inteligencia artificial<span className="punto">.</span></h2>
              <p>Entender su negocio, sus problemas y construir la solución a medida que ahorra tiempo, dinero y recursos, y que le permite crecer, es otra cosa. Eso es lo que hacemos.</p>
            </div>
            <div className="pilares">
              {site.pilares.map(([t, d], i) => (
                <article key={t} className="pilar">
                  <span className="numero" aria-hidden="true">{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" className="blanca">
          <div className="contenedor">
            <div className="centrado">
              <h2><span className="ligero">Productos.</span>Cada uno responde una pregunta que la gerencia se hace a diario.</h2>
            </div>
            <div className="vitrina">
              {site.productos.map(p => (
                <article key={p.id} className={`producto${p.estado === 'abierto' ? ' destacado' : ''}`}>
                  <span className={`estado ${p.estado}`}>{etiquetasEstado[p.estado]}{p.desde ? ` · ${p.desde.toLowerCase()}` : ''}</span>
                  <h3>{p.nombre}</h3>
                  <div className="pregunta">{p.pregunta}</div>
                  <p>{p.respuesta}</p>
                  {p.cifras && (
                    <div className="cifras">
                      {p.cifras.map(([v, t]) => <div key={t}><b>{v}</b><span>{t}</span></div>)}
                    </div>
                  )}
                  {p.nota && <div className="nota">{p.nota}</div>}
                  {p.enlace && <a href={p.enlace} className={`btn enlace ${p.estado === 'abierto' ? 'btn-lima' : 'btn-negro'}`}>{p.textoEnlace || `Ver ${p.nombre}`} <Flecha /></a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-trabajamos" className="gris">
          <div className="contenedor">
            <h2><span className="ligero">Cómo trabajamos.</span>Su operación no es genérica. Su software tampoco.</h2>
            <p className="sub">Diseñamos cada herramienta desde el primer día para crecer sin rehacer nada, y la entregamos con quien va a usarla al lado.</p>
            <div className="principios">
              {principios.map(([t, d]) => (
                <div key={t} className="principio"><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="contacto">
          <div className="contenedor">
            <h2>Cuéntenos qué no logra resolver hoy su operación.</h2>
            <p>Le respondemos con una propuesta clara: qué se puede automatizar, cuánto tomaría y qué ahorra. Radar ya analizó {radar.cifras[1][0]} balances; su caso puede ser el siguiente.</p>
            <a href={contacto} className="btn btn-lima">{site.correo} <Flecha /></a>
          </div>
        </section>
      </main>

      <Pie />
    </div>
  )
}
