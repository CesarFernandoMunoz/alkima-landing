import Link from 'next/link'
import { site } from '../../../config/site'
import { Cabecera, Pie, Flecha } from '../../../components/Estructura'

export const metadata = {
  title: 'La regla 50/30/20: el presupuesto más simple del mundo',
  description: 'Aprende a dividir tus ingresos en 3 categorías: 50% necesidades, 30% deseos y 20% ahorro. La estrategia de presupuesto más efectiva para Latinoamérica.',
  keywords: ['regla 50 30 20', 'presupuesto personal', 'cómo ahorrar dinero', 'finanzas personales Ecuador', 'control de gastos'],
  openGraph: {
    title: 'La regla 50/30/20: el presupuesto más simple del mundo',
    description: 'Divide tus ingresos en 3 partes y toma el control de tus finanzas desde hoy.',
    url: `${site.url}/blog/regla-50-30-20`,
  },
}

const fila = { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--regla)' }

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
        <div className="meta">Presupuesto · 4 min de lectura · Marzo 2026</div>
        <h1>La regla 50/30/20: el presupuesto más simple del mundo</h1>
        <p className="sub">
          Si alguna vez has sentido que el dinero desaparece sin saber a dónde fue, esta regla va a cambiar tu relación con las finanzas para siempre.
        </p>

        <h2>¿Qué es la regla 50/30/20?</h2>
        <p>La regla 50/30/20 fue popularizada por la senadora estadounidense Elizabeth Warren en su libro <em>All Your Worth</em>. La idea es simple: divide tu ingreso neto mensual en tres categorías.</p>
        <p>No necesitas una hoja de cálculo compleja ni una app sofisticada para empezar — aunque Alkima te ayuda a hacerlo en segundos. Solo necesitas saber cuánto ganas y distribuirlo así:</p>

        <div className="destacado" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
          {[
            { pct: '50%', label: 'Necesidades', items: ['Arriendo o hipoteca', 'Alimentación', 'Transporte', 'Servicios básicos', 'Salud'] },
            { pct: '30%', label: 'Deseos', items: ['Restaurantes', 'Entretenimiento', 'Ropa no esencial', 'Viajes', 'Suscripciones'] },
            { pct: '20%', label: 'Ahorro', items: ['Fondo de emergencia', 'Inversiones', 'Pago de deudas extra', 'Metas de ahorro'] },
          ].map(c => (
            <div key={c.label}>
              <div style={{ fontFamily: 'var(--fuente-display)', fontSize: 36, fontWeight: 500, color: 'var(--verde)', lineHeight: 1 }}>{c.pct}</div>
              <div style={{ fontWeight: 700, margin: '8px 0 10px' }}>{c.label}</div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14 }}>
                {c.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2>Ejemplo práctico en Ecuador</h2>
        <p>Supongamos que tu ingreso neto mensual es <strong>$800</strong> — un salario cercano al básico en Ecuador:</p>
        <div className="destacado">
          <div style={fila}><span>Necesidades (50%)</span><strong style={{ color: 'var(--verde)' }}>$400</strong></div>
          <div style={fila}><span>Deseos (30%)</span><strong style={{ color: 'var(--verde)' }}>$240</strong></div>
          <div style={{ ...fila, borderBottom: 'none' }}><span>Ahorro/Inversión (20%)</span><strong style={{ color: 'var(--verde)' }}>$160</strong></div>
        </div>
        <p>$160 al mes de ahorro puede parecer poco, pero en un año son <strong>$1,920</strong> — suficiente para un fondo de emergencia sólido o el inicio de una inversión.</p>

        <h2>¿Qué pasa si el 50% no me alcanza para necesidades?</h2>
        <p>Es el problema más común en Latinoamérica. Si tus necesidades superan el 50%, tienes dos opciones:</p>
        <p><strong>1. Reducir necesidades:</strong> Revisar si puedes bajar el arriendo, usar transporte público, cocinar más en casa. Pequeños cambios suman.</p>
        <p><strong>2. Aumentar ingresos:</strong> Freelance, venta de servicios, horas extra. El problema no siempre es que gastas mucho — a veces es que ganas poco.</p>
        <p>Lo importante es que <em>seas consciente</em> de dónde va tu dinero. Alkima te muestra exactamente eso con su dashboard de flujo de caja.</p>

        <h2>Cómo aplicar la regla con Alkima</h2>
        <p>En Alkima puedes crear categorías de gastos y establecer límites de presupuesto para cada una. Al final del mes, la app te muestra cuánto gastaste en cada categoría y si te pasaste del límite.</p>
        <ol>
          <li>Registra todas tus cuentas bancarias en Alkima</li>
          <li>Calcula tu 50/30/20 según tu ingreso neto</li>
          <li>Crea presupuestos por categoría en el módulo de Presupuesto</li>
          <li>Registra tus gastos diariamente — tarda menos de 1 minuto</li>
          <li>Revisa el dashboard cada semana para ajustar</li>
        </ol>

        <h2>Conclusión</h2>
        <p>La regla 50/30/20 no es perfecta para todos, pero es el mejor punto de partida que existe. Es simple, memorable y funciona. Lo más importante no es seguirla al pie de la letra — es que te haga <strong>consciente de tu dinero</strong>.</p>
        <p>Empieza hoy. Registra tus ingresos en Alkima, crea tus presupuestos y dentro de un mes vas a ver exactamente a dónde va cada dólar.</p>

        <div className="cta">
          <h3>Aplica la regla 50/30/20 con Alkima</h3>
          <p>Crea presupuestos por categoría y ve en tiempo real cómo vas cada mes.</p>
          <a href={site.appUrl} className="btn btn-lima">Empezar gratis <Flecha /></a>
        </div>

        <div className="relacionados">
          <strong>Más artículos</strong>
          <Link href="/blog/fondo-emergencia">Cómo construir tu fondo de emergencia desde cero</Link>
          <Link href="/blog/deudas-bola-nieve">El método bola de nieve para salir de deudas</Link>
        </div>
      </main>

      <Pie />
    </div>
  )
}
