import { PaginaLegal, H2, P } from '../../components/Legal'
import { site } from '../../config/site'

export const metadata = { title: 'Política de cookies', alternates: { canonical: `${site.url}/cookies` } }

export default function Cookies() {
  return (
    <PaginaLegal titulo="Política de cookies">
      <H2>Este sitio informativo</H2>
      <P>Las páginas de presentación de {site.nombre} no usan cookies de seguimiento, de analítica ni de publicidad.</P>

      <H2>La aplicación</H2>
      <P>{site.finanzas.nombre} usa almacenamiento técnico del navegador (almacenamiento local, no cookies de terceros) solo para que funcione:</P>
      <ul style={{ paddingLeft: 22 }}>
        <li><strong>Su sesión:</strong> para que no tenga que ingresar a cada momento.</li>
        <li><strong>Preferencias:</strong> el espacio y el período que eligió, si oculta los valores, los sonidos y avisos que ya vio.</li>
        <li><strong>Una copia de sus datos en su equipo:</strong> para que la aplicación abra rápido y funcione sin conexión. Se borra al cerrar sesión.</li>
      </ul>
      <P>Sin este almacenamiento no podría ingresar a su cuenta. Nada de esto se comparte con terceros ni sirve para seguirle entre sitios.</P>

      <H2>Cómo controlarlas</H2>
      <P>Puede borrar o bloquear el almacenamiento del navegador desde su configuración; en ese caso tendrá que iniciar sesión cada vez. Si más adelante añadimos herramientas de analítica o publicidad, actualizaremos esta política y pediremos su consentimiento antes de activarlas.</P>
      <P>Dudas: <a href={`mailto:${site.correo}`} style={{ color: '#94a3b8' }}>{site.correo}</a>.</P>
    </PaginaLegal>
  )
}
