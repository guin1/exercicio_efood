import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  CenterSection,
  LeftSection,
  RightSection,
  LogoTexto,
  ContainerPerfil,
  ContainerCor
} from './styles'

const HeaderPerfil = () => (
  <ContainerCor>
    <ContainerPerfil className="container">
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
  </ContainerCor>
)

export default HeaderPerfil
