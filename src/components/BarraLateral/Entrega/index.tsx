// EntregaForm.tsx
import React, { useState } from 'react'
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
import * as Yup from 'yup'
import PagamentoForm from '../Pagamento'

interface EntregaFormProps {
  onVoltarBarraLateral: () => void
}

const EntregaForm: React.FC<EntregaFormProps> = ({ onVoltarBarraLateral }) => {
  const [mostrarPagamentoForm, setMostrarPagamentoForm] = useState(false)
  const form = useFormik({
    initialValues: {
      receber: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cartaoCvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      receber: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          products: [{ id: 1, price: 0 }],
          delivery: {
            receiver: values.receber,
            address: {
              description: values.endereco,
              city: values.cidade,
              zipCode: values.cep,
              number: parseInt(values.numero),
              complement: values.complemento
            }
          },
          payment: {
            card: {
              name: values.nomeCartao,
              number: values.numeroCartao,
              code: parseInt(values.cartaoCvv),
              expires: {
                month: parseInt(values.mesVencimento),
                year: parseInt(values.anoVencimento)
              }
            }
          }
        }
        console.log(data) // Adicionei este console.log apenas para verificar os dados enviados
      } catch (error) {
        console.error('Erro ao processar o pagamento: pagamento não feito')
      }
    }
  })

  const handleContinuarPagamento = () => {
    // Submeter os dados de entrega
    form.handleSubmit()

    // Se os dados de entrega são válidos, mostrar o formulário de pagamento
    if (form.isValid) {
      setMostrarPagamentoForm(true)
    }
  }

  const handleContinuarClick = () => {
    // Lógica para continuar com o pagamento
    console.log('Continuar com o pagamento')
  }

  const submeterInputs = () => {
    // Lógica para submeter os inputs (caso necessário)
    console.log('Submeter os inputs')
  }

  return (
    <div>
      {mostrarPagamentoForm ? (
        <PagamentoForm
          handleContinuarClick={handleContinuarClick}
          submeterInputs={submeterInputs}
          mostrarVoltarCarrinho={false}
        />
      ) : (
        <div>
          <label htmlFor="receber">
            <Entrega>Entrega</Entrega>
            <TextInput>Quem irá receber:</TextInput>
            <Input
              id="receber"
              type="text"
              name="receber"
              value={form.values.receber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <label htmlFor="endereco">
            <TextInput>Endereço:</TextInput>
            <Input
              id="endereco"
              type="text"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <label htmlFor="cidade">
            <TextInput>Cidade:</TextInput>
            <Input
              type="text"
              id="cidade"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <ContainerCepNumero>
            <label htmlFor="cep">
              <TextInput>CEP:</TextInput>
              <InputCep
                type="number"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </label>
            <LabelNumero>
              <TextInput>Número:</TextInput>
              <InputNumero
                type="number"
                id="numero"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </LabelNumero>
          </ContainerCepNumero>
          <label htmlFor="complemento">
            <TextInput>Complemento (opcional):</TextInput>
            <Input
              type="text"
              id="complemento"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </label>
          <div>
            <BotaoBarra onClick={handleContinuarPagamento}>
              Continuar com o pagamento
            </BotaoBarra>
          </div>
          <div>
            <BotaoBarra2 onClick={onVoltarBarraLateral}>
              Voltar para a barra lateral
            </BotaoBarra2>
          </div>
        </div>
      )}
    </div>
  )
}

export default EntregaForm
