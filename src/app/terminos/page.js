import { PaginaLegal, H2, P, UL } from '../../components/Legal'
import { site } from '../../config/site'

export const metadata = { title: 'Términos de servicio', alternates: { canonical: `${site.url}/terminos` } }

const enlace = { color: '#94a3b8' }

export default function Terminos() {
  const app = site.finanzas.nombre
  const correo = <a href={`mailto:${site.correo}`} style={enlace}>{site.correo}</a>
  return (
    <PaginaLegal titulo="Términos de servicio">
      <P>Al usar este sitio o {app}, usted acepta estos términos y la <a href="/privacidad" style={enlace}>política de privacidad</a>. Si no está de acuerdo, no use el servicio.</P>

      <H2>1. El servicio</H2>
      <P>{site.nombre} desarrolla software de operaciones y finanzas a medida para empresas y ofrece {app}, una aplicación de finanzas personales. Los desarrollos a medida se rigen por el contrato o la propuesta firmada con cada cliente, no por estos términos.</P>

      <H2>2. {app}</H2>
      <UL>
        <li>Es gratuita y se ofrece tal como está. Si algún día se ofrecen planes de pago, se avisará con anticipación y no se cobrará nada sin su aceptación expresa.</li>
        <li>Los movimientos se registran a mano o importando un archivo; la aplicación no se conecta a sus bancos ni mueve dinero.</li>
        <li>Lo que muestra (saldos, patrimonio, planes de pago de deudas, metas) es una ayuda para organizarse y no constituye asesoría financiera, de inversión, legal ni tributaria.</li>
      </UL>

      <H2>3. Su cuenta</H2>
      <P>Para crear una cuenta propia debe ser mayor de edad, salvo los adolescentes que reciben una invitación de su padre, madre o representante (punto 5). Usted responde por mantener en secreto su contraseña, por la exactitud de lo que registra y por lo que se haga desde su cuenta.</P>

      <H2>4. Hogares compartidos</H2>
      <UL>
        <li>Quien crea un hogar es su dueño: invita a otras personas, elige si pueden registrar o solo ver, y puede quitarlas o eliminar el hogar.</li>
        <li>Lo que se registra en un hogar lo ven todos sus miembros. Sus espacios personales siguen siendo solo suyos.</li>
        <li>Invite únicamente a personas que estén de acuerdo en recibir la invitación. Cualquier miembro puede salir del hogar cuando quiera.</li>
      </UL>

      <H2>5. Familia y menores de edad</H2>
      <UL>
        <li>Los perfiles de niñas, niños y adolescentes los crea un adulto, que declara ser su padre, madre o representante y responde por la información que registra y por el uso que el menor haga de la aplicación.</li>
        <li>La alcancía, la mesada y las recompensas son un registro para enseñar a administrar el dinero: no son dinero real, una cuenta bancaria ni un medio de pago.</li>
        <li>La cuenta propia de un adolescente solo existe por invitación del adulto, que puede quitarla en cualquier momento. Con ella el adolescente ve solo lo suyo, nunca las finanzas del hogar.</li>
      </UL>

      <H2>6. Correos</H2>
      <P>Al usar el servicio recibirá los correos necesarios para su cuenta (confirmación, cambio de contraseña e invitaciones) y, solo si los activa, avisos de recordatorios, que puede apagar desde la aplicación. Algunos correos incluyen un bloque breve sobre los servicios de {site.nombre} para empresas. No entregamos su correo a terceros.</P>

      <H2>7. Su información es suya</H2>
      <P>Lo que usted registra le pertenece. Nos autoriza a guardarlo y procesarlo solo para prestarle el servicio, como explica la política de privacidad. Puede descargarlo cuando quiera desde Ajustes y eliminar su cuenta en cualquier momento.</P>

      <H2>8. Uso aceptable</H2>
      <P>No debe usar el servicio para actividades ilegales, para enviar invitaciones no deseadas, para intentar acceder a información de otras personas ni para afectar su funcionamiento o su seguridad. Podemos suspender o cerrar las cuentas que incumplan estos términos.</P>

      <H2>9. Propiedad intelectual</H2>
      <P>La aplicación, su diseño, su código, la marca y los contenidos del sitio pertenecen a {site.nombre}. Puede usarlos para su uso personal mientras el servicio esté disponible; no puede copiarlos, revenderlos ni hacer obras derivadas sin autorización escrita.</P>

      <H2>10. Cambios, suspensión y fin del servicio</H2>
      <P>Como {app} se ofrece gratis, podemos modificar, limitar, suspender o dejar de ofrecer la aplicación o cualquiera de sus funciones, total o parcialmente, en cualquier momento y por cualquier motivo, sin que esto genere obligación de indemnizar. Cuando sea posible, le avisaremos con al menos 30 días de anticipación por correo o dentro de la aplicación, para que pueda descargar sus datos; si el cambio se debe a un riesgo de seguridad, a una orden de autoridad o a una causa de fuerza mayor, podría ser inmediato. Al cerrar el servicio eliminaremos sus datos según la política de privacidad.</P>

      <H2>11. Disponibilidad y responsabilidad</H2>
      <P>Hacemos lo posible por mantener el servicio disponible, seguro y respaldado, pero puede haber interrupciones, errores o pérdida de información, y le recomendamos descargar sus datos de vez en cuando. En la medida en que la ley lo permita, no respondemos por daños indirectos, lucro cesante ni decisiones que usted tome con base en la información de la aplicación.</P>

      <H2>12. Cambios en estos términos</H2>
      <P>Podemos actualizar estos términos. Publicaremos la versión vigente en esta página con su fecha y, si el cambio es importante, se lo avisaremos dentro de la aplicación. Si sigue usando el servicio después del aviso, se entiende que acepta la nueva versión; si no está de acuerdo, puede descargar sus datos y eliminar su cuenta.</P>

      <H2>13. Ley aplicable y contacto</H2>
      <P>Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia se tratará primero de buena fe y, de no haber acuerdo, ante los jueces competentes de {site.ciudad}. Para dudas o reclamos escriba a {correo}.</P>
    </PaginaLegal>
  )
}
