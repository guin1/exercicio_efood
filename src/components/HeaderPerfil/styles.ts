import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCor = styled.div`
  background-color: #ffebd9;
`

export const ContainerPerfil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 186px;
  position: relative;
  margin: auto;

  @media (max-width: 768px) {
    width: 92%;
  }
`

export const LeftSection = styled.div`
  text-align: left;
`

export const CenterSection = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const RightSection = styled.div`
  text-align: right;
  cursor: pointer;
`
export const LogoTexto = styled.p`
  color: ${cores.rosa};
  font-size: 18px;
  margin-right: 10px;
`
export const LogoTextoButoon = styled.button`
  color: ${cores.rosa};
  font-size: 18px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  background-color: #ffebd9;
`
