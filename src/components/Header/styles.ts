import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

interface NavLinksProps {
  isOpen: boolean
}

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  cursor: pointer;
  margin-bottom: 32px;

  h1 {
    color: ${colors.cinzaClaro};
  }
`

export const NavLinks = styled.div<NavLinksProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  top: 70px;
  right: 0;
  background-color: ${colors.black};
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  a {
    margin-bottom: 8px;
    font-size: 16px;
    color: ${colors.cinzaClaro};
    text-decoration: none;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;

    a {
      margin-right: 10px; /* Espaçamento entre os links */
      margin-bottom: 0; /* Remover margem inferior */
    }
  }
`

export const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
