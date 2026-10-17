import Link from 'next/link'
import { site } from '../../../config/site'
import { Cabecera, Pie, Flecha } from '../../../components/Estructura'

export const metadata = {
  title: 'Cómo construir tu fondo de emergencia desde cero',
  description: 'Aprende cuánto necesitas en tu fondo de emergencia y cómo construirlo paso a paso. Guía práctica para Ecuador y Latinoamérica.',
  keywords: ['fondo de emergencia', 'ahorro de emergencia', 'cuánto ahorrar', 'finanzas personales', 'seguridad financiera Ecuador'],
  openGraph: {
    title: 'Cómo construir tu fondo de emergencia desde cero',
    description: 'El primer paso de cualquier plan financiero sólido. Te explicamos cuánto necesitas y cómo lograrlo.',
    url: `${site.url}/blog/fondo-emergencia`,
  },
}

const fila = { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid var(--regla)' }

export default function Article() {
  return (
    <div className="labs">
      <Cabecera
        producto="Finanzas"
        hrefMarca="/finanzas"
        enlaces={[['Alkima Labs', '/?desde=finanzas'], ['Más artículos', '/finanzas#blog']]}
        accion={['Entrar a la app', site.appUrl]}
      />

      <main className="articulo-cuerpo">
        <div className="meta">Ahorro · 5 min de lectura · Marzo 2026</div>
        <h1>Cómo construir tu fondo de emergencia desde cero</h1>
        <p className="sub">
          Sin fondo de emergencia, cualquier imprevisto puede destruir años de esfuerzo financiero. Este es el primer paso que todo experto en finanzas recomienda.
        </p>

        <h2>¿Qué es un fondo de emergencia?</h2>
        <p>Es una reserva de dinero líquido — accesible en 24 horas — destinada exclusivamente para situaciones imprevistas: pérdida de empleo, emergencia médica, reparación urgente del auto o del hogar.</p>
        <p>No es para vacaciones, no es para aprovechar una oferta, no es para "por si acaso quiero algo". Es una red de seguridad que te permite enfrentar la vida sin entrar en deuda.</p>

        <div className="destacado">
          <div style={{ fontWeight: 700, marginBottom: 8 }}>⚠️ La realidad en Ecuador</div>
          <p style={{ margin: 0, fontSize: 15 }}>El 78% de los ecuatorianos no tiene ahorros suficientes para cubrir 3 meses de gastos. Una emergencia médica promedio cuesta entre $500 y $3,000. Sin fondo de emergencia, esa situación se convierte en deuda.</p>
        </div>

        <h2>¿Cuánto necesito?</h2>
        <p>La regla general es tener entre <strong>3 y 6 meses</strong> de tus gastos esenciales ahorrados. Para calcularlo:</p>

        <div className="destacado">
          <p style={{ fontWeight: 600, margin: '0 0 12px', color: 'var(--texto)' }}>Mis gastos esenciales mensuales:</p>
          {[['Arriendo / hipoteca', '$300'], ['Alimentación', '$150'], ['Transporte', '$60'], ['Servicios (luz, agua, internet)', '$50'], ['Total mensual', '$560']].map(([label, val], i) => (
            <div key={label} style={{ ...fila, borderTop: i > 0 ? fila.borderTop : 'none', fontWeight: i === 4 ? 700 : 400 }}>
              <span>{label}</span><span style={{ color: i === 4 ? 'var(--verde)' : 'inherit' }}>{val}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, padding: 12, background: 'var(--blanco)', border: '1.5px solid var(--verde)', borderRadius: 10, textAlign: 'center', color: 'var(--verde)', fontWeight: 700 }}>
            Fondo recomendado: $1,680 (3 meses) — $3,360 (6 meses)
          </div>
        </div>

        <h2>Plan de 6 meses para construirlo</h2>
        <p>Si ahorrar $1,680 parece imposible, divide el objetivo. Con $280 al mes en 6 meses llegas a $1,680. ¿Y si solo puedes ahorrar $100 al mes? En 17 meses tienes tu fondo mínimo.</p>
        <p>Lo importante es <strong>empezar</strong>, aunque sea con $20 al mes. La consistencia vale más que la cantidad.</p>

        <div className="destacado">
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
            {[
              ['Mes 1-2', 'Abre una cuenta de ahorros separada exclusivamente para el fondo'],
              ['Mes 3-4', 'Automatiza una transferencia mensual el día que cobras'],
              ['Mes 5-6', 'Revisa y ajusta. Si puedes más, aumenta el aporte'],
            ].map(([mes, accion], i) => (
              <li key={mes} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '10px 0', borderTop: i > 0 ? '1px solid var(--regla)' : 'none', color: 'var(--texto)' }}>
                <span style={{ fontWeight: 700, color: 'var(--verde)', whiteSpace: 'nowrap', minWidth: 70 }}>{mes}</span>
                <span style={{ fontSize: 15 }}>{accion}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2>¿Dónde guardar el fondo?</h2>
        <p>Debe estar en un lugar <strong>accesible pero separado</strong> de tu cuenta corriente — lo suficientemente lejos para no gastarlo, lo suficientemente cerca para usarlo en emergencias.</p>
        <p>Opciones en Ecuador: cuenta de ahorros en un banco diferente al que usas para el diario, póliza de acumulación a 30 días (accesible pero con algo de rendimiento), o una cuenta en una cooperativa de ahorro.</p>

        <h2>Cómo usar Alkima para tu fondo de emergencia</h2>
        <p>En Alkima puedes crear una <strong>Meta de Ahorro</strong> específica para tu fondo de emergencia. Define el monto objetivo, la fecha y el aporte mensual. La app calcula automáticamente si vas en buen camino.</p>
        <ol>
          <li>Ve al módulo <strong>Metas</strong> en Alkima</li>
          <li>Crea una meta llamada "Fondo de emergencia"</li>
          <li>Pon tu objetivo (ej: $1,680)</li>
          <li>Cada mes, registra tu aporte desde la cuenta correspondiente</li>
          <li>Mira la barra de progreso crecer</li>
        </ol>

        <h2>Conclusión</h2>
        <p>El fondo de emergencia no es una opción — es el fundamento de cualquier plan financiero sólido. Sin él, un imprevisto puede borrarte años de progreso.</p>
        <p>Empieza hoy con lo que puedes. Aunque sea $50 al mes. Tu yo del futuro te lo va a agradecer.</p>

        <div className="cta">
          <h3>Crea tu meta de ahorro en Alkima</h3>
          <p>Define tu fondo de emergencia y sigue tu progreso mes a mes.</p>
          <a href={site.appUrl} className="btn btn-lima">Empezar gratis <Flecha /></a>
        </div>

        <div className="relacionados">
          <strong>Más artículos</strong>
          <Link href="/blog/regla-50-30-20">La regla 50/30/20: el presupuesto más simple del mundo</Link>
          <Link href="/blog/deudas-bola-nieve">El método bola de nieve para salir de deudas</Link>
        </div>
      </main>

      <Pie />
    </div>
  )
}
