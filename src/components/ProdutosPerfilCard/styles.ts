import styled from 'styled-components'
import { cores } from '../../styles'

export interface ProdutosPerfilCardProps {
  name: string
  image: string
  produto: {
    name: string
    image: string
    text: string
  }
}

export const ContainerPerfil = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  padding: 20px 20px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 30px;
`
export const Pizza = styled.h3`
  font-size: 16px;
  color: #ffebd9;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const TextoPizza = styled.picture`
  font-size: 14px;
  color: #ffebd9;
  margin-bottom: 5px;
`
export const ImagemPizza = styled.img`
  heigth: 304px;
  width: 280px;
  cursor: pointer;
`
export const ButtonSabiaMais = styled.button`
  font-family: 'Roboto', sans-serif;
  color: ${cores.rosa};
  border: none;
  width: 100%;
  height: 28px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin-top: 5px;
`
