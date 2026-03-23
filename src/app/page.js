'use client'
import { useState } from 'react'

const C = {
  dark: '#0a0812',
  darkMid: '#120f1e',
  accent: '#1B5EF7',
  accentLight: '#3b7fff',
  teal: '#0891B2',
  green: '#10b981',
  amber: '#f59e0b',
  text: '#f8fafc',
  textMid: '#94a3b8',
  textLight: '#64748b',
  border: 'rgba(255,255,255,0.08)',
  card: 'rgba(255,255,255,0.04)',
}

// ── SVG Icons ──────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20, color = 'currentColor' }) => {
  const icons = {
    chart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    wallet: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><circle cx="17" cy="15" r="1" fill={color}/></svg>,
    target: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    trending: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    layers: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    arrow: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    book: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    zap: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    menu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    minus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  }
  return icons[name] || null
}

// ── Datos ──────────────────────────────────────────────────────────────────────
const benefits = [
  { icon: 'chart', title: 'Flujo de caja real', desc: 'Ve exactamente cuánto entra y sale de tus cuentas cada mes, incluyendo préstamos dados y recibidos.', color: '#1B5EF7' },
  { icon: 'wallet', title: 'Cuentas por cobrar y pagar', desc: 'Registra lo que te deben y lo que debes. Gestiona abonos vinculados directamente a tus cuentas bancarias.', color: '#0891B2' },
  { icon: 'trending', title: 'Inversiones y pólizas', desc: 'Monitorea tu portafolio de inversiones con cálculo de rendimiento y pólizas bancarias con interés diario.', color: '#10b981' },
  { icon: 'target', title: 'Metas de ahorro', desc: 'Define metas con fecha y monto objetivo. Aporta desde cualquier cuenta y sigue tu progreso en tiempo real.', color: '#f59e0b' },
  { icon: 'layers', title: 'Presupuesto inteligente', desc: 'Establece límites por categoría y recibe alertas cuando te estás pasando. Visualiza disponible vs gastado.', color: '#8b5cf6' },
  { icon: 'shield', title: 'Seguridad bancaria', desc: 'Tus datos protegidos con Row Level Security. Nadie más puede ver tu información financiera.', color: '#ec4899' },
]

const steps = [
  { n: '01', title: 'Crea tu cuenta gratis', desc: 'Regístrate en menos de 1 minuto. Sin tarjeta de crédito, sin compromisos.' },
  { n: '02', title: 'Conecta tus cuentas', desc: 'Agrega tus cuentas bancarias, tarjetas y billeteras digitales manualmente.' },
  { n: '03', title: 'Toma el control', desc: 'Registra movimientos, define presupuestos y mira tu dinero trabajar para ti.' },
]

const testimonials = [
  { name: 'María José R.', role: 'Freelancer · Quito', text: 'Por fin entiendo a dónde va mi dinero cada mes. Alkima me ayudó a ahorrar $200 en el primer mes solo identificando gastos hormiga.', rating: 5, initial: 'M' },
  { name: 'Carlos V.', role: 'Emprendedor · Guayaquil', text: 'Lo que más me gusta es que puedo ver mis cuentas por cobrar vinculadas directamente a mis movimientos. Antes perdía dinero sin saberlo.', rating: 5, initial: 'C' },
  { name: 'Andrea P.', role: 'Profesora · Cuenca', text: 'La función de metas de ahorro me cambió la vida. En 4 meses llegué a mi meta para el viaje que tanto quería.', rating: 5, initial: 'A' },
]

const faqs = [
  { q: '¿Es seguro registrar mis datos financieros?', a: 'Sí. Alkima usa Supabase con Row Level Security — tus datos solo son accesibles por ti. No compartimos información con terceros ni accedemos a tus cuentas bancarias directamente.' },
  { q: '¿Puedo usar Alkima desde el celular?', a: 'Sí. Alkima es una Progressive Web App (PWA) — puedes instalarla en tu celular desde el navegador, sin necesidad de descargarla de una tienda de apps.' },
  { q: '¿Cuánto cuesta Alkima?', a: 'Alkima es completamente gratuito. Todas las funciones están disponibles sin costo, sin tarjeta de crédito y sin límites. Úsala todo lo que quieras.' },
  { q: '¿Alkima se conecta a mi banco automáticamente?', a: 'Por ahora los movimientos se registran manualmente, lo que te da control total sobre tu información. La integración bancaria automática está en nuestra hoja de ruta.' },
  { q: '¿En qué países está disponible?', a: 'Alkima está disponible en cualquier país de habla hispana. Aunque fue desarrollada en Ecuador, funciona igual de bien en Colombia, México, España y el resto de Latinoamérica.' },
]

const blogPosts = [
  { slug: 'regla-50-30-20', title: 'La regla 50/30/20: el presupuesto más simple del mundo', excerpt: 'Divide tus ingresos en 3 partes: 50% para necesidades, 30% para deseos y 20% para ahorro. Descubre cómo aplicarla en Ecuador.', cat: 'Presupuesto', read: '4 min', date: 'Mar 2026' },
  { slug: 'fondo-emergencia', title: 'Cómo construir tu fondo de emergencia desde cero', excerpt: 'El fondo de emergencia es el primer paso de cualquier plan financiero sólido. Te explicamos cuánto necesitas y cómo lograrlo.', cat: 'Ahorro', read: '5 min', date: 'Mar 2026' },
  { slug: 'deudas-bola-nieve', title: 'El método bola de nieve para salir de deudas', excerpt: 'Aprende a liquidar tus deudas de menor a mayor para ganar impulso psicológico y financiero. Casos reales de Ecuador.', cat: 'Deudas', read: '6 min', date: 'Feb 2026' },
]

const allFeatures = [
  'Cuentas bancarias ilimitadas',
  'Dashboard y flujo de caja en tiempo real',
  'Presupuesto por categoría',
  'Metas de ahorro con historial',
  'Inversiones y pólizas',
  'Cuentas por cobrar y pagar (CxC/CxP)',
  'Estado de cuenta con saldo corriente',
  'Movimientos ilimitados',
  'Exportar a CSV',
  'Soporte por email',
]

// ── Componentes ────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: `1px solid ${C.border}`, backdropFilter: 'blur(20px)', background: 'rgba(10,8,18,0.85)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#fff' }}>A</div>
          <span style={{ fontWeight: 800, fontSize: 18, color: C.text, letterSpacing: '-.03em' }}>Alkima</span>
        </a>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {[['#beneficios', 'Beneficios'], ['#como-funciona', 'Cómo funciona'], ['#blog', 'Blog'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: C.textMid, textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color .2s' }}
              onMouseEnter={e => e.target.style.color = C.text} onMouseLeave={e => e.target.style.color = C.textMid}>{label}</a>
          ))}
          <a href="https://app.alkima.app" style={{ background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '8px 20px', borderRadius: 10, fontSize: 13, fontWeight: 700 }}>
            Entrar a la app
          </a>
        </div>
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: C.text, cursor: 'pointer', padding: 4 }} className="mobile-menu-btn">
          <Icon name={open ? 'x' : 'menu'} size={22} color={C.text} />
        </button>
      </div>
      {open && (
        <div style={{ background: C.darkMid, borderTop: `1px solid ${C.border}`, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[['#beneficios', 'Beneficios'], ['#como-funciona', 'Cómo funciona'], ['#blog', 'Blog'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ color: C.textMid, textDecoration: 'none', fontSize: 15, fontWeight: 500, padding: '8px 0' }}>{label}</a>
          ))}
          <a href="https://app.alkima.app" style={{ background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '12px 20px', borderRadius: 10, fontSize: 14, fontWeight: 700, textAlign: 'center', marginTop: 8 }}>
            Entrar a la app
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      {/* Orbes */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle,rgba(27,94,247,.15) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(8,145,178,.12) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '45%', left: '30%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(16,185,129,.08) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(27,94,247,.12)', border: '1px solid rgba(27,94,247,.25)', borderRadius: 99, padding: '6px 16px', fontSize: 12, fontWeight: 600, color: '#60a5fa', marginBottom: 32 }}>
          <Icon name="zap" size={13} color="#60a5fa" />
          La app de finanzas que faltaba en Latinoamérica
        </div>

        <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, color: C.text, margin: '0 0 24px', lineHeight: 1.05, letterSpacing: '-.04em' }}>
          Tu dinero,<br />
          <span style={{ background: 'linear-gradient(90deg,#3b7fff,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>bajo control.</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: C.textMid, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7, fontWeight: 400 }}>
          Alkima transforma la forma en que entiendes tu dinero. Flujo de caja, inversiones, metas, CxC/CxP y presupuesto — todo en un solo lugar.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <a href="https://app.alkima.app" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, boxShadow: '0 8px 32px rgba(27,94,247,.35)' }}>
            Empezar gratis <Icon name="arrow" size={16} color="#fff" />
          </a>
          <a href="#como-funciona" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.06)', color: C.text, textDecoration: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, border: `1px solid ${C.border}` }}>
            Ver cómo funciona
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[['100%', 'Gratuito para empezar'], ['6', 'Módulos financieros'], ['∞', 'Cuentas bancarias']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: C.text, letterSpacing: '-.04em' }}>{val}</div>
              <div style={{ fontSize: 12, color: C.textMid, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section id="beneficios" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.accent, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>BENEFICIOS</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: C.text, margin: '0 0 16px', letterSpacing: '-.04em' }}>Todo lo que necesitas para<br />controlar tu economía</h2>
        <p style={{ fontSize: 16, color: C.textMid, maxWidth: 500, margin: '0 auto' }}>Alkima fue diseñado para personas reales, con finanzas reales.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {benefits.map(b => (
          <div key={b.title} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: '28px 28px', transition: 'border-color .2s, transform .2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = b.color + '44'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'none' }}>
            <div style={{ width: 44, height: 44, background: b.color + '18', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <Icon name={b.icon} size={20} color={b.color} />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: '0 0 10px', letterSpacing: '-.02em' }}>{b.title}</h3>
            <p style={{ fontSize: 14, color: C.textMid, margin: 0, lineHeight: 1.65 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="como-funciona" style={{ padding: '100px 24px', background: 'rgba(255,255,255,.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.teal, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>CÓMO FUNCIONA</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: C.text, margin: 0, letterSpacing: '-.04em' }}>En 3 pasos estás listo</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ textAlign: 'center', padding: '32px 24px', position: 'relative' }}>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: 40, right: -16, color: C.border, fontSize: 24 }}>→</div>
              )}
              <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: 900, fontSize: 18, color: '#fff' }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: '0 0 12px', letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.textMid, margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://app.alkima.app" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, boxShadow: '0 8px 32px rgba(27,94,247,.3)' }}>
            Crear mi cuenta gratis <Icon name="arrow" size={16} color="#fff" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>TESTIMONIOS</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: C.text, margin: '0 0 16px', letterSpacing: '-.04em' }}>Lo que dicen nuestros usuarios</h2>
        <p style={{ fontSize: 16, color: C.textMid }}>Personas reales que transformaron sus finanzas con Alkima.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {testimonials.map(t => (
          <div key={t.name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: '28px' }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
              {Array(t.rating).fill(0).map((_, i) => <Icon key={i} name="star" size={14} color="#f59e0b" />)}
            </div>
            <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic' }}>"{t.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 16 }}>{t.initial}</div>
              <div>
                <div style={{ fontWeight: 600, color: C.text, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: C.textMid }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="planes" style={{ padding: '100px 24px', background: 'rgba(255,255,255,.02)', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.green, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>PRECIO</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: C.text, margin: '0 0 16px', letterSpacing: '-.04em' }}>100% gratuito.<br />Sin letra pequeña.</h2>
          <p style={{ fontSize: 16, color: C.textMid, maxWidth: 480, margin: '0 auto' }}>Todas las funciones disponibles para todos los usuarios, sin costo, sin límites y sin tarjeta de crédito.</p>
        </div>
        <div style={{ background: 'rgba(27,94,247,.08)', border: '1.5px solid #1B5EF7', borderRadius: 24, padding: '40px 36px', marginBottom: 32 }}>
          <div style={{ fontSize: 56, fontWeight: 900, color: C.text, letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>$0<span style={{ fontSize: 16, fontWeight: 400, color: C.textMid }}> / siempre</span></div>
          <p style={{ fontSize: 14, color: C.textMid, margin: '0 0 32px' }}>Todo incluido, sin restricciones.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32, textAlign: 'left' }}>
            {allFeatures.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: C.textMid }}>
                <span style={{ flexShrink: 0 }}><Icon name="check" size={15} color={C.green} /></span>{f}
              </div>
            ))}
          </div>
          <a href="https://app.alkima.app" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '14px 40px', borderRadius: 12, fontWeight: 700, fontSize: 15, boxShadow: '0 8px 24px rgba(27,94,247,.3)' }}>
            Crear cuenta gratis <Icon name="arrow" size={16} color="#fff" />
          </a>
        </div>
        <p style={{ fontSize: 12, color: C.textLight }}>¿Tienes preguntas? Escríbenos a hola@alkima.app</p>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>BLOG</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: C.text, margin: '0 0 16px', letterSpacing: '-.04em' }}>Aprende sobre<br />finanzas personales</h2>
        <p style={{ fontSize: 16, color: C.textMid }}>Artículos prácticos para que tu dinero trabaje para ti.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {blogPosts.map(post => (
          <article key={post.slug} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden', cursor: 'pointer', transition: 'transform .2s, border-color .2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = C.border }}>
            <div style={{ background: 'linear-gradient(135deg,rgba(27,94,247,.15),rgba(8,145,178,.1))', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="book" size={40} color="rgba(255,255,255,.2)" />
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
                <span style={{ background: 'rgba(139,92,246,.15)', color: '#a78bfa', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{post.cat}</span>
                <span style={{ fontSize: 11, color: C.textLight }}>{post.read} de lectura</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, margin: '0 0 10px', letterSpacing: '-.02em', lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ fontSize: 13, color: C.textMid, margin: '0 0 16px', lineHeight: 1.6 }}>{post.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.accent, fontWeight: 600 }}>
                Leer artículo <Icon name="arrow" size={13} color={C.accent} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section style={{ padding: '100px 24px', background: 'rgba(255,255,255,.02)', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.amber, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: C.text, margin: 0, letterSpacing: '-.04em' }}>Preguntas frecuentes</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${open === i ? 'rgba(27,94,247,.3)' : C.border}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color .2s' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{faq.q}</span>
                <span style={{ flexShrink: 0, color: C.textMid }}><Icon name={open === i ? 'minus' : 'plus'} size={16} color={C.textMid} /></span>
              </button>
              {open === i && (
                <div style={{ padding: '0 22px 18px', fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle,rgba(27,94,247,.12) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: C.text, margin: '0 0 20px', letterSpacing: '-.04em', lineHeight: 1.1 }}>
          Empieza hoy.<br />
          <span style={{ background: 'linear-gradient(90deg,#3b7fff,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Es gratis.</span>
        </h2>
        <p style={{ fontSize: 17, color: C.textMid, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Únete a los usuarios que ya transformaron la forma en que manejan su dinero con Alkima.
        </p>
        <a href="https://app.alkima.app" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(90deg,#1B5EF7,#0891B2)', color: '#fff', textDecoration: 'none', padding: '16px 40px', borderRadius: 14, fontSize: 16, fontWeight: 800, boxShadow: '0 12px 40px rgba(27,94,247,.4)', letterSpacing: '-.01em' }}>
          Crear cuenta gratis <Icon name="arrow" size={18} color="#fff" />
        </a>
        <p style={{ fontSize: 12, color: C.textLight, marginTop: 16 }}>Sin tarjeta de crédito · Cancela cuando quieras</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#1B5EF7,#0891B2)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 16, color: '#fff' }}>A</div>
              <span style={{ fontWeight: 800, fontSize: 16, color: C.text }}>Alkima</span>
            </div>
            <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.6, margin: 0 }}>Tu dinero, bajo control. La app de finanzas personales para Latinoamérica.</p>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.textMid, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>Producto</div>
            {[['#beneficios', 'Beneficios'], ['#como-funciona', 'Cómo funciona'], ['#blog', 'Blog'], ['https://app.alkima.app', 'Ir a la app']].map(([href, label]) => (
              <a key={href} href={href} style={{ display: 'block', fontSize: 13, color: C.textMid, textDecoration: 'none', marginBottom: 8, transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = C.text} onMouseLeave={e => e.target.style.color = C.textMid}>{label}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.textMid, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>Recursos</div>
            {[['#blog', 'Blog'], ['#faq', 'FAQ']].map(([href, label]) => (
              <a key={href} href={href} style={{ display: 'block', fontSize: 13, color: C.textMid, textDecoration: 'none', marginBottom: 8, transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = C.text} onMouseLeave={e => e.target.style.color = C.textMid}>{label}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.textMid, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>Legal</div>
            {[['#', 'Términos de servicio'], ['#', 'Política de privacidad'], ['#', 'Política de cookies']].map(([href, label]) => (
              <a key={label} href={href} style={{ display: 'block', fontSize: 13, color: C.textMid, textDecoration: 'none', marginBottom: 8, transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = C.text} onMouseLeave={e => e.target.style.color = C.textMid}>{label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: C.textLight, margin: 0 }}>© 2026 Alkima. Todos los derechos reservados.</p>
          <p style={{ fontSize: 12, color: C.textLight, margin: 0 }}>Hecho con ♥ en Ecuador</p>
        </div>
      </div>
    </footer>
  )
}

// ── Estilos globales responsive ────────────────────────────────────────────────
const globalStyles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: #0a0812; }
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: block !important; }
  }
  @media (min-width: 769px) {
    .mobile-menu-btn { display: none !important; }
  }
`

// ── Página principal ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
