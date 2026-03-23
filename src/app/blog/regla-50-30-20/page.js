import Link from 'next/link'

export const metadata = {
  title: 'La regla 50/30/20: el presupuesto más simple del mundo | Alkima',
  description: 'Aprende a dividir tus ingresos en 3 categorías: 50% necesidades, 30% deseos y 20% ahorro. La estrategia de presupuesto más efectiva para Latinoamérica.',
  keywords: ['regla 50 30 20', 'presupuesto personal', 'cómo ahorrar dinero', 'finanzas personales Ecuador', 'control de gastos'],
  openGraph: {
    title: 'La regla 50/30/20: el presupuesto más simple del mundo',
    description: 'Divide tus ingresos en 3 partes y toma el control de tus finanzas desde hoy.',
    url: 'https://alkima.app/blog/regla-50-30-20',
  },
}

const C = {
  dark: '#0a0812', text: '#f8fafc', textMid: '#94a3b8', textLight: '#64748b',
  accent: '#1B5EF7', teal: '#0891B2', green: '#10b981', border: 'rgba(255,255,255,0.08)',
  card: 'rgba(255,255,255,0.04)',
}

export default function Article() {
  return (
    <div style={{ background: C.dark, minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      {/* Navbar */}
      <nav style={{ borderBottom: `1px solid ${C.border}`, backdropFilter: 'blur(20px)', background: 'rgba(10,8,18,0.85)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#fff' }}>A</div>
          <span style={{ fontWeight: 800, fontSize: 18, color: C.text }}>Alkima</span>
        </Link>
        <Link href="/#blog" style={{ color: C.textMid, textDecoration: 'none', fontSize: 14 }}>← Volver al blog</Link>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 100px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center' }}>
            <span style={{ background: 'rgba(27,94,247,.15)', color: '#60a5fa', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 99 }}>Presupuesto</span>
            <span style={{ fontSize: 13, color: C.textLight }}>4 min de lectura · Mar 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: C.text, margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-.03em' }}>
            La regla 50/30/20: el presupuesto más simple del mundo
          </h1>
          <p style={{ fontSize: 18, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
            Si alguna vez has sentido que el dinero desaparece sin saber a dónde fue, esta regla va a cambiar tu relación con las finanzas para siempre.
          </p>
        </div>

        {/* Contenido */}
        <div style={{ fontSize: 16, color: C.textMid, lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Qué es la regla 50/30/20?</h2>
          <p>La regla 50/30/20 fue popularizada por la senadora estadounidense Elizabeth Warren en su libro <em>All Your Worth</em>. La idea es simple: divide tu ingreso neto mensual en tres categorías.</p>
          <p>No necesitas una hoja de cálculo compleja ni una app sofisticada para empezar — aunque Alkima te ayuda a hacerlo en segundos. Solo necesitas saber cuánto ganas y distribuirlo así:</p>

          {/* Card visual */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, margin: '32px 0' }}>
            {[
              { pct: '50%', label: 'Necesidades', color: C.accent, items: ['Arriendo o hipoteca', 'Alimentación', 'Transporte', 'Servicios básicos', 'Salud'] },
              { pct: '30%', label: 'Deseos', color: C.teal, items: ['Restaurantes', 'Entretenimiento', 'Ropa no esencial', 'Viajes', 'Suscripciones'] },
              { pct: '20%', label: 'Ahorro', color: C.green, items: ['Fondo de emergencia', 'Inversiones', 'Pago de deudas extra', 'Metas de ahorro'] },
            ].map(c => (
              <div key={c.label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: '20px' }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: c.color, letterSpacing: '-.04em' }}>{c.pct}</div>
                <div style={{ fontWeight: 700, color: C.text, fontSize: 15, margin: '8px 0 12px' }}>{c.label}</div>
                {c.items.map(i => <div key={i} style={{ fontSize: 13, color: C.textMid, marginBottom: 4 }}>· {i}</div>)}
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Ejemplo práctico en Ecuador</h2>
          <p>Supongamos que tu ingreso neto mensual es <strong style={{ color: C.text }}>$800</strong> — un salario cercano al básico en Ecuador:</p>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '20px 24px', margin: '20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}><span>Necesidades (50%)</span><strong style={{ color: C.accent }}>$400</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}><span>Deseos (30%)</span><strong style={{ color: C.teal }}>$240</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}><span>Ahorro/Inversión (20%)</span><strong style={{ color: C.green }}>$160</strong></div>
          </div>
          <p>$160 al mes de ahorro puede parecer poco, pero en un año son <strong style={{ color: C.text }}>$1,920</strong> — suficiente para un fondo de emergencia sólido o el inicio de una inversión.</p>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Qué pasa si el 50% no me alcanza para necesidades?</h2>
          <p>Es el problema más común en Latinoamérica. Si tus necesidades superan el 50%, tienes dos opciones:</p>
          <p><strong style={{ color: C.text }}>1. Reducir necesidades:</strong> Revisar si puedes bajar el arriendo, usar transporte público, cocinar más en casa. Pequeños cambios suman.</p>
          <p><strong style={{ color: C.text }}>2. Aumentar ingresos:</strong> Freelance, venta de servicios, horas extra. El problema no siempre es que gastas mucho — a veces es que ganas poco.</p>
          <p>Lo importante es que <em>seas consciente</em> de dónde va tu dinero. Alkima te muestra exactamente eso con su dashboard de flujo de caja.</p>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Cómo aplicar la regla con Alkima</h2>
          <p>En Alkima puedes crear categorías de gastos y establecer límites de presupuesto para cada una. Al final del mes, la app te muestra cuánto gastaste en cada categoría y si te pasaste del límite.</p>
          <ol style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}>Registra todas tus cuentas bancarias en Alkima</li>
            <li style={{ marginBottom: 12 }}>Calcula tu 50/30/20 según tu ingreso neto</li>
            <li style={{ marginBottom: 12 }}>Crea presupuestos por categoría en el módulo de Presupuesto</li>
            <li style={{ marginBottom: 12 }}>Registra tus gastos diariamente — tarda menos de 1 minuto</li>
            <li style={{ marginBottom: 12 }}>Revisa el dashboard cada semana para ajustar</li>
          </ol>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Conclusión</h2>
          <p>La regla 50/30/20 no es perfecta para todos, pero es el mejor punto de partida que existe. Es simple, memorable y funciona. Lo más importante no es seguirla al pie de la letra — es que te haga <strong style={{ color: C.text }}>consciente de tu dinero</strong>.</p>
          <p>Empieza hoy. Registra tus ingresos en Alkima, crea tus presupuestos y dentro de un mes vas a ver exactamente a dónde va cada dólar.</p>
        </div>

        {/* CTA */}
        <div style={{ background: 'rgba(27,94,247,.08)', border: '1px solid rgba(27,94,247,.2)', borderRadius: 20, padding: '32px', marginTop: 56, textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 12 }}>Aplica la regla 50/30/20 con Alkima</div>
          <p style={{ color: C.textMid, fontSize: 14, margin: '0 0 24px' }}>Crea presupuestos por categoría y ve en tiempo real cómo vas cada mes.</p>
          <a href="https://app.alkima.app" style={{ display: 'inline-block', background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '12px 32px', borderRadius: 12, fontWeight: 700, fontSize: 14 }}>
            Empezar gratis →
          </a>
        </div>

        {/* Otros artículos */}
        <div style={{ marginTop: 56 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 20 }}>Más artículos</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'fondo-emergencia', title: 'Cómo construir tu fondo de emergencia desde cero' },
              { slug: 'deudas-bola-nieve', title: 'El método bola de nieve para salir de deudas' },
            ].map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px', textDecoration: 'none', color: C.text, fontSize: 14, fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {p.title} <span style={{ color: C.accent }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
