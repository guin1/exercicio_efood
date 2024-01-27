// PagamentoForm.tsx
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

interface PagamentoFormProps {
  handleContinuarClick: () => void
  submeterInputs: () => void
  mostrarVoltarCarrinho: boolean
}

const PagamentoForm: React.FC<PagamentoFormProps> = ({ submeterInputs }) => {
  const [mostrarEntregaForm, setMostrarEntregaForm] = useState(false)
  const [mostrarPedidoConcluido, setMostrarPedidoConcluido] = useState(false)

  const [formData, setFormData] = useState({
    nomeCartao: '',
    numeroCartao: '',
    cartaoCvv: '',
    mesVencimento: '',
    anoVencimento: ''
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
    setMostrarPedidoConcluido(true)
  }

  return (
    <div className="container">
      {mostrarEntregaForm ? (
        <EntregaForm
          onVoltarBarraLateral={() => setMostrarEntregaForm(false)}
        />
      ) : mostrarPedidoConcluido ? (
        <PedidoConcluido onClose={() => setMostrarPedidoConcluido(false)} />
      ) : (
        <>
          <label>
            <Entrega>Pagamento - Valor a pagar R$ 190,90</Entrega>
            <TextInput>Nome no cartão:</TextInput>
            <Input
              id="nomeCartao"
              type="text"
              name="nomeCartao"
              value={formData.nomeCartao}
              onChange={handleChange}
            />
          </label>
          <ContainerCepNumero>
            <label>
              <TextInput>Número do cartão</TextInput>
              <InputCartao
                id="numeroCartao"
                type="text"
                name="numeroCartao"
                value={formData.numeroCartao}
                onChange={handleChange}
              />
            </label>
            <label>
              <TextCVV>CVV:</TextCVV>
              <InputCVV
                id="cartaoCvv"
                type="text"
                name="cartaoCvv"
                value={formData.cartaoCvv}
                onChange={handleChange}
              />
            </label>
          </ContainerCepNumero>
          <ContainerCepNumero>
            <label>
              <TextInput>Mês de vencimento:</TextInput>
              <InputVct
                id="mesVencimento"
                type="text"
                name="mesVencimento"
                value={formData.mesVencimento}
                onChange={handleChange}
              />
            </label>
            <label>
              <TextVCt>Ano de vencimento:</TextVCt>
              <InputAnoVct
                id="anoVencimento"
                type="text"
                name="anoVencimento"
                value={formData.anoVencimento}
                onChange={handleChange}
              />
            </label>
          </ContainerCepNumero>
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
