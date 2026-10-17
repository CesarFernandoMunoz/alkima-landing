// Detalle de cada producto para /productos/[id]. Las pantallas se guardan en public/productos/<id>/ con datos
// de prueba o difuminados: nunca información real de clientes.
export const detalles = {
  'hoja-viva': {
    titular: 'Cada entrega con evidencia, cada ruta bajo control.',
    resumen:
      'Hoja Viva reemplaza la hoja de ruta en papel de una distribuidora: el conductor recibe sus paradas en el celular, registra cada entrega con foto y hora, y la oficina ve en tiempo real qué llegó, qué no y por qué.',
    paraQuien: 'Distribuidoras y empresas con flota propia o tercerizada que entregan a decenas de clientes por día y necesitan prueba de entrega sin llamar al chofer.',
    modulos: [
      ['Rutas del día', 'La oficina arma la ruta desde los pedidos del ERP y la asigna a un conductor. Cada parada lleva cliente, dirección, bultos y observaciones.'],
      ['Prueba de entrega', 'El conductor marca entregado con foto, hora y ubicación. Si no se entrega, elige el motivo de un catálogo y deja evidencia.'],
      ['Seguimiento en vivo', 'Un tablero muestra el avance de cada ruta, las paradas pendientes y los problemas, sin preguntar por teléfono.'],
      ['Portal del cliente', 'El cliente consulta el estado de su pedido con un enlace temporal, sin usuario ni contraseña.'],
      ['Reportes', 'Entregas por conductor, motivos de no entrega, tiempos por zona y cumplimiento del día, exportables.'],
      ['Multiempresa y roles', 'Cada empresa ve solo su operación; jefes de despacho, conductores y administración entran a lo que les corresponde.'],
    ],
    flujo: ['El ERP genera los pedidos del día', 'Despacho arma y asigna las rutas', 'El conductor entrega y registra evidencia', 'La oficina y el cliente ven el estado al instante'],
    entrega: ['En producción desde 2026 en una distribuidora de Quito', 'Datos separados por empresa con bitácora de cambios', 'Ambiente de pruebas separado y despliegue reproducible', 'Manual de usuario y nota técnica incluidos'],
    pantallas: [
      { src: '/productos/hoja-viva/01-rutas.jpg', pie: 'La ruta del día en el celular del conductor: paradas, direcciones y observaciones del cliente', movil: true },
      { src: '/productos/hoja-viva/02-entrega.jpg', pie: 'Registro de una entrega: foto de la guía firmada, quién recibe, entrega parcial, no entregado o consulta a SAC', movil: true },
      { src: '/productos/hoja-viva/03-armado.jpg', pie: 'Armado de rutas en la oficina: bandeja de despachos que esperan ruta, alertas y asignación al camión' },
      { src: '/productos/hoja-viva/04-tablero.jpg', pie: 'Tablero de avance: rutas, paradas, hora media de salida y de última entrega, reintentos y novedades' },
      { src: '/productos/hoja-viva/05-incidencias.jpg', pie: 'Incidencias de entrega: causa, área de origen, plazo de 48 horas y cierre por Servicio al Cliente' },
    ],
  },
  taller: {
    titular: 'Del ingreso del equipo a la entrega, sin perder el hilo.',
    resumen:
      'Un sistema de tickets para talleres y laboratorios de servicio técnico: cada equipo que entra tiene un expediente con su estado, su historial, sus fotos y la comunicación con el cliente.',
    paraQuien: 'Talleres, laboratorios de calibración y áreas de servicio técnico de distribuidores de equipos, que reciben equipos de clientes y deben responder "¿en qué estado está?".',
    modulos: [
      ['Recepción', 'Se registra el equipo con serie, falla reportada, accesorios y fotos. El cliente recibe un comprobante de ingreso.'],
      ['Diagnóstico y cotización', 'El técnico documenta el diagnóstico; se cotiza y se registra la aprobación del cliente antes de reparar.'],
      ['Estados y trazabilidad', 'Recibido, en diagnóstico, esperando aprobación, en reparación, listo, entregado. Cada cambio queda con quién y cuándo.'],
      ['Comunicación', 'Avisos al cliente en cada hito y consulta del estado con un enlace, sin llamadas.'],
      ['Tablero del taller', 'Carga por técnico, equipos detenidos, tiempos por etapa y lo que vence hoy.'],
      ['Catálogos y multiempresa', 'Tipos de equipo, fallas y servicios configurables por empresa; roles para recepción, técnicos y jefatura.'],
    ],
    flujo: ['El cliente deja el equipo y recibe su comprobante', 'Diagnóstico y cotización con aprobación', 'Reparación con registro de repuestos y horas', 'Aviso al cliente y entrega con firma'],
    entrega: ['En piloto desde octubre de 2026 en un laboratorio de equipos de detección de gases', 'Ambiente de demostración separado de producción', 'Datos separados por empresa, roles y bitácora', 'Manual de usuario y nota técnica incluidos'],
    pantallas: [
      { src: '/productos/taller/01-tickets.png', pie: 'Lista de tickets por estado' },
      { src: '/productos/taller/02-expediente.png', pie: 'Expediente de un equipo con su historial' },
      { src: '/productos/taller/03-tablero.png', pie: 'Tablero de carga del taller' },
    ],
  },
  cobranzas: {
    titular: 'Quién me debe, cuánto, y qué va a pasar con cada cobro.',
    resumen:
      'Un CRM de cartera que vive junto al ERP: toma las facturas pendientes, las ordena por riesgo, registra promesas y disputas, y le dice a cada asesor qué hacer hoy. Con estado de cuenta en PDF, avisos por WhatsApp y portal para que el cliente vea lo suyo.',
    paraQuien: 'Empresas que venden a crédito y gestionan cobranza con varios asesores: distribuidoras, importadoras, proveedores industriales.',
    modulos: [
      ['Cartera por asesor', 'Cada asesor ve sus clientes, facturas vencidas y por vencer, con el riesgo calculado a partir del comportamiento de pago.'],
      ['Promesas y disputas', 'Una promesa de pago con fecha y monto; una disputa con motivo y responsable. Nada se queda en la memoria del asesor.'],
      ['Tablero de cobranza', 'Días de cobro, efectividad, cartera vencida por tramo y proyección de cierre del mes.'],
      ['Estado de cuenta y recordatorios', 'Estado de cuenta en PDF listo para enviar y recordatorios por WhatsApp con la API de Meta.'],
      ['Portal del cliente', 'El cliente consulta sus facturas y comprobantes con un enlace seguro, sin llamar.'],
      ['Lectura de comprobantes con IA', 'La foto de una transferencia se convierte en un registro de pago sugerido que el asesor confirma.'],
    ],
    flujo: ['El ERP entrega las facturas pendientes', 'El sistema ordena por riesgo y asigna tareas', 'El asesor gestiona: promesa, disputa, pago', 'La gerencia ve la proyección y el avance'],
    entrega: ['En producción desde octubre de 2026 en una distribuidora de Quito', 'Convive con el ERP existente, sin reemplazarlo', 'Datos separados por empresa, roles y bitácora', 'Manual de usuario y nota técnica incluidos'],
    pantallas: [
      { src: '/productos/cobranzas/01-cartera.png', pie: 'Cartera por asesor con riesgo por cliente' },
      { src: '/productos/cobranzas/02-tablero.png', pie: 'Tablero de cobranza y proyección' },
      { src: '/productos/cobranzas/03-estado.png', pie: 'Estado de cuenta listo para enviar' },
    ],
  },
  radar: {
    titular: '¿Le vendo a crédito a esta empresa? Una respuesta en segundos.',
    resumen:
      'Radar Empresarial lee los balances públicos de la Superintendencia de Compañías, asigna una calificación de AAA a D, estima la probabilidad de cierre y sugiere un cupo de crédito según la política de cada empresa.',
    paraQuien: 'Gerencias comerciales y de crédito que aprueban cupos a clientes y proveedores en Ecuador.',
    modulos: [
      ['Búsqueda por RUC o nombre', 'Más de 150.000 compañías con balance disponible y 633.000 balances analizados.'],
      ['Calificación y probabilidad de cierre', 'Un modelo propio resume liquidez, endeudamiento, rentabilidad y tendencia en una calificación clara.'],
      ['Cupo sugerido', 'Según el tamaño del cliente y la política de crédito de su empresa, un monto de referencia para empezar la conversación.'],
      ['Comparación y seguimiento', 'Compare empresas y guarde las que le importan para revisarlas cuando publiquen un nuevo balance.'],
    ],
    flujo: ['Busque la empresa', 'Vea calificación, probabilidad y cupo', 'Compare y guarde', 'Decida con datos oficiales'],
    entrega: ['Disponible desde septiembre de 2026 en radar.alkima.app', 'Cinco fuentes oficiales', 'La calificación y el cupo son referenciales; Radar no es un buró de crédito'],
    pantallas: [
      { src: '/productos/radar/01-busqueda.jpg', pie: 'Portada de Radar: búsqueda y una ficha real con calificación, cupo sugerido y señales del día' },
      { src: '/productos/radar/02-directorio.jpg', pie: 'Directorio de 95.000 compañías por provincia y sector' },
    ],
    enlaceVivo: 'https://radar.alkima.app',
  },
}
