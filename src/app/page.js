import { site, etiquetasEstado } from '../config/site'

const principios = [
  ['Datos separados por empresa', 'Cada empresa ve únicamente su información. Los datos de un cliente nunca se mezclan con los de otro.'],
  ['Acceso por roles', 'Cada persona entra solo a lo que le corresponde. Probamos los permisos con el usuario más restringido antes de entregar.'],
  ['Bitácora de cambios', 'Queda registrado quién cambió qué y cuándo en toda operación del negocio.'],
  ['Manual y nota técnica', 'Cada entrega trae manual en lenguaje llano y una nota técnica para quien dé mantenimiento.'],
]

const Flecha = () => <span className="flecha" aria-hidden="true">→</span>

export default function Home() {
  const contacto = `mailto:${site.correo}?subject=${encodeURIComponent('Consulta sobre software a medida')}`
  const l = site.legal
  const f = site.finanzas
  const radar = site.productos.find(p => p.id === 'radar')

  return (
    <div className="labs">
      <header className="cabecera">
        <div className="contenedor">
          <a href="/" className="marca" aria-label={site.nombre}><span className="anillo" aria-hidden="true" /><b>Alkima</b>Labs</a>
          <nav className="nav" aria-label="Principal">
            <a href="#productos">Productos</a>
            <a href="#como-trabajamos">Cómo trabajamos</a>
            <a href="#contacto" className="boton">Hablemos</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="luz" aria-hidden="true" />
          <div className="contenedor">
            <span className="etiqueta">Software de operaciones · {site.ciudad}, {site.pais}</span>
            <h1>Construimos el software que su operación necesita, con inteligencia artificial y sus datos a salvo.</h1>
            <p>{site.nombre} desarrolla herramientas a medida para empresas ecuatorianas: entregas y rutas, servicio técnico, cartera y análisis financiero. Lo que su ERP no resuelve, lo construimos nosotros.</p>
            <div className="acciones">
              <a href={contacto} className="btn btn-lima">Hablemos de su proyecto <Flecha /></a>
              <a href="#productos" className="btn btn-borde">Ver productos</a>
            </div>
          </div>
        </section>

        <div className="franja" aria-label="Preguntas que responden nuestros productos">
          <div className="contenedor">
            {site.productos.map(p => <span key={p.id}>{p.pregunta}</span>)}
          </div>
        </div>

        <section className="blanca">
          <div className="contenedor promesa">
            <div>
              <h2><span className="ligero">Automatizar es fácil.</span><span className="verde">Hacerlo con sus datos seguros, no tanto.</span></h2>
              <p className="sub">Por eso existimos. Diseñamos cada herramienta desde el primer día para separar los datos de cada empresa, registrar cada cambio y crecer sin rehacer nada.</p>
              <p className="sub">Y sí, también entendemos que su operación no puede esperar.</p>
            </div>
            <div className="cajas">
              {radar.cifras.slice(0, 2).map(([v, t]) => (
                <div key={t} className="caja"><b>{v}</b><span>{t}</span><small>en {radar.nombre}</small></div>
              ))}
              <div className="caja tinte">Su operación no es genérica.<strong>Su software tampoco debería serlo.</strong></div>
            </div>
          </div>
        </section>

        <section id="productos" className="negra">
          <div className="contenedor">
            <div className="declaracion">
              <h2>Software que responde<span className="punto">.</span></h2>
              <p>Cada producto nace de una pregunta que una gerencia se hace todos los días y que el ERP no contesta.</p>
            </div>
            <div className="fichas">
              {site.productos.map(p => (
                <article key={p.id} className="ficha">
                  <span className={`estado ${p.estado}`}>{etiquetasEstado[p.estado]}{p.desde ? ` · ${p.desde.toLowerCase()}` : ''}</span>
                  <h3>{p.nombre}</h3>
                  <div className="pregunta">{p.pregunta}</div>
                  <p>{p.respuesta}</p>
                  {p.nota && <div className="nota">{p.nota}</div>}
                  {p.enlace && <a href={p.enlace} className="btn btn-blanco enlace">Ver {p.nombre} <Flecha /></a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-trabajamos" className="blanca">
          <div className="contenedor">
            <h2><span className="ligero">Cómo trabajamos.</span><span className="verde">Sus datos, cuidados desde el diseño.</span></h2>
            <div className="principios">
              {principios.map(([t, d]) => (
                <div key={t} className="principio"><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
            <div className="finanzas">
              <div>
                <h3>{f.nombre}</h3>
                <p>{f.resumen} Nuestro producto para personas.</p>
              </div>
              <a href={f.enlace} className="btn btn-borde-verde">Conocer {f.nombre} <Flecha /></a>
            </div>
          </div>
        </section>

        <section id="contacto" className="contacto">
          <div className="contenedor">
            <h2>Cuéntenos qué no logra resolver hoy su operación.</h2>
            <p>Le respondemos con una propuesta clara de qué se puede automatizar y cuánto tomaría.</p>
            <a href={contacto} className="btn btn-blanco">{site.correo} <Flecha /></a>
          </div>
        </section>
      </main>

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
    </div>
  )
}
