import { PaginaLegal, H2, P } from '../../components/Legal'
import { site } from '../../config/site'

export const metadata = { title: 'Política de cookies', alternates: { canonical: `${site.url}/cookies` } }

export default function Cookies() {
  return (
    <PaginaLegal titulo="Política de cookies">
      <H2>Este sitio informativo</H2>
      <P>Las páginas de presentación de {site.nombre} no usan cookies de seguimiento, de analítica ni de publicidad.</P>

      <H2>La aplicación</H2>
      <P>Alkima Finanzas usa almacenamiento técnico del navegador (cookies o almacenamiento local) únicamente para mantener su sesión iniciada y recordar preferencias necesarias para que funcione. Sin ese almacenamiento no podría ingresar a su cuenta.</P>

      <H2>Cómo controlarlas</H2>
      <P>Puede borrar o bloquear el almacenamiento del navegador desde su configuración; en ese caso tendrá que iniciar sesión cada vez. Si más adelante añadimos herramientas de analítica o publicidad, actualizaremos esta política y pediremos su consentimiento antes de activarlas.</P>
      <P>Dudas: <a href={`mailto:${site.correo}`} style={{ color: '#94a3b8' }}>{site.correo}</a>.</P>
    </PaginaLegal>
  )
}
