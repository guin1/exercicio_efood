import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 298px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-top: 56px;
  color: ${cores.rosa};
  background-color: ${cores.fundo};

  div {
    margin-top: 10px;
  }

  img {
    margin: 5px;
    width: 88;
  }
`

export const TextFooter = styled.p`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 15px;
  font-size: 14px;
`
export const LogoContainer = styled.div`
  img {
    width: 125px;
    height: 57.5px;
  }
`
