import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerApresentacao = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  margin-bottom: 32px;
  overflow-x: hidden;
`

export const TextoItaliana = styled.h3`
  position: absolute;
  width: 101px;
  height: 33px;
  top: 10px;
  color: ${cores.branca};
  font-weight: 100;
  font-size: 32px;
  font-family: Roboto, sans-serif;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

export const TextoLaDolceVita = styled.h2`
  position: absolute;
  width: 676px;
  height: 33px;
  bottom: 10px;
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branca};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`
export const ContainerTexto = styled.div`
  @media (max-width: 768px) {
    width: 92%;
  }
`
export const ImageContainer = styled.div``

export const ImagemApresentacao = styled.img`
  position: relative;
  display: block;
  margin: auto;
  width: 100%;
  height: 300px;

  @media (max-width: 768px) {
    height: 150px;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000cc;
`
