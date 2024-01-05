import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import logo from '../../assets/images/logo.png'
import {
  CenterSection,
  LeftSection,
  RightSection,
  LogoTexto,
  ContainerPerfil,
  ContainerCor
} from './styles'

const HeaderPerfil = () => {
  const { produtosNoCarrinho } = useSelector((state: RootState) => state.cart)

  return (
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
          <LogoTexto>{`${produtosNoCarrinho} produto(s) no carrinho`}</LogoTexto>
        </RightSection>
      </ContainerPerfil>
    </ContainerCor>
  )
}

export default HeaderPerfil
