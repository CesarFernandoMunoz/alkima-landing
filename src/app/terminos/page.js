import { PaginaLegal, H2, P, UL } from '../../components/Legal'
import { site } from '../../config/site'

export const metadata = { title: 'Términos de servicio', alternates: { canonical: `${site.url}/terminos` } }

export default function Terminos() {
  return (
    <PaginaLegal titulo="Términos de servicio">
      <P>Al usar este sitio o Alkima Finanzas, usted acepta estos términos. Si no está de acuerdo, no use el servicio.</P>

      <H2>1. El servicio</H2>
      <P>{site.nombre} desarrolla software de operaciones y finanzas a medida para empresas y ofrece Alkima Finanzas, una aplicación de finanzas personales. Los desarrollos a medida se rigen por el contrato o la propuesta firmada con cada cliente.</P>

      <H2>2. Alkima Finanzas</H2>
      <UL>
        <li>Hoy es gratuita. Si en el futuro se ofrecen planes de pago, se avisará con anticipación y no se cobrará sin su aceptación.</li>
        <li>Los movimientos se registran manualmente; la aplicación no se conecta a sus bancos.</li>
        <li>La información que muestra es una ayuda para su organización personal y no constituye asesoría financiera, de inversión, legal ni tributaria.</li>
      </UL>

      <H2>3. Su cuenta y su información</H2>
      <P>Usted es responsable de mantener la confidencialidad de su acceso y de la exactitud de lo que registra. Puede pedir la eliminación de su cuenta y sus datos escribiendo a <a href={`mailto:${site.correo}`} style={{ color: '#94a3b8' }}>{site.correo}</a>. El tratamiento de datos se describe en la política de privacidad.</P>

      <H2>4. Uso aceptable</H2>
      <P>No debe usar el servicio para actividades ilegales, intentar acceder a información de otros usuarios ni afectar el funcionamiento de la plataforma.</P>

      <H2>5. Disponibilidad y responsabilidad</H2>
      <P>Hacemos lo posible por mantener el servicio disponible y respaldado, pero puede haber interrupciones o cambios. En la medida que la ley lo permita, no respondemos por pérdidas indirectas derivadas del uso del servicio.</P>

      <H2>6. Cambios y ley aplicable</H2>
      <P>Podemos actualizar estos términos y publicaremos la versión vigente en esta página. Se rigen por las leyes de la República del Ecuador.</P>
    </PaginaLegal>
  )
}
