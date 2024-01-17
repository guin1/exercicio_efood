import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerApresentacao = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  margin-bottom: 32px;
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
`

export const TextoLaDolceVita = styled.h2`
  position: absolute;
  width: 676px;
  height: 33px;
  bottom: 10px;
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branca};
`
export const ContainerTexto = styled.div`
  width: 1024px;
`
export const ImageContainer = styled.div``

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
`
