import React, { useState, ChangeEvent } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  BotaoBarra,
  BotaoBarra2,
  ContainerCepNumero,
  Entrega,
  Input,
  TextInput,
  ErrorText
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
  itensNoCarrinho: ProdutoNoCarrinho[]
}

const PagamentoForm: React.FC<PagamentoFormProps> = ({
  // handleContinuarClick,
  submeterInputs,
  itensNoCarrinho
}) => {
  const [mostrarEntregaForm, setMostrarEntregaForm] = useState(false)
  const [mostrarPedidoConcluido, setMostrarPedidoConcluido] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('Nome no cartão obrigatório'),
      cardNumber: Yup.string().required('Número do cartão obrigatório'),
      cardCode: Yup.string().required('obrigatório'),
      expiresMonth: Yup.string().required('Mês de vencimento obrigatório'),
      expiresYear: Yup.string().required('Ano de vencimento obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          products: [{ id: 1, price: 0 }],
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: parseInt(values.cardCode),
              expires: {
                month: parseInt(values.expiresMonth),
                year: parseInt(values.expiresYear)
              }
            }
          }
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
          form.handleChange(e)
        }

        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        )

        if (response.ok) {
          const responseData = await response.json()

          if (responseData && responseData.orderId) {
            const orderId = responseData.orderId
            console.log(`Número do pedido recebido da API: ${orderId}`)
            setOrderId(orderId)
            setMostrarPedidoConcluido(true)
          }
        } else {
          console.error('Erro ao realizar o pedido:', response.statusText)
        }
      } catch (error) {
        console.error('Erro ao processar o pagamento:', error)
      }
    }
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    form.handleChange(e)
  }

  const handleSubmit = () => {
    submeterInputs()
    setMostrarEntregaForm(true)
  }

  const handleContinuarPagamento = async () => {
    form.handleSubmit()

    if (form.isValid && Object.keys(form.errors).length === 0) {
      console.log('Formulário válido. Continuar com o pagamento')

      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/checkout'
        )

        if (response.ok) {
          const responseData = await response.json()

          if (responseData && responseData.orderId) {
            const orderId = responseData.orderId
            console.log(`Número do pedido recebido da API: ${orderId}`)
            setOrderId(orderId)
            setMostrarPedidoConcluido(true)
          }
        } else {
          console.error('Erro ao realizar o pedido:', response.statusText)
        }
      } catch (error) {
        console.error('Erro ao processar o pagamento:', error)
      }
    } else {
      console.log('Formulário inválido. Não pode continuar com o pagamento')
    }
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
          onClose={() => setMostrarPedidoConcluido(false)}
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
              value={form.values.cardOwner}
              onChange={handleChange}
            />
            {form.touched.cardOwner && form.errors.cardOwner ? (
              <ErrorText>{form.errors.cardOwner}</ErrorText>
            ) : null}
          </label>
          <ContainerCepNumero>
            <label htmlFor="cardNumber">
              <TextInput>Número do cartão</TextInput>
              <InputCartao
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={handleChange}
              />
              {form.touched.cardNumber && form.errors.cardNumber ? (
                <ErrorText>{form.errors.cardNumber}</ErrorText>
              ) : null}
            </label>
            <label htmlFor="cardCode">
              <TextCVV>CVV:</TextCVV>
              <InputCVV
                id="cardCode"
                type="text"
                name="cardCode"
                value={form.values.cardCode}
                onChange={handleChange}
              />
              {form.touched.cardCode && form.errors.cardCode ? (
                <ErrorText>{form.errors.cardCode}</ErrorText>
              ) : null}
            </label>
          </ContainerCepNumero>
          <ContainerCepNumero>
            <label htmlFor="expiresMonth">
              <TextInput>Mês de vencimento:</TextInput>
              <InputVct
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={handleChange}
              />
              {form.touched.expiresMonth && form.errors.expiresMonth ? (
                <ErrorText>{form.errors.expiresMonth}</ErrorText>
              ) : null}
            </label>
            <label htmlFor="expiresYear">
              <TextVCt>Ano de vencimento:</TextVCt>
              <InputAnoVct
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={handleChange}
              />
              {form.touched.expiresYear && form.errors.expiresYear ? (
                <ErrorText>{form.errors.expiresYear}</ErrorText>
              ) : null}
            </label>
          </ContainerCepNumero>
          <div>
            <BotaoBarra
              type="button"
              onClick={handleContinuarPagamento}
              className="BotaoBarra"
            >
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
