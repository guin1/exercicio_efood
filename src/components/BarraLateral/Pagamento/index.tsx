import React, { useState, ChangeEvent } from 'react'
import {
  BotaoBarra,
  BotaoBarra2,
  ContainerCepNumero,
  Entrega,
  Input,
  TextInput
} from '../styles'
import {
  InputAnoVct,
  InputCVV,
  InputCartao,
  InputVct,
  TextCVV,
  TextVCt
} from './styles'
import EntregaForm from '../Entrega'
import PedidoConcluido from '../PedidoConcluido'
import { ProdutoNoCarrinho } from '../../../store/reducers/cart'

interface PagamentoFormProps {
  handleContinuarClick: () => void
  submeterInputs: () => void
  mostrarVoltarCarrinho: boolean
  itensNoCarrinho: ProdutoNoCarrinho[]
}

const PagamentoForm: React.FC<PagamentoFormProps> = ({
  submeterInputs,
  itensNoCarrinho
}) => {
  const [mostrarEntregaForm, setMostrarEntregaForm] = useState(false)
  const [mostrarPedidoConcluido, setMostrarPedidoConcluido] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    cardOwner: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = () => {
    submeterInputs()
    setMostrarEntregaForm(true)
  }

  const handleContinuarClick = () => {
    // handleRespostaAPI('123')
    setMostrarPedidoConcluido(true)
  }

  const valorTotalCarrinho = itensNoCarrinho
    .reduce(
      (total: number, produto: ProdutoNoCarrinho) =>
        total + Number(produto.preco),
      0
    )
    .toFixed(2)

  return (
    <div className="container">
      {mostrarEntregaForm ? (
        <EntregaForm
          onVoltarBarraLateral={() => setMostrarEntregaForm(false)}
          itensNoCarrinho={[]}
        />
      ) : mostrarPedidoConcluido ? (
        <PedidoConcluido
          onClose={() => setMostrarPedidoConcluido(true)}
          orderId={orderId !== null ? orderId.toString() : ''}
        />
      ) : (
        <>
          <label htmlFor="cardOwner">
            <Entrega>{`Pagamento - Valor a pagar R$ ${valorTotalCarrinho}`}</Entrega>
            <TextInput>Nome no cartão:</TextInput>
            <Input
              id="cardOwner"
              type="text"
              name="cardOwner"
              value={formData.cardOwner}
              onChange={handleChange}
            />
          </label>
          <ContainerCepNumero>
            <label htmlFor="cardNumber">
              <TextInput>Número do cartão</TextInput>
              <InputCartao
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="cardCode">
              <TextCVV>CVV:</TextCVV>
              <InputCVV
                id="cardCode"
                type="text"
                name="cardCode"
                value={formData.cardCode}
                onChange={handleChange}
              />
            </label>
          </ContainerCepNumero>
          <ContainerCepNumero>
            <label htmlFor="expiresMonth">
              <TextInput>Mês de vencimento:</TextInput>
              <InputVct
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={formData.expiresMonth}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="expiresYear">
              <TextVCt>Ano de vencimento:</TextVCt>
              <InputAnoVct
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={formData.expiresYear}
                onChange={handleChange}
              />
            </label>
          </ContainerCepNumero>
          <p>${orderId}</p>
          <div>
            <BotaoBarra onClick={handleContinuarClick}>
              Finalizar Pagamento
            </BotaoBarra>
          </div>
          <div>
            <BotaoBarra2 onClick={handleSubmit}>
              Voltar para a edição de endereço
            </BotaoBarra2>
          </div>
        </>
      )}
    </div>
  )
}

export default PagamentoForm
