import Link from 'next/link'

export const metadata = {
  title: 'El método bola de nieve para salir de deudas | Alkima',
  description: 'Aprende el método bola de nieve para eliminar deudas una por una, ganar impulso psicológico y ser libre de deudas en menos tiempo. Guía para Ecuador.',
  keywords: ['método bola de nieve', 'salir de deudas', 'pagar deudas', 'finanzas personales Ecuador', 'eliminar deudas'],
  openGraph: {
    title: 'El método bola de nieve para salir de deudas',
    description: 'Aprende a liquidar tus deudas de menor a mayor para ganar impulso psicológico y financiero.',
    url: 'https://alkima.app/blog/deudas-bola-nieve',
  },
}

const C = {
  dark: '#0a0812', text: '#f8fafc', textMid: '#94a3b8', textLight: '#64748b',
  accent: '#1B5EF7', teal: '#0891B2', green: '#10b981', red: '#ef4444',
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
            <span style={{ background: 'rgba(239,68,68,.15)', color: '#fca5a5', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 99 }}>Deudas</span>
            <span style={{ fontSize: 13, color: C.textLight }}>6 min de lectura · Feb 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: C.text, margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-.03em' }}>
            El método bola de nieve para salir de deudas
          </h1>
          <p style={{ fontSize: 18, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
            Las deudas no se van solas. Pero con el método correcto, puedes eliminarlas una por una y ganar el impulso que necesitas para ser libre financieramente.
          </p>
        </div>

        <div style={{ fontSize: 16, color: C.textMid, lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Qué es el método bola de nieve?</h2>
          <p>Popularizado por Dave Ramsey, el método bola de nieve consiste en pagar primero la deuda más pequeña — independientemente de la tasa de interés — mientras haces pagos mínimos en todas las demás.</p>
          <p>Cuando eliminas la deuda más pequeña, tomas todo ese dinero y lo aplicas a la siguiente. Como una bola de nieve que rueda y se hace más grande, tu capacidad de pago crece con cada deuda que liquidas.</p>

          <div style={{ background: 'rgba(27,94,247,.08)', border: '1px solid rgba(27,94,247,.2)', borderRadius: 12, padding: '20px 24px', margin: '28px 0' }}>
            <div style={{ fontWeight: 700, color: '#60a5fa', marginBottom: 8 }}>💡 ¿Por qué funciona psicológicamente?</div>
            <p style={{ margin: 0, fontSize: 15 }}>Eliminar una deuda completamente activa el sistema de recompensa del cerebro. Esa pequeña victoria te da la motivación para continuar. Es por eso que este método tiene mejores resultados que pagar la deuda de mayor interés primero — aunque matemáticamente sea menos eficiente.</p>
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Cómo aplicarlo paso a paso</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0' }}>
            {[
              { n: '1', title: 'Lista todas tus deudas', desc: 'Escribe cada deuda con su saldo actual, cuota mínima y tasa de interés. La transparencia es el primer paso.' },
              { n: '2', title: 'Ordénalas de menor a mayor saldo', desc: 'No por interés, no por cuota — por saldo total. La más pequeña va primero.' },
              { n: '3', title: 'Paga mínimos en todas excepto la primera', desc: 'Libera todo el dinero extra posible para atacar la deuda más pequeña.' },
              { n: '4', title: 'Ataca la primera con todo lo que puedas', desc: 'Cada peso extra que tengas va a esta deuda. Cenas fuera, Netflix, ropa — todo va a la deuda hasta liquidarla.' },
              { n: '5', title: 'Celebra y rueda la bola', desc: 'Cuando liquidas la primera, suma su cuota a lo que pagabas en la segunda. Y así sucesivamente.' },
            ].map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 16, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '20px' }}>
                <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#fff', flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ fontWeight: 700, color: C.text, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 14 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Ejemplo real en Ecuador</h2>
          <p>Supongamos que tienes estas deudas:</p>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden', margin: '20px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,.05)', padding: '10px 16px', fontSize: 12, fontWeight: 700, color: C.textLight, textTransform: 'uppercase' }}>
              <span>Deuda</span><span>Saldo</span><span>Cuota mínima</span>
            </div>
            {[
              ['Tarjeta tienda', '$180', '$20'],
              ['Préstamo amigo', '$350', '$50'],
              ['Tarjeta de crédito', '$1,200', '$60'],
              ['Préstamo banco', '$3,500', '$120'],
            ].map(([d, s, c], i) => (
              <div key={d} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '12px 16px', borderTop: `1px solid ${C.border}`, fontSize: 14 }}>
                <span style={{ color: i === 0 ? C.green : C.textMid, fontWeight: i === 0 ? 600 : 400 }}>{d} {i === 0 ? '← primero' : ''}</span>
                <span style={{ color: i === 0 ? C.green : C.textMid }}>{s}</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <p>Con $50 extra al mes para deudas, atacas la tarjeta de tienda: $20 (mínimo) + $50 (extra) = $70/mes. En menos de 3 meses la liquidas. Luego sumas esos $70 a los $50 de la deuda del amigo → $120/mes. Y así...</p>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>¿Bola de nieve vs avalancha?</h2>
          <p>El método <strong style={{ color: C.text }}>avalancha</strong> ataca primero la deuda de mayor interés — matemáticamente paga menos intereses en total. La <strong style={{ color: C.text }}>bola de nieve</strong> ataca la más pequeña — psicológicamente más efectivo.</p>
          <p>¿Cuál es mejor? El que realmente vas a seguir. Para la mayoría de personas, la bola de nieve tiene mejores resultados reales porque mantiene la motivación alta.</p>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Cómo Alkima te ayuda a salir de deudas</h2>
          <p>El módulo de <strong style={{ color: C.text }}>Cuentas por Pagar (CxP)</strong> de Alkima te permite registrar cada deuda, hacer abonos vinculados a tu cuenta bancaria y ver el progreso de cada una.</p>
          <ol style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>Registra cada deuda en el módulo CxP</li>
            <li style={{ marginBottom: 10 }}>Ordénalas por saldo (de menor a mayor)</li>
            <li style={{ marginBottom: 10 }}>Cada pago que haces se refleja en tu saldo bancario</li>
            <li style={{ marginBottom: 10 }}>Ve el porcentaje pagado de cada deuda en tiempo real</li>
            <li style={{ marginBottom: 10 }}>Celebra cada deuda que marques como "Pagada"</li>
          </ol>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '40px 0 16px', letterSpacing: '-.02em' }}>Conclusión</h2>
          <p>Las deudas se eliminan una por una, con constancia y un plan claro. El método bola de nieve no es el más eficiente en papel, pero sí el más efectivo en la práctica porque aprovecha tu psicología a tu favor.</p>
          <p>Empieza hoy. Haz tu lista, identifica tu deuda más pequeña, y atácala con todo. La libertad financiera empieza con esa primera victoria.</p>
        </div>

        <div style={{ background: 'rgba(27,94,247,.08)', border: '1px solid rgba(27,94,247,.2)', borderRadius: 20, padding: '32px', marginTop: 56, textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 12 }}>Gestiona tus deudas con Alkima</div>
          <p style={{ color: C.textMid, fontSize: 14, margin: '0 0 24px' }}>Registra tus CxP, haz abonos y ve tu progreso en tiempo real.</p>
          <a href="https://app.alkima.app" style={{ display: 'inline-block', background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '12px 32px', borderRadius: 12, fontWeight: 700, fontSize: 14 }}>
            Empezar gratis →
          </a>
        </div>

        <div style={{ marginTop: 56 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 20 }}>Más artículos</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'regla-50-30-20', title: 'La regla 50/30/20: el presupuesto más simple del mundo' },
              { slug: 'fondo-emergencia', title: 'Cómo construir tu fondo de emergencia desde cero' },
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
