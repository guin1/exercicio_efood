import styled from 'styled-components'
import Vector from '../../assets/images/Vector.png'
import { NavLink } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 384px;
  background-image: url(${Vector});
  background-size: cover;
  text-align: center;
  margin-bottom: 56px;
  top: -24px;

  @media (max-width: 768px) {
    height: 200px;
    margin-top: -14px;
  }
`

export const LogoImage = styled.img`
  margin-top: 57.5px;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

export const HeaderText = styled.p`
  font-weight: 900;
  font-size: 36px;
  background-position: center;
  text-align: center;
  color: #e66767;
  margin-top: 84px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 32px;
  }
`
export const ButtonPerfil = styled(NavLink)`
  color: ${cores.rosa};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 120px;

  @media (max-width: 768px) {
  }
`
