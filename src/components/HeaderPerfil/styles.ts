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
    height: 108px;
    width: 750px;
    margin-bottom: 1px;
  }
`

export const LeftSection = styled.div`
  text-align: left;
  // margin-left: 245px;

  @media (max-width: 768px) {
    margin-left: 50px;
  }
`

export const CenterSection = styled.div`
  text-align: center;
`

export const RightSection = styled.div`
  text-align: right;
`
export const LogoTexto = styled.p`
  color: ${cores.rosa};
  font-size: 18px;
  margin-right: 10px;
`
