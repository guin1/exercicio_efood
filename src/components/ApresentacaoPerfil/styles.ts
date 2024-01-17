import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerApresentacao = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
`

export const TextoItaliana = styled.p`
  position: absolute;
  width: 101px;
  height: 33px;
  top: 10px;
  color: ${cores.branca};
  font-weight: 100;
  font-size: 32px;
`

export const TextoLaDolceVita = styled.p`
  position: absolute;
  width: 676px;
  height: 33px;
  bottom: 10px;
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branca};

  media (max-width: 768px) {
  }
`
export const ContainerTexto = styled.div`
  width: 1024px;
`
export const ImageContainer = styled.div`
  // background-color: #000000cc 50%;
  // object-fit: cover;
`

export const ImagemApresentacao = styled.img`
  position: relative;
  display: block;
  margin: auto;
  width: 100%;
  height: 300px;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000cc;
  // z-index: 1;
`
