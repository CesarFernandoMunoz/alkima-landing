import { PaginaLegal, H2, P, UL } from '../../components/Legal'
import { site } from '../../config/site'

export const metadata = { title: 'Política de privacidad', alternates: { canonical: `${site.url}/privacidad` } }

export default function Privacidad() {
  return (
    <PaginaLegal titulo="Política de privacidad">
      <P>Esta política explica qué datos personales tratamos, para qué y cuáles son sus derechos, conforme a la Ley Orgánica de Protección de Datos Personales de Ecuador.</P>

      <H2>1. Qué datos tratamos</H2>
      <UL>
        <li><strong>Si nos escribe por correo:</strong> su nombre, su correo y el contenido del mensaje, para responderle.</li>
        <li><strong>Si usa Alkima Finanzas:</strong> su correo de acceso y la información financiera que usted mismo registra (cuentas, movimientos, presupuestos, metas). No accedemos a sus cuentas bancarias.</li>
      </UL>

      <H2>2. Para qué los usamos</H2>
      <P>Solo para prestar el servicio que usted pidió o responder su consulta. No vendemos sus datos ni los usamos para publicidad de terceros.</P>

      <H2>3. Cómo los protegemos</H2>
      <P>La información de cada usuario está separada de la de los demás mediante reglas de acceso a nivel de base de datos, de modo que solo usted puede ver su información financiera. Usamos Supabase como proveedor de base de datos y autenticación.</P>

      <H2>4. Con quién los compartimos</H2>
      <P>No compartimos sus datos con terceros, salvo con los proveedores técnicos necesarios para operar el servicio (alojamiento y base de datos) o cuando una autoridad competente lo exija conforme a la ley.</P>

      <H2>5. Sus derechos</H2>
      <P>Usted puede solicitar el acceso, la rectificación, la eliminación y la oposición al tratamiento de sus datos, así como su portabilidad. Escriba a <a href={`mailto:${site.correo}`} style={{ color: '#94a3b8' }}>{site.correo}</a> indicando su solicitud y responderemos dentro de los plazos que fija la ley.</P>

      <H2>6. Cambios en esta política</H2>
      <P>Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de actualización.</P>
    </PaginaLegal>
  )
}
