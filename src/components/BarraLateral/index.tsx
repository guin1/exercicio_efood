import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

// import miniPizza from '../../assets/images/mini_pizza.png'

import EntregaForm from './Entrega'
import PagamentoForm from './Pagamento'
import PedidoConcluido from './PedidoConcluido'
import { RootState } from '../../store'
import {
  handleContinuarClick,
  handleInputChange,
  submitInputs,
  pedidoConcluidoClose
} from '../../store/reducers/cart'

interface BarraLateralProps {
  produto: {
    capa: string
    titulo: string
    preco: number
  }
  onClose: () => void
}

const BarraLateral: React.FC<BarraLateralProps> = ({ produto, onClose }) => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    numeroCartao: ''
  })

  const dispatch = useDispatch()
  const { showInputs, showPagamentoInput, pedidoConcluido } = useSelector(
    (state: RootState) => state.cart
  )

  const handleInputChangeLocal = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: e.target.value
    }))
    dispatch(handleInputChange({ inputName, value: e.target.value }))
  }

  const handleContinuarClickLocal = () => {
    dispatch(handleContinuarClick())
  }

  const submitInputsLocal = () => {
    dispatch(submitInputs())
  }

  const pedidoConcluidoCloseLocal = () => {
    dispatch(pedidoConcluidoClose())
    onClose()
  }

  return (
    <ContainerBarraLateral>
      {showInputs ? (
        <EntregaForm
          inputValues={inputValues}
          handleInputChange={handleInputChangeLocal}
          handleContinuarClick={handleContinuarClickLocal}
          submterINputs={submitInputsLocal}
        />
      ) : showPagamentoInput ? (
        <PagamentoForm
          inputValues={inputValues}
          handleInputChange={handleInputChangeLocal}
          handleContinuarClick={handleContinuarClickLocal}
          submterINputs={submitInputsLocal}
        />
      ) : pedidoConcluido ? (
        <PedidoConcluido onClose={pedidoConcluidoCloseLocal} />
      ) : (
        <div>
          <ul>
            <CardBarra>
              <MiniPizzaImage src={produto.capa} alt={produto.titulo} />
              <ProdutoNome>{produto.titulo}</ProdutoNome>
              <PrecoProduto>R$ {produto.preco}</PrecoProduto>
              <LixeiraImage src={lixeira} alt="lixeira" onClick={onClose} />
            </CardBarra>
          </ul>

          {/* Conteúdo antes de clicar no botão */}
          <ContainerPreco>
            <ValorTotal>Valor Total:</ValorTotal>
            <PrecoTotal>R$ 122,50</PrecoTotal>
          </ContainerPreco>
          <ContainerButton>
            <ButtonEntrega onClick={handleContinuarClickLocal}>
              Continuar com a entrega
            </ButtonEntrega>
          </ContainerButton>
        </div>
      )}
    </ContainerBarraLateral>
  )
}

export default BarraLateral
