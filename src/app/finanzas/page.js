import { site } from '../../config/site'
import { Cabecera, Pie, Flecha } from '../../components/Estructura'

const beneficios = [
  ['Flujo de caja real', 'Cuánto entra y sale de tus cuentas cada mes, con préstamos dados y recibidos incluidos.'],
  ['Cuentas por cobrar y pagar', 'Registra lo que te deben y lo que debes, con abonos ligados a tus cuentas.'],
  ['Inversiones y pólizas', 'Tu portafolio con rendimiento y las pólizas bancarias con interés al día.'],
  ['Metas de ahorro', 'Metas con fecha y monto; aportas desde cualquier cuenta y ves el avance.'],
  ['Presupuesto por categoría', 'Límites por categoría y avisos cuando te estás pasando.'],
  ['Hogar compartido', 'Un espacio para la pareja o la familia, con roles para ver o editar.'],
  ['Importa tu extracto', 'Sube el CSV o Excel del banco: detecta duplicados y aprende tus categorías.'],
  ['Tus datos, solo tuyos', 'Cada persona ve únicamente su información. Exportas o borras todo cuando quieras.'],
]

const pasos = [
  ['Crea tu cuenta', 'Un minuto, sin tarjeta de crédito y sin compromisos.'],
  ['Agrega tus cuentas', 'Bancos, tarjetas, efectivo y billeteras. Con saldo inicial y listo.'],
  ['Registra y mira', 'Movimientos, presupuesto y metas. El tablero te dice cuánto tienes disponible.'],
]

const preguntas = [
  ['¿Es gratis de verdad?', 'Sí. Todas las funciones, sin límites y sin tarjeta de crédito. Alkima Finanzas es la carta de presentación de Alkima Labs: muestra cómo construimos software.'],
  ['¿Puedo usarla en el celular?', 'Sí. Es una aplicación web que se instala desde el navegador, sin tienda de aplicaciones.'],
  ['¿Es seguro registrar mis datos?', 'Cada persona ve únicamente su información: la base separa los datos por usuario y por espacio, y toda operación queda en bitácora. No compartimos información con terceros.'],
  ['¿Se conecta a mi banco?', 'Por ahora no. Registras los movimientos a mano o importas el extracto del banco en CSV o Excel. La conexión automática está en la hoja de ruta.'],
  ['¿En qué países funciona?', 'En cualquier país de habla hispana. Nació en Ecuador y se usa igual en el resto de Latinoamérica.'],
]

const articulos = [
  ['regla-50-30-20', 'La regla 50/30/20: el presupuesto más simple del mundo', 'Presupuesto', '4 min'],
  ['fondo-emergencia', 'Cómo construir tu fondo de emergencia desde cero', 'Ahorro', '5 min'],
  ['deudas-bola-nieve', 'El método bola de nieve para salir de deudas', 'Deudas', '6 min'],
]

export default function Finanzas() {
  const app = site.appUrl
  return (
    <div className="labs">
      <Cabecera producto="Finanzas" hrefMarca="/finanzas" enlaces={[['Alkima Labs', '/?desde=finanzas'], ['Blog', '#blog'], ['Preguntas', '#preguntas']]} accion={['Entrar a la app', app]} />

      <main>
        <section className="hero">
          <div className="luz" aria-hidden="true" />
          <div className="contenedor">
            <span className="etiqueta">Finanzas personales · gratis · {site.ciudad}, {site.pais}</span>
            <h1>Tu dinero, bajo control<span className="punto">.</span></h1>
            <p>Ingresos y gastos de cada mes, cuentas, deudas, metas y patrimonio en un solo lugar. Sin planes ni límites: es la carta de presentación de {site.nombre}.</p>
            <div className="acciones">
              <a href={app} className="btn btn-lima">Empezar gratis <Flecha /></a>
              <a href="#como-funciona" className="btn btn-borde">Ver cómo funciona</a>
            </div>
          </div>
        </section>

        <div className="franja" aria-label="Lo que incluye">
          <div className="contenedor">
            <span>Gratis, sin planes ni límites</span>
            <span>Presupuesto, metas y patrimonio</span>
            <span>Hogar compartido y extractos del banco</span>
          </div>
        </div>

        <section className="blanca" id="funciones">
          <div className="contenedor">
            <h2><span className="ligero">Todo lo que necesitas</span><span className="verde">para entender tu dinero.</span></h2>
            <p className="sub">Diseñada para personas reales, con finanzas reales: sueldo, tarjetas, préstamos entre amigos y metas que cuestan.</p>
            <div className="principios">
              {beneficios.map(([t, d]) => (
                <div key={t} className="principio"><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="negra" id="como-funciona">
          <div className="contenedor">
            <div className="declaracion">
              <h2>En tres pasos<span className="punto">.</span></h2>
              <p>Sin configuraciones largas. Entras, creas una cuenta y el tablero empieza a responder.</p>
            </div>
            <div className="fichas">
              {pasos.map(([t, d], i) => (
                <article key={t} className="ficha">
                  <span className="estado">Paso {i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blanca" id="blog">
          <div className="contenedor">
            <h2><span className="ligero">Aprende sobre</span><span className="verde">finanzas personales.</span></h2>
            <p className="sub">Artículos cortos y prácticos, pensados para Ecuador y Latinoamérica.</p>
            <div className="articulos">
              {articulos.map(([slug, t, cat, min]) => (
                <a key={slug} href={`/blog/${slug}`} className="articulo">
                  <span className="cat">{cat} · {min}</span>
                  <h3>{t}</h3>
                  <span className="leer">Leer artículo <Flecha /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="negra" id="preguntas">
          <div className="contenedor">
            <h2><span className="ligero">Preguntas</span>frecuentes<span className="punto">.</span></h2>
            <div className="preguntas">
              {preguntas.map(([q, a]) => (
                <details key={q} className="pregunta-item">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contacto">
          <div className="contenedor">
            <h2>Empieza hoy. Es gratis y se queda gratis.</h2>
            <p>Alkima Finanzas la construye {site.nombre}, estudio de software a medida de {site.ciudad}. Si te gusta cómo está hecha, así trabajamos para empresas.</p>
            <a href={app} className="btn btn-blanco">Crear mi cuenta gratis <Flecha /></a>
          </div>
        </section>
      </main>

      <Pie />
    </div>
  )
}
