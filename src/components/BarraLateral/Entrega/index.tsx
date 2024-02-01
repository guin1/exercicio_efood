import React, { useEffect, useState } from 'react'
import {
  ContainerCepNumero,
  Entrega,
  Input,
  InputCep,
  InputNumero,
  LabelNumero,
  TextInput,
  BotaoBarra,
  BotaoBarra2
} from '../styles'
import { useFormik } from 'formik'
import PagamentoForm from '../Pagamento'
import { ProdutoNoCarrinho } from '../../../store/reducers/cart'
import PedidoConcluido from '../PedidoConcluido'

interface EntregaFormProps {
  onVoltarBarraLateral: () => void
  itensNoCarrinho: ProdutoNoCarrinho[]
}

const EntregaForm: React.FC<EntregaFormProps> = ({
  onVoltarBarraLateral,
  itensNoCarrinho
}) => {
  const [mostrarPagamentoForm, setMostrarPagamentoForm] = useState(false)
  const [mostrarPedidoConcluido, setMostrarPedidoConcluido] = useState(true)
  const [orderId, setNumeroPedido] = useState<string | null>(null)

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',

      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    onSubmit: async (values) => {
      try {
        const data = {
          products: [{ id: 1, price: 0 }],
          delivery: {
            receiver: values.fullName,
            address: {
              description: values.adress,
              city: values.city,
              zipCode: values.zipCode,
              number: parseInt(values.number),
              complement: values.complement
            }
          },
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

        // Chamada para a API de checkout
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
            setNumeroPedido(orderId)
            setMostrarPagamentoForm(true)
          }
        } else {
          console.error('Erro ao realizar o pedido:', response.statusText)
        }
      } catch (error) {
        console.error('Erro ao processar o pagamento:', error)
      }
    }
  })

  // useEffect(() => {
  //   if (orderId !== null) {
  //     setMostrarPagamentoForm(true)
  //   }
  // }, [orderId])

  const handleContinuarPagamento = () => {
    form.handleSubmit()

    if (form.isValid && Object.keys(form.errors).length === 0) {
      console.log('Formulário válido. Continuar com o pagamento')
    } else {
      console.log('Formulário inválido. Não pode continuar com o pagamento')
    }
  }

  const handleContinuarClick = () => {
    console.log('Continuar com o pagamento')
    // setMostrarPagamentoForm(true)
  }

  const submeterInputs = () => {
    console.log('Submeter os inputs')
  }

  return (
    <div>
      {!mostrarPagamentoForm && orderId === null && (
        <div>
          <label htmlFor="fullName">
            <Entrega>Entrega</Entrega>
            <TextInput>Quem irá receber:</TextInput>
            <Input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <label htmlFor="adress">
            <TextInput>Endereço:</TextInput>
            <Input
              id="adress"
              type="text"
              name="adress"
              value={form.values.adress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <label htmlFor="city">
            <TextInput>Cidade:</TextInput>
            <Input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <ContainerCepNumero>
            <label htmlFor="zipCode">
              <TextInput>CEP:</TextInput>
              <InputCep
                type="number"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </label>
            <LabelNumero htmlFor="number">
              <TextInput>Número:</TextInput>
              <InputNumero
                type="number"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </LabelNumero>
          </ContainerCepNumero>
          <label htmlFor="complement">
            <TextInput>Complemento (opcional):</TextInput>
            <Input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>

          <div>
            <BotaoBarra type="button" onClick={handleContinuarPagamento}>
              Continuar com o pagamento
            </BotaoBarra>
          </div>
          <div>
            <BotaoBarra2 type="button" onClick={onVoltarBarraLateral}>
              Voltar para a barra lateral
            </BotaoBarra2>
          </div>
        </div>
      )}

      {mostrarPagamentoForm && (
        <PagamentoForm
          handleContinuarClick={handleContinuarClick}
          submeterInputs={submeterInputs}
          mostrarVoltarCarrinho={false}
          itensNoCarrinho={itensNoCarrinho}
        />
      )}

      {mostrarPedidoConcluido && orderId !== null && (
        <PedidoConcluido
          onClose={() => setMostrarPedidoConcluido(false)}
          orderId={orderId.toString()}
        />
      )}
    </div>
  )
}

export default EntregaForm
