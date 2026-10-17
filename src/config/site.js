// Configuración central del sitio. Nada de nombres, correos ni datos legales va escrito en las páginas:
// se cambian aquí (o por variable de entorno) para poder reutilizar el sitio con otra marca o empresa.

export const site = {
  nombre: 'Alkima Labs',
  marca: 'Alkima',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alkima.app', // alkima.app redirige a www en Vercel
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.alkima.app',
  correo: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hola@alkima.app',
  pais: 'Ecuador',
  ciudad: 'Quito',
  locale: 'es_EC',

  // Datos legales: dejar vacío lo que todavía no exista. El pie de página solo muestra lo que esté lleno.
  legal: {
    titular: 'César Muñoz', // persona responsable del sitio
    razonSocial: '', // completar cuando se constituya la S.A.S.
    ruc: '', // completar cuando el RUC esté activo
    fechaActualizacionLegal: '2026-10-12',
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
      nombre: 'CRM de cartera y cobranzas',
      pregunta: '¿Quién me debe, cuánto y cuándo me paga?',
      respuesta:
        'Cartera por asesor con riesgo por cliente, promesas de pago y disputas, tablero de días de cobro, estado de cuenta en PDF, recordatorios por WhatsApp y portal del cliente. Convive con su ERP.',
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
        'App de finanzas personales: cuentas, tarjetas, presupuesto, metas, deudas y patrimonio. Abierta y gratis: es nuestra carta de presentación de cómo construimos.',
      estado: 'abierto',
      enlace: process.env.NEXT_PUBLIC_APP_URL || 'https://app.alkima.app',
      textoEnlace: 'Pruébala gratis',
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
