import { PaginaLegal, H2, P, UL } from '../../components/Legal'
import { site } from '../../config/site'

export const metadata = { title: 'Política de privacidad', alternates: { canonical: `${site.url}/privacidad` } }

const enlace = { color: '#94a3b8' }

export default function Privacidad() {
  const correo = <a href={`mailto:${site.correo}`} style={enlace}>{site.correo}</a>
  return (
    <PaginaLegal titulo="Política de privacidad">
      <P>Esta política explica qué datos personales tratamos en este sitio y en {site.finanzas.nombre}, para qué, con quién los compartimos, cuánto tiempo los guardamos y cuáles son sus derechos, conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP). Está escrita para entenderse sin ser abogado.</P>

      <H2>1. Quién es responsable</H2>
      <P>El responsable del tratamiento es quien figura al inicio de esta página. Para cualquier tema de datos personales escriba a {correo}.</P>

      <H2>2. Qué datos tratamos</H2>
      <UL>
        <li><strong>Su cuenta:</strong> correo, nombre y la fecha y versión de los términos que aceptó. La contraseña la guarda cifrada nuestro proveedor de acceso; nadie de nuestro equipo puede verla.</li>
        <li><strong>Lo que usted registra:</strong> cuentas, movimientos, presupuestos, metas, deudas, inversiones, recordatorios y categorías. Usted decide qué anota. La aplicación no se conecta a sus bancos.</li>
        <li><strong>Fotos de metas (opcional):</strong> si sube una imagen para una meta, se guarda en un almacenamiento privado al que solo acceden las personas de ese espacio.</li>
        <li><strong>Hogares compartidos:</strong> los correos de las personas que usted invita y quién registró cada gasto. Usted es quien nos entrega el correo de la persona invitada; úselo solo con su conocimiento.</li>
        <li><strong>Familia:</strong> los perfiles de niñas, niños y adolescentes que crea un adulto (nombre o apodo, mesada, tareas, metas y lo que se le entrega). Si el adulto le da una cuenta propia a un adolescente, guardamos su correo mientras tenga ese acceso.</li>
        <li><strong>Avisos por correo:</strong> si los activa, guardamos esa preferencia y con cuántos días de anticipación quiere el aviso.</li>
        <li><strong>Registros técnicos:</strong> una bitácora de quién cambió qué y cuándo (para seguridad y para poder corregir errores), qué funciones se usan (sin el contenido de lo que registra) y cuándo y con qué resultado se envió cada correo (sin guardar el texto del correo).</li>
        <li><strong>Si nos escribe</strong> por correo o por WhatsApp: su nombre, su correo o número de teléfono y su mensaje, solo para responderle.</li>
      </UL>
      <P><strong>Lo que no hacemos:</strong> no pedimos su ubicación, cámara ni contactos; no rastreamos si abre los correos ni en qué enlaces hace clic; no vendemos sus datos ni los usamos para publicidad de terceros; no tomamos decisiones automáticas sobre usted.</P>

      <H2>3. Para qué y con qué base</H2>
      <UL>
        <li><strong>Prestar el servicio que usted pidió</strong> (crear su cuenta, guardar y mostrar su información, compartir un hogar, enviar los correos de su cuenta y de las invitaciones): es la ejecución del acuerdo que acepta al registrarse.</li>
        <li><strong>Funciones opcionales</strong> (fotos de metas, avisos de recordatorios por correo, cuenta propia de un adolescente): su consentimiento, que puede retirar en cualquier momento desde la aplicación.</li>
        <li><strong>Seguridad, prevención de abusos y mejora del servicio</strong> (bitácora, registros técnicos y estadísticas de uso sin contenido): nuestro interés legítimo, sin afectar sus derechos.</li>
        <li><strong>Cumplir la ley</strong> cuando una autoridad competente lo exija.</li>
      </UL>

      <H2>4. Niñas, niños y adolescentes</H2>
      <P>Los perfiles de menores los crea y administra su padre, madre o representante, que es quien da el consentimiento y responde por la información que registra. Guardamos lo mínimo para que la función sirva. Un adolescente solo tiene cuenta propia si el adulto lo invita; con ella ve únicamente su alcancía, su meta, sus tareas y su historial, nunca las finanzas del hogar. El adulto puede quitarle el acceso cuando quiera y en ese momento borramos su correo. A los menores no les enviamos contenido promocional.</P>

      <H2>5. Los correos que enviamos</H2>
      <P>Enviamos correos de servicio: confirmar su cuenta, cambiar su contraseña, invitaciones a un hogar o a la cuenta de un adolescente y, solo si los activa, avisos de recordatorios. Algunos incluyen al final un bloque breve que presenta los servicios de {site.nombre} para empresas; los de seguridad y los dirigidos a adolescentes no lo llevan. Los enlaces pueden llevar una marca que solo indica de qué tipo de correo vino la visita, sin identificarlo a usted. Los avisos de recordatorios se apagan desde la propia aplicación.</P>

      <H2>6. Con quién los compartimos</H2>
      <P>No compartimos sus datos con terceros, salvo con los proveedores técnicos que necesitamos para operar, que los tratan por encargo nuestro y solo para ese fin:</P>
      <UL>
        <li><strong>Supabase:</strong> base de datos, acceso y archivos.</li>
        <li><strong>Vercel:</strong> alojamiento del sitio y de la aplicación.</li>
        <li><strong>Resend:</strong> envío de los correos.</li>
        <li><strong>Zoho:</strong> el buzón donde recibimos sus mensajes.</li>
        <li><strong>WhatsApp (Meta):</strong> si decide escribirnos por ese medio; el botón del sitio solo abre la conversación y no instala nada de Meta en la página.</li>
      </UL>
      <P>Estos proveedores tienen sus servidores principalmente en Estados Unidos, por lo que hay una transferencia internacional de datos. La hacemos con proveedores que ofrecen acuerdos de tratamiento de datos, cifrado en tránsito y en reposo y controles de seguridad reconocidos. También entregaremos datos cuando una autoridad competente lo ordene conforme a la ley.</P>

      <H2>7. Cómo los protegemos</H2>
      <P>La información de cada usuario y de cada hogar está separada con reglas de acceso en la propia base de datos: nadie ve un espacio del que no es miembro, y cada persona ve solo lo que su rol le permite. Las sesiones son cortas, las contraseñas que aparecen en filtraciones conocidas se rechazan, los archivos se guardan en almacenamiento privado, la administración usa doble factor de autenticación y cada cambio queda en la bitácora. Antes de publicar, probamos las reglas simulando al usuario con menos permisos.</P>

      <H2>8. Cuánto tiempo los guardamos</H2>
      <UL>
        <li>Su información, mientras mantenga su cuenta. Si elimina su cuenta desde Ajustes, se borran de inmediato su cuenta, los espacios que creó con todo su contenido y su registro de cambios.</li>
        <li>La bitácora de cambios, 12 meses. Los registros de uso y de correos enviados, 6 meses.</li>
        <li>En la función de familia, las tareas rechazadas se borran a los 90 días y las aprobadas a los 2 años.</li>
        <li>Las copias de seguridad de nuestro proveedor se renuevan solas en pocos días; lo borrado desaparece también de ellas en ese plazo.</li>
        <li>En su propio equipo, la aplicación guarda una copia de sus datos para abrir rápido y funcionar sin conexión; se borra al cerrar sesión.</li>
      </UL>

      <H2>9. Sus derechos</H2>
      <P>Usted tiene derecho a acceder a sus datos, rectificarlos, eliminarlos, oponerse a su tratamiento, pedir su portabilidad o la suspensión del tratamiento, y a no ser objeto de decisiones basadas solo en tratamientos automatizados. Mucho lo puede hacer usted mismo en la aplicación: corregir lo que registró, <strong>descargar todos sus datos</strong> en un archivo y <strong>eliminar su cuenta</strong> desde Ajustes. Para lo demás escriba a {correo}; responderemos dentro de los plazos que fija la ley. Si no queda conforme, puede acudir a la Superintendencia de Protección de Datos Personales.</P>

      <H2>10. Si el servicio cambia o se cierra</H2>
      <P>Si dejamos de ofrecer {site.finanzas.nombre}, le avisaremos con anticipación para que pueda descargar sus datos, y luego los eliminaremos según esta política, como se explica en los términos de servicio.</P>

      <H2>11. Cambios en esta política</H2>
      <P>Publicaremos cada nueva versión en esta página con su fecha. Si el cambio es importante, se lo avisaremos dentro de la aplicación.</P>
    </PaginaLegal>
  )
}
