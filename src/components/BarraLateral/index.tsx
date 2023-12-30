import React, { useState } from 'react'
import {
  ContainerBarraLateral,
  ContainerButton,
  ContainerPreco,
  MiniPizzaImage,
  PrecoProduto,
  PrecoTotal,
  ProdutoNome,
  ValorTotal,
  ButtonEntrega,
  LixeiraImage,
  CardBarra
} from './styles'

import lixeira from '../../assets/images/lixeira.png'
import miniPizza from '../../assets/images/mini_pizza.png'
import EntregaForm from './Entrega'
import PagamentoForm from './Pagamento'
import PedidoConcluido from './PedidoConcluido'

interface BarraLateralProps {
  produto: {
    name: string
  }
  onClose: () => void
}
const BarraLateral: React.FC<BarraLateralProps> = ({ produto, onClose }) => {
  const [showInputs, setShowInputs] = useState(false)
  const [showPagamentoInput, setShowPagamentoInput] = useState(false)
  const [pedidoConcluido, setPedidoConcluido] = useState(false)
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    numeroCartao: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: e.target.value
    }))
  }

  const handleContinuarClick = () => {
    if (showInputs) {
      setShowInputs(false)
      setShowPagamentoInput(true)
    } else if (showPagamentoInput) {
      console.log('Número do Cartão:', inputValues.numeroCartao)
      setShowPagamentoInput(false)
      setPedidoConcluido(true)
    } else {
      setShowInputs(true)
    }
  }

  const submterINputs = () => {
    if (showPagamentoInput) {
      setShowPagamentoInput(false)
      setShowInputs(true)
    } else if (pedidoConcluido) {
      setPedidoConcluido(false)
      onClose()
    } else {
      setShowInputs(false)
    }
  }

  const pedidoConcluidoClose = () => {
    setPedidoConcluido(false)
    onClose()
  }

  return (
    <ContainerBarraLateral>
      {showInputs ? (
        <EntregaForm
          inputValues={inputValues}
          handleInputChange={handleInputChange}
          handleContinuarClick={handleContinuarClick}
          submterINputs={submterINputs}
        />
      ) : showPagamentoInput ? (
        <PagamentoForm
          inputValues={inputValues}
          handleInputChange={handleInputChange}
          handleContinuarClick={handleContinuarClick}
          submterINputs={submterINputs}
        />
      ) : pedidoConcluido ? (
        <PedidoConcluido onClose={pedidoConcluidoClose} />
      ) : (
        <div>
          <CardBarra>
            <MiniPizzaImage src={miniPizza} alt="" />
            <ProdutoNome>{produto.name}</ProdutoNome>
            <PrecoProduto>R$ 60,90</PrecoProduto>
            <LixeiraImage src={lixeira} alt="" onClick={onClose} />
          </CardBarra>

          {/* Conteúdo antes de clicar no botão */}
          <ContainerPreco>
            <ValorTotal>Valor Total:</ValorTotal>
            <PrecoTotal>R$ 122,50</PrecoTotal>
          </ContainerPreco>
          <ContainerButton>
            <ButtonEntrega onClick={handleContinuarClick}>
              Continuar com a entrega
            </ButtonEntrega>
          </ContainerButton>
        </div>
      )}
    </ContainerBarraLateral>
  )
}

export default BarraLateral
