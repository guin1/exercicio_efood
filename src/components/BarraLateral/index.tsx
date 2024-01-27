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
  CardBarra,
  InfoContainer
} from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { RootState } from '../../store'
import { removerDoCarrinho, ProdutoNoCarrinho } from '../../store/reducers/cart'
import { ContainerOverlay } from '../ModalPizza/styles'
import { useDispatch, useSelector } from 'react-redux'
import EntregaForm from './Entrega'

interface BarraLateralProps {
  produto: {
    id: number
    capa: string
    nome: string
    preco: number
  }
  onClose: () => void
}

const BarraLateral: React.FC<BarraLateralProps> = ({ onClose }) => {
  const [mostrarEntregaForm, setMostrarEntregaForm] = useState(false) // Adicionando o estado local
  const itensNoCarrinho: ProdutoNoCarrinho[] = useSelector(
    (state: RootState) => state.cart.itensNoCarrinho
  )
  const dispatch = useDispatch()

  const removerProduto = (item: number) => {
    dispatch(removerDoCarrinho(item))
  }

  const handleContinuarEntrega = () => {
    setMostrarEntregaForm(true) // Atualizando o estado para mostrar o componente EntregaForm
  }

  const deveRenderizarBarraLateral = () => {
    return itensNoCarrinho.length > 0
  }

  if (!deveRenderizarBarraLateral()) {
    return null
  }
  const handleVoltarBarraLateral = () => {
    setMostrarEntregaForm(false)
  }

  return (
    <>
      <ContainerOverlay onClick={onClose} />
      <ContainerBarraLateral>
        <div>
          <div>
            {/* Renderizando EntregaForm se o estado mostrarEntregaForm for verdadeiro */}
            {mostrarEntregaForm ? (
              <EntregaForm onVoltarBarraLateral={handleVoltarBarraLateral} />
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
                  <ButtonEntrega onClick={handleContinuarEntrega}>
                    Continuar com a entrega
                  </ButtonEntrega>
                </ContainerButton>
              </>
            )}
          </div>
        </div>
      </ContainerBarraLateral>
    </>
  )
}

export default BarraLateral
