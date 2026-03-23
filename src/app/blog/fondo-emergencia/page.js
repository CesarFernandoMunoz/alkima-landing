import Link from 'next/link'

export const metadata = {
  title: 'Cómo construir tu fondo de emergencia desde cero | Alkima',
  description: 'Aprende cuánto necesitas en tu fondo de emergencia y cómo construirlo paso a paso. Guía práctica para Ecuador y Latinoamérica.',
  keywords: ['fondo de emergencia', 'ahorro de emergencia', 'cuánto ahorrar', 'finanzas personales', 'seguridad financiera Ecuador'],
  openGraph: {
    title: 'Cómo construir tu fondo de emergencia desde cero',
    description: 'El primer paso de cualquier plan financiero sólido. Te explicamos cuánto necesitas y cómo lograrlo.',
    url: 'https://alkima.app/blog/fondo-emergencia',
  },
}

const C = {
  dark: '#0a0812', text: '#f8fafc', textMid: '#94a3b8', textLight: '#64748b',
  accent: '#1B5EF7', teal: '#0891B2', green: '#10b981', amber: '#f59e0b',
  border: 'rgba(255,255,255,0.08)', card: 'rgba(255,255,255,0.04)',
}

export default function Article() {
  return (
    <div style={{ background: C.dark, minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      <nav style={{ borderBottom: `1px solid ${C.border}`, backdropFilter: 'blur(20px)', background: 'rgba(10,8,18,0.85)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#fff' }}>A</div>
          <span style={{ fontWeight: 800, fontSize: 18, color: C.text }}>Alkima</span>
        </Link>
        <Link href="/#blog" style={{ color: C.textMid, textDecoration: 'none', fontSize: 14 }}>← Volver al blog</Link>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 100px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center' }}>
            <span style={{ background: 'rgba(16,185,129,.15)', color: '#34d399', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 99 }}>Ahorro</span>
            <span style={{ fontSize: 13, color: C.textLight }}>5 min de lectura · Mar 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: C.text, margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-.03em' }}>
            Cómo construir tu fondo de emergencia desde cero
          </h1>
          <p style={{ fontSize: 18, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
            Sin fondo de emergencia, cualquier imprevisto puede destruir años de esfuerzo financiero. Este es el primer paso que todo experto en finanzas recomienda.
          </p>
        </div>

        <div style={{ fontSize: 16, color: C.textMid, lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Qué es un fondo de emergencia?</h2>
          <p>Es una reserva de dinero líquido — accesible en 24 horas — destinada exclusivamente para situaciones imprevistas: pérdida de empleo, emergencia médica, reparación urgente del auto o del hogar.</p>
          <p>No es para vacaciones, no es para aprovechar una oferta, no es para "por si acaso quiero algo". Es una red de seguridad que te permite enfrentar la vida sin entrar en deuda.</p>

          <div style={{ background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.2)', borderRadius: 12, padding: '20px 24px', margin: '28px 0' }}>
            <div style={{ fontWeight: 700, color: C.amber, marginBottom: 8 }}>⚠️ La realidad en Ecuador</div>
            <p style={{ margin: 0, fontSize: 15 }}>El 78% de los ecuatorianos no tiene ahorros suficientes para cubrir 3 meses de gastos. Una emergencia médica promedio cuesta entre $500 y $3,000. Sin fondo de emergencia, esa situación se convierte en deuda.</p>
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Cuánto necesito?</h2>
          <p>La regla general es tener entre <strong style={{ color: C.text }}>3 y 6 meses</strong> de tus gastos esenciales ahorrados. Para calcularlo:</p>

          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '24px', margin: '20px 0' }}>
            <p style={{ color: C.text, fontWeight: 600, margin: '0 0 16px' }}>Mis gastos esenciales mensuales:</p>
            {[['Arriendo / hipoteca', '$300'], ['Alimentación', '$150'], ['Transporte', '$60'], ['Servicios (luz, agua, internet)', '$50'], ['Total mensual', '$560']].map(([label, val], i) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: i > 0 ? `1px solid ${C.border}` : 'none', fontWeight: i === 4 ? 700 : 400, color: i === 4 ? C.text : C.textMid }}>
                <span>{label}</span><span style={{ color: i === 4 ? C.green : 'inherit' }}>{val}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, padding: '12px', background: 'rgba(16,185,129,.08)', borderRadius: 8, textAlign: 'center' }}>
              <span style={{ color: C.green, fontWeight: 700 }}>Fondo recomendado: $1,680 (3 meses) — $3,360 (6 meses)</span>
            </div>
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Plan de 6 meses para construirlo</h2>
          <p>Si ahorrar $1,680 parece imposible, divide el objetivo. Con $280 al mes en 6 meses llegas a $1,680. ¿Y si solo puedes ahorrar $100 al mes? En 17 meses tienes tu fondo mínimo.</p>
          <p>Lo importante es <strong style={{ color: C.text }}>empezar</strong>, aunque sea con $20 al mes. La consistencia vale más que la cantidad.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '28px 0' }}>
            {[
              { mes: 'Mes 1-2', accion: 'Abre una cuenta de ahorros separada exclusivamente para el fondo', color: C.accent },
              { mes: 'Mes 3-4', accion: 'Automatiza una transferencia mensual el día que cobras', color: C.teal },
              { mes: 'Mes 5-6', accion: 'Revisa y ajusta. Si puedes más, aumenta el aporte', color: C.green },
            ].map(s => (
              <div key={s.mes} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ background: s.color + '20', color: s.color, fontWeight: 700, fontSize: 12, padding: '4px 10px', borderRadius: 99, whiteSpace: 'nowrap', flexShrink: 0 }}>{s.mes}</div>
                <p style={{ margin: 0, fontSize: 14 }}>{s.accion}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Dónde guardar el fondo?</h2>
          <p>Debe estar en un lugar <strong style={{ color: C.text }}>accesible pero separado</strong> de tu cuenta corriente — lo suficientemente lejos para no gastarlo, lo suficientemente cerca para usarlo en emergencias.</p>
          <p>Opciones en Ecuador: cuenta de ahorros en un banco diferente al que usas para el diario, póliza de acumulación a 30 días (accesible pero con algo de rendimiento), o una cuenta en una cooperativa de ahorro.</p>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Cómo usar Alkima para tu fondo de emergencia</h2>
          <p>En Alkima puedes crear una <strong style={{ color: C.text }}>Meta de Ahorro</strong> específica para tu fondo de emergencia. Define el monto objetivo, la fecha y el aporte mensual. La app calcula automáticamente si vas en buen camino.</p>
          <ol style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>Ve al módulo <strong style={{ color: C.text }}>Metas</strong> en Alkima</li>
            <li style={{ marginBottom: 10 }}>Crea una meta llamada "Fondo de emergencia"</li>
            <li style={{ marginBottom: 10 }}>Pon tu objetivo (ej: $1,680)</li>
            <li style={{ marginBottom: 10 }}>Cada mes, registra tu aporte desde la cuenta correspondiente</li>
            <li style={{ marginBottom: 10 }}>Mira la barra de progreso crecer</li>
          </ol>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Conclusión</h2>
          <p>El fondo de emergencia no es una opción — es el fundamento de cualquier plan financiero sólido. Sin él, un imprevisto puede borrarte años de progreso.</p>
          <p>Empieza hoy con lo que puedes. Aunque sea $50 al mes. Tu yo del futuro te lo va a agradecer.</p>
        </div>

        <div style={{ background: 'rgba(27,94,247,.08)', border: '1px solid rgba(27,94,247,.2)', borderRadius: 20, padding: '32px', marginTop: 56, textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 12 }}>Crea tu meta de ahorro en Alkima</div>
          <p style={{ color: C.textMid, fontSize: 14, margin: '0 0 24px' }}>Define tu fondo de emergencia y sigue tu progreso mes a mes.</p>
          <a href="https://app.alkima.app" style={{ display: 'inline-block', background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '12px 32px', borderRadius: 12, fontWeight: 700, fontSize: 14 }}>
            Empezar gratis →
          </a>
        </div>

        <div style={{ marginTop: 56 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 20 }}>Más artículos</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'regla-50-30-20', title: 'La regla 50/30/20: el presupuesto más simple del mundo' },
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
