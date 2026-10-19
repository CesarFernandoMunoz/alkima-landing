// Configuración central del sitio. Nada de nombres, correos ni datos legales va escrito en las páginas:
// se cambian aquí (o por variable de entorno) para poder reutilizar el sitio con otra marca o empresa.

export const site = {
  nombre: 'Alkima Labs',
  marca: 'Alkima',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alkima.app', // alkima.app redirige a www en Vercel
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.alkima.app',
  correo: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hola@alkima.app',
  // Botón flotante de WhatsApp. Número en formato internacional sin "+" ni el 0 inicial (Ecuador: 593 + 9 dígitos).
  // Vacío = el botón no aparece. El mensaje inicial cambia según la página desde la que escriben.
  whatsapp: {
    numero: process.env.NEXT_PUBLIC_WHATSAPP ?? '593983501807',
    ocultarEn: ['/privacidad', '/terminos', '/cookies'],
    mensajes: {
      inicio: 'Hola, vengo de alkima.app y quiero conocer sus soluciones para mi empresa.',
      producto: 'Hola, vengo de alkima.app y me interesa {producto}.',
      finanzas: 'Hola, tengo una consulta sobre Alkima Finanzas.',
      blog: 'Hola, leí el blog de alkima.app y tengo una consulta.',
    },
  },
  redes: {
    linkedin: 'https://www.linkedin.com/company/alkima-labs',
    github: 'https://github.com/alkimalabs',
  },
  pais: 'Ecuador',
  ciudad: 'Quito',
  locale: 'es_EC',

  // Datos legales: dejar vacío lo que todavía no exista. El pie de página solo muestra lo que esté lleno.
  legal: {
    titular: 'César Muñoz', // persona responsable del sitio
    razonSocial: '', // completar cuando se constituya la S.A.S.
    ruc: '', // completar cuando el RUC esté activo
    fechaActualizacionLegal: '2026-10-19',
  },

  // Cada producto responde una pregunta concreta que una gerencia se hace a diario.
  // estado: 'produccion' | 'piloto' | 'disponible'
  productos: [
    {
      id: 'radar',
      nombre: 'Radar Empresarial',
      pregunta: '¿Le vendo a crédito a este cliente, y cuánto?',
      respuesta:
        'Lee los balances públicos de la Superintendencia de Compañías, asigna una calificación de AAA a D, estima la probabilidad de cierre y sugiere un cupo según su política de crédito.',
      estado: 'disponible',
      desde: 'Septiembre de 2026',
      enlace: '/productos/radar',
      textoEnlace: 'Ver Radar Empresarial',
      enlaceVivo: 'https://radar.alkima.app',
      cifras: [
        ['+150.000', 'compañías con balance'],
        ['633.000', 'balances analizados'],
        ['5', 'fuentes oficiales'],
      ],
      nota: 'La calificación y el cupo son referenciales; Radar no es un buró de crédito.',
    },
    {
      id: 'hoja-viva',
      nombre: 'Hoja Viva',
      pregunta: '¿Esta entrega llegó, a quién, y con qué evidencia?',
      respuesta:
        'Prueba de entrega y seguimiento de rutas para distribución. Cada parada queda registrada con foto, hora y motivo cuando no se entrega.',
      estado: 'produccion',
      enlace: '/productos/hoja-viva',
      textoEnlace: 'Ver Hoja Viva',
    },
    {
      id: 'taller',
      nombre: 'Taller y servicio técnico',
      pregunta: '¿En qué estado está el equipo que dejó el cliente?',
      respuesta:
        'Tickets y trazabilidad de equipos en talleres y laboratorios de servicio técnico, desde el ingreso hasta la entrega.',
      estado: 'piloto',
      desde: 'Octubre de 2026',
      enlace: '/productos/taller',
      textoEnlace: 'Ver Taller',
    },
    {
      id: 'cobranzas',
      nombre: 'CRM comercial y de cobranzas',
      pregunta: '¿A cuánto vendo, qué cotizo y quién me debe?',
      respuesta:
        'Consulta de precios y stock, cotizaciones con margen y aprobación, cartera por riesgo, promesas y disputas, tablero de días de cobro, estado de cuenta en PDF, WhatsApp y portal del cliente. Convive con su ERP.',
      estado: 'produccion',
      desde: 'Octubre de 2026',
      enlace: '/productos/cobranzas',
      textoEnlace: 'Ver el CRM',
    },
    {
      id: 'finanzas',
      nombre: 'Alkima Finanzas',
      pregunta: '¿A dónde se va mi dinero cada mes?',
      respuesta:
        'App de finanzas personales: cuentas, tarjetas, presupuesto, metas, deudas y patrimonio. Gratis y sin trucos: sin planes de pago, sin anuncios y sin vender sus datos. Es nuestra carta de presentación.',
      estado: 'abierto',
      enlace: process.env.NEXT_PUBLIC_APP_URL || 'https://app.alkima.app',
      textoEnlace: 'Es gratis',
    },
  ],

  // Por qué nosotros: lo que sostiene cada entrega.
  pilares: [
    ['Profesionales con casos reales', 'Quien diseña la solución ha vivido la operación: cartera, distribución, servicio técnico, cierre contable. Entendemos el problema antes de abrir el editor.'],
    ['Inteligencia artificial aplicada', 'La usamos donde ahorra horas de verdad: leer comprobantes, clasificar, predecir cobros, redactar. Siempre con una persona revisando antes de entregar.'],
    ['Sus datos a salvo', 'Datos separados por empresa, acceso por rol, bitácora de cada cambio y pruebas con el usuario más restringido antes de publicar.'],
  ],

  // Producto para personas, aparte de los de empresa.
  finanzas: {
    nombre: 'Alkima Finanzas',
    resumen: 'App gratuita de finanzas personales: flujo de caja, presupuesto, metas e inversiones.',
    enlace: '/finanzas',
  },
}

export const etiquetasEstado = {
  produccion: 'En producción',
  piloto: 'En piloto',
  disponible: 'Disponible',
  abierto: 'Abierto y gratis',
}

/** Enlace para abrir WhatsApp con un mensaje inicial. Si no hay número configurado, cae al correo de contacto. */
export function enlaceWhatsApp(mensaje, asuntoCorreo = 'Consulta') {
  const n = site.whatsapp?.numero
  return n
    ? `https://wa.me/${n}?text=${encodeURIComponent(mensaje)}`
    : `mailto:${site.correo}?subject=${encodeURIComponent(asuntoCorreo)}`
}
