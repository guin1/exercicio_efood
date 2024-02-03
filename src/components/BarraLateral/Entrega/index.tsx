import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import {
  ContainerCepNumero,
  Entrega,
  Input,
  InputCep,
  InputNumero,
  LabelNumero,
  TextInput,
  BotaoBarra,
  BotaoBarra2,
  ContainerInputs,
  ErrorText
} from '../styles'
import { useFormik } from 'formik'
import PagamentoForm from '../Pagamento'
import { ProdutoNoCarrinho } from '../../../store/reducers/cart'

interface EntregaFormProps {
  onVoltarBarraLateral: () => void
  itensNoCarrinho: ProdutoNoCarrinho[]
}

const EntregaForm: React.FC<EntregaFormProps> = ({
  onVoltarBarraLateral,
  itensNoCarrinho
}) => {
  const [mostrarPagamentoForm, setMostrarPagamentoForm] = useState(false)
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
      expiresYear: '',
      continuarPagamento: false
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Nome inválido')
        .required('Nome obrigatório'),
      adress: Yup.string()
        .min(4, 'Endereço inválido')
        .required('Endereço obrigatório'),
      city: Yup.string()
        .min(5, 'Endereço inválido')
        .required('Endereço obrigatório'),
      zipCode: Yup.string()
        .min(8, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required('CEP obrigatório'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Nmr obrigatório'),
      cardOwner: Yup.number()
        .min(9, 'ct inválido')
        .max(9, 'Ct inválido')
        .when('continuarPagamento', {
          is: true,
          then: Yup.string()
            .min(5, 'Nome inválido')
            .required('Nome no cartão obrigatório') as any
        }),
      cardNumber: Yup.number().when('continuarPagamento', {
        is: true,
        then: Yup.number()
          .min(12)
          .max(12)
          .required('Número do cartão obrigatório') as any
      }),
      cardCode: Yup.number().when('continuarPagamento', {
        is: true,
        then: Yup.number().min(3).max(3).required('obrigatório') as any
      }),
      expiresMonth: Yup.number().when('continuarPagamento', {
        is: true,
        then: Yup.number()
          .min(2)
          .max(2)
          .required('Mês de vencimento obrigatório') as any
      }),
      expiresYear: Yup.number().when('continuarPagamento', {
        is: true,
        then: Yup.number()
          .min(4)
          .max(4)
          .required('Ano de vencimento obrigatório') as any
      })
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          products: [{ id: 1, price: 0 }],
          delivery: {
            receiver: values.fullName,
            adress: {
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
            // console.log(`Número do pedido recebido da API: ${orderId}`)
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

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem('formValues') || '{}')
    form.setValues(savedValues)
  }, [])

  const handleContinuarPagamento = () => {
    localStorage.setItem('formValues', JSON.stringify(form.values))
    form.handleSubmit()
    setMostrarPagamentoForm(true)
  }

  const handleContinuarClick = () => {
    console.log('Continuar com o pagamento')
  }

  const submeterInputs = () => {
    console.log('Submeter os inputs')
  }

  return (
    <div>
      {!mostrarPagamentoForm && orderId === null && (
        <ContainerInputs>
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
            {form.touched.fullName && form.errors.fullName ? (
              <ErrorText>{form.errors.fullName}</ErrorText>
            ) : null}
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
            {form.touched.adress && form.errors.adress ? (
              <ErrorText>{form.errors.adress}</ErrorText>
            ) : null}
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
            {form.touched.city && form.errors.city ? (
              <ErrorText>{form.errors.city}</ErrorText>
            ) : null}
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
              {form.touched.zipCode && form.errors.zipCode ? (
                <ErrorText>{form.errors.zipCode}</ErrorText>
              ) : null}
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
              {form.touched.number && form.errors.number ? (
                <ErrorText>{form.errors.number}</ErrorText>
              ) : null}
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
            {form.touched.complement && form.errors.complement ? (
              <ErrorText>{form.errors.complement}</ErrorText>
            ) : null}
          </label>

          <div>
            <BotaoBarra type="button" onClick={handleContinuarPagamento}>
              Continuar com o pagamento
            </BotaoBarra>
          </div>
          <div>
            <BotaoBarra2 type="button" onClick={onVoltarBarraLateral}>
              Voltar para o carrinho
            </BotaoBarra2>
          </div>
        </ContainerInputs>
      )}

      {mostrarPagamentoForm && (
        <PagamentoForm
          handleContinuarClick={handleContinuarClick}
          submeterInputs={submeterInputs}
          // mostrarVoltarCarrinho={false}
          itensNoCarrinho={itensNoCarrinho}
        />
      )}
    </div>
  )
}

export default EntregaForm
