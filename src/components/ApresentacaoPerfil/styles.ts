import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerApresentacao = styled.div`
  position: relative;
  width: 1366px;
  margin: auto;

  media (max-width: 768px) {
    position: relative;
    width: 768px;
    margin: auto;
  }
`

export const TextoItaliana = styled.p`
  position: absolute;
  width: 101px;
  height: 33px;
  top: 10px;
  left: 170px;
  color: ${cores.branca};
  font-weight: 100;
  font-size: 32px;
`

export const TextoLaDolceVita = styled.p`
  position: absolute;
  width: 676px;
  height: 33px;
  bottom: 10px;
  left: 170px;
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branca};

  media (max-width: 768px) {
    text-align: center;
  }
`

export const ImagemApresentacao = styled.img`
  width: 1366px;
  height: 280px;
  position: relative;
  display: block;
  margin: auto;

  media (max-width: 768px) {
    position: relative;
  }
`
