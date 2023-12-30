import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  CenterSection,
  LeftSection,
  RightSection,
  LogoTexto,
  ContainerPerfil
} from './styles'

const HeaderPerfil = () => (
  <ContainerPerfil>
    <LeftSection>
      <LogoTexto>Restaurantes</LogoTexto>
    </LeftSection>
    <CenterSection>
      <NavLink to="/">
        <img src={logo} alt="Efood" />
      </NavLink>
    </CenterSection>
    <RightSection>
      <LogoTexto>0 produto(s) no carrinho</LogoTexto>
    </RightSection>
  </ContainerPerfil>
)

export default HeaderPerfil
