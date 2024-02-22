import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerPerfil = styled.div`
  max-width: 320px;
  height: 390px;
  background-color: ${cores.rosa};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
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
`
export const ImagemPizza = styled.img`
  max-height: 167px;
  height: 167px;
  width: 300px;
  max-width: 300px;
  cursor: pointer;
`
export const ButtonSabiaMais = styled.button`
  font-family: 'Roboto', sans-serif;
  color: ${cores.rosa};
  border: none;
  width: 100%;
  height: 32px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`

export const ButtonContainer = styled.div`
  margin-top: auto;
`
