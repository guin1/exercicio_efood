import { useState } from 'react'
import { HeaderContainer, MenuIcon, NavLinks } from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <HeaderContainer className="container">
      <h1>Guilherme</h1>
      <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
      <NavLinks isOpen={menuOpen}>
        <a>Sobre |</a>
        <a>Projetos |</a>
        <a>Contato</a>
      </NavLinks>
    </HeaderContainer>
  )
}

export default Header
