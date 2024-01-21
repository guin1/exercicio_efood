/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useState } from 'react'
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
  CardBarra,
  InfoContainer
} from './styles'

import lixeira from '../../assets/images/lixeira.png'

import EntregaForm from './Entrega'
import PagamentoForm from './Pagamento'
import PedidoConcluido from './PedidoConcluido'
import { RootState } from '../../store'
import {
  handleContinuarClick,
  handleInputChange,
  submitInputs,
  pedidoConcluidoClose,
  removerDoCarrinho,
  ProdutoNoCarrinho
} from '../../store/reducers/cart'
import { ContainerOverlay } from '../ModalPizza/styles'

interface BarraLateralProps {
  produto: {
    id: number
    capa: string
    nome: string
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

  const itensNoCarrinho: ProdutoNoCarrinho[] = useSelector(
    (state: RootState) => state.cart.itensNoCarrinho
  )

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

  const removerProduto = (item: number) => {
    dispatch(removerDoCarrinho(item))
  }

  const pedidoConcluidoCloseLocal = () => {
    dispatch(pedidoConcluidoClose())
    onClose()
  }

  console.log('itensNoCarrinho:', itensNoCarrinho)
  return (
    <>
      <ContainerOverlay onClick={() => onClose()} />
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
            {itensNoCarrinho.length === 0 ? (
              <h2>Carrinho vazio</h2>
            ) : (
              <>
                <ul>
                  {itensNoCarrinho.map((produto) => (
                    <CardBarra key={produto.id}>
                      <MiniPizzaImage src={produto.capa} alt={produto.capa} />
                      <InfoContainer>
                        <ProdutoNome>{produto.nome}</ProdutoNome>
                        <PrecoProduto>R$ {produto.preco}</PrecoProduto>
                        <LixeiraImage
                          src={lixeira}
                          alt="lixeira"
                          onClick={() => removerProduto(produto.id)}
                        />
                      </InfoContainer>
                    </CardBarra>
                  ))}
                </ul>

                {/* Conteúdo antes de clicar no botão */}
                <ContainerPreco>
                  <ValorTotal>Valor Total:</ValorTotal>
                  <PrecoTotal>
                    R${' '}
                    {itensNoCarrinho
                      .reduce(
                        (total, produto: ProdutoNoCarrinho) =>
                          total + Number(produto.preco),
                        0
                      )
                      .toFixed(2)}{' '}
                  </PrecoTotal>
                </ContainerPreco>
                <ContainerButton>
                  <ButtonEntrega onClick={handleContinuarClickLocal}>
                    Continuar com a entrega
                  </ButtonEntrega>
                </ContainerButton>
              </>
            )}
          </div>
        )}
      </ContainerBarraLateral>
    </>
  )
}

export default BarraLateral
