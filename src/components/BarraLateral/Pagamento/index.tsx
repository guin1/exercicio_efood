import React from 'react'
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

interface PagamentoFormProps {
  inputValues: {
    numeroCartao: string
  }
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => void
  handleContinuarClick: () => void
  submterINputs: () => void
}

const PagamentoForm: React.FC<PagamentoFormProps> = ({
  inputValues,
  handleInputChange,
  handleContinuarClick,
  submterINputs
}) => (
  <div className="container">
    <label>
      <Entrega>Pagamento - Valor a pagar R$ 190,90</Entrega>
      <TextInput>Nome no cartão:</TextInput>
      <Input
        type="number"
        value={inputValues.numeroCartao}
        onChange={(e) => handleInputChange(e, 'numeroCartao')}
      />
    </label>
    <ContainerCepNumero>
      <label>
        <TextInput>Número do cartão</TextInput>
        <InputCartao
          type="number"
          value={inputValues.numeroCartao}
          onChange={(e) => handleInputChange(e, 'numeroCartao')}
        />
      </label>
      <label>
        <TextCVV>CVV:</TextCVV>
        <InputCVV
          type="number"
          value={inputValues.numeroCartao}
          onChange={(e) => handleInputChange(e, 'numeroCartao')}
        />
      </label>
    </ContainerCepNumero>
    <ContainerCepNumero>
      <label>
        <TextInput>Mês de vencimento:</TextInput>
        <InputVct
          type="number"
          value={inputValues.numeroCartao}
          onChange={(e) => handleInputChange(e, 'numeroCartao')}
        />
      </label>
      <label>
        <TextVCt> Ano de vencimento:</TextVCt>
        <InputAnoVct
          type="number"
          value={inputValues.numeroCartao}
          onChange={(e) => handleInputChange(e, 'numeroCartao')}
        />
      </label>
    </ContainerCepNumero>
    <div>
      <BotaoBarra onClick={handleContinuarClick}>
        Finalizar Pagamento
      </BotaoBarra>
    </div>
    <div>
      <BotaoBarra2 onClick={submterINputs}>
        Voltar para a edição de endereço
      </BotaoBarra2>
    </div>
  </div>
)

export default PagamentoForm
