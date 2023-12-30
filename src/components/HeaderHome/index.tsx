import { ButtonPerfil, HeaderBar, HeaderText, LogoImage } from './styles'

import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => (
  <HeaderBar>
    <div>
      <NavLink to="/">
        <LogoImage src={logo} alt="Efood" />
      </NavLink>
      <HeaderText>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </HeaderText>
    </div>
    <ButtonPerfil to="/perfil">Perfil</ButtonPerfil>
  </HeaderBar>
)

export default HeaderHome
