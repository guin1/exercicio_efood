import React from 'react'
import { FooterContainer, LogoContainer, TextFooter } from './styles'
import { NavLink } from 'react-router-dom'

import rodape from '../../assets/images/rodape.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <NavLink to="/">
        <img src={rodape} alt="Efood" />
      </NavLink>
    </LogoContainer>

    <div>
      <NavLink to={'/'}>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </NavLink>
    </div>

    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br />
      dos produtos é toda do estabelecimento contratado.
    </TextFooter>
  </FooterContainer>
)

export default Footer
