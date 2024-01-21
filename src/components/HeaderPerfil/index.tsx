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
  ContainerCor,
  LogoTextoButoon
} from './styles'
import { useState } from 'react'
import BarraLateral from '../BarraLateral'

const HeaderPerfil = () => {
  const { itensNoCarrinho } = useSelector((state: RootState) => state.cart)
  const [exibirBarraLateralBotao, setExibirBarraLateralBotao] = useState(false)

  const handleOpenBarraLateralBotao = () => {
    setExibirBarraLateralBotao(true)
  }

  return (
    <ContainerCor>
      <ContainerPerfil className="container">
        <LeftSection>
          <LogoTexto>Restaurantes</LogoTexto>
        </LeftSection>
        <CenterSection>
          <NavLink to="/" onClick={() => setExibirBarraLateralBotao(false)}>
            <img src={logo} alt="Efood" />
          </NavLink>
        </CenterSection>
        <RightSection>
          <LogoTextoButoon onClick={handleOpenBarraLateralBotao}>
            {`${itensNoCarrinho.length} produto(s) no carrinho`}
          </LogoTextoButoon>
        </RightSection>
      </ContainerPerfil>

      {exibirBarraLateralBotao && (
        <BarraLateral
          onClose={() => setExibirBarraLateralBotao(false)}
          produto={{
            id: 0,
            capa: '',
            nome: '',
            preco: 0
          }}
        />
      )}
    </ContainerCor>
  )
}

export default HeaderPerfil
