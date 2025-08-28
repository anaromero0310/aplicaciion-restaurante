import Buscador from "./buscador"
import Logo from "./logo"
import PerfilUsuario from "./perfilUsuario"
import './Header.css'


const Header = () => {
  return (
   <div className="header">
    <section className="navegacion">
        <Logo />
<PerfilUsuario usuario="Anaclara" />
    </section>
   

<Buscador />
</div>
  )
}

export default Header