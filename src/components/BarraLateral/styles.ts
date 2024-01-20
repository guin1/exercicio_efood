import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerBarraLateral = styled.div`
  width: 344px;
  height: 100vh;
  background-color: ${cores.rosa};
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  color: ${cores.branca};
`
export const CardBarra = styled.div`
  display: flex;
  background-color: ${cores.branca};
  width: 300px;
  color: ${cores.rosa};
  margin-bottom: 5px;
`

export const MiniPizzaImage = styled.img`
  margin: 8px;
  postion: relative;
  max-height: 80px;
  height: 80px;
  max-width: 80px;
  width: 80px;
`

export const LixeiraImage = styled.img`
  width: 16px;
  height: 16px;
  right: 35px;
  margin-top: 70px;
  position: absolute;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    right: 15px;
    margin-top: 70px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

export const ProdutoNome = styled.h4`
  font-family: Roboto;
  font-size: 18px;
  color: ${cores.rosa};
  margin-top: 8px;
  margin-bottom: 10px;
`

export const PrecoProduto = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${cores.rosa};
`
//valorPreco

export const ContainerPreco = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
`
export const ValorTotal = styled.h3`
  margin: 0;
`

export const PrecoTotal = styled.h3`
  margin: 0;
`
export const ContainerButton = styled.div`
  background-color: ${cores.branca};
  margin-top: 15px;
`

export const ButtonEntrega = styled.button`
  color: ${cores.rosa};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  width: 300px;
  height: 24px;
  cursor: pointer;
`
export const QuantidadePizza = styled.span`
  font-family: Roboto;
  font-size: 14px;
  margin-left: 5px;
`

//inputs

export const ContainerCepNumero = styled.div`
  display: flex;
  margin-bottom: 8px;
`
export const Entrega = styled.h3`
  text-align: left;
  font-size: 16px;
  margin-bottom: 12px;
`

export const Input = styled.input`
  width: 300px;
  margin-bottom: 8px;
  border: none;
  height: 24px;
`
export const TextInput = styled.p`
  text-align: left;
  font-size: 14px;
  margin-bottom: 4px;
`
export const LabelNumero = styled.label`
  margin-left: 40px;
`
export const InputCep = styled.input`
  width: 130px;
  display: block;
  height: 24px;
`
export const InputNumero = styled.input`
  display: block;
  width: 130px;
  height: 24px;
`
//botoes

export const BotaoBarra = styled.button`
  width: 300px;
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  height: 24px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 10px;
`
export const BotaoBarra2 = styled.button`
  width: 300px;
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  height: 24px;
  cursor: pointer;
`
