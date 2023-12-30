import React from 'react'
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

interface EntregaFormProps {
  inputValues: {
    input1: string
    input2: string
    input3: string
    input4: string
    input5: string
    input6: string
  }
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => void
  handleContinuarClick: () => void
  submterINputs: () => void
}

const EntregaForm: React.FC<EntregaFormProps> = ({
  inputValues,
  handleInputChange,
  handleContinuarClick,
  submterINputs
}) => (
  <div>
    <label>
      <Entrega>Entrega</Entrega>
      <TextInput>Quem irá receber:</TextInput>
      <Input
        type="text"
        value={inputValues.input1}
        onChange={(e) => handleInputChange(e, 'input1')}
      />
    </label>
    <label>
      <TextInput>Endereço:</TextInput>
      <Input
        type="text"
        value={inputValues.input2}
        onChange={(e) => handleInputChange(e, 'input2')}
      />
    </label>
    <label>
      <TextInput>Cidade:</TextInput>
      <Input
        type="text"
        value={inputValues.input2}
        onChange={(e) => handleInputChange(e, 'input3')}
      />
    </label>
    <ContainerCepNumero>
      <label>
        <TextInput>CEP:</TextInput>
        <InputCep
          type="number"
          value={inputValues.input4}
          onChange={(e) => handleInputChange(e, 'input4')}
        />
      </label>
      <LabelNumero>
        <TextInput>Número:</TextInput>
        <InputNumero
          type="number"
          value={inputValues.input5}
          onChange={(e) => handleInputChange(e, 'input5')}
        />
      </LabelNumero>
    </ContainerCepNumero>
    <label>
      <TextInput>Complemento (opcional):</TextInput>
      <Input
        type="text"
        value={inputValues.input6}
        onChange={(e) => handleInputChange(e, 'input6')}
      />
    </label>
    <div>
      <BotaoBarra onClick={handleContinuarClick}>
        Continuar com o pagamento
      </BotaoBarra>
    </div>
    <div>
      <BotaoBarra2 onClick={submterINputs}>Voltar para o carrinho</BotaoBarra2>
    </div>
  </div>
)

export default EntregaForm
