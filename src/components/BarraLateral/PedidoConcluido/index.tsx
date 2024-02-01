import React from 'react'
import { BotaoBarra, Entrega } from '../styles'
import { ContainerText, TextP } from './styles'
// import { NavLink } from 'react-router-dom'

interface PedidoConcluidoProps {
  onClose: () => void
  orderId: string
}

const PedidoConcluido: React.FC<PedidoConcluidoProps> = ({ orderId }) => (
  <ContainerText>
    <Entrega>{`Pedido realizado - ${orderId}`}</Entrega>
    <TextP>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
    </TextP>
    <TextP>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
    </TextP>
    <TextP>
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </TextP>
    <TextP>
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica.
      <br /> Bom apetite!
    </TextP>
    <BotaoBarra>Concluir</BotaoBarra>
  </ContainerText>
)

export default PedidoConcluido
