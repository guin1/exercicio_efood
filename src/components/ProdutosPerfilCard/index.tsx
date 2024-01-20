import React, { useCallback, useState } from 'react'
import {
  ContainerPerfil,
  ImagemPizza,
  Pizza,
  TextoPizza,
  ButtonSabiaMais,
  ButtonContainer
} from './styles'
import BarraLateral from '../BarraLateral'
import Modal from '../ModalPizza'
import { ProdutosPerfilCardProps } from '../../pages/perfil'

const ProdutosPerfilCard: React.FC<ProdutosPerfilCardProps> = ({ produto }) => {
  const [exibirBarraLateral, setExibirBarraLateral] = useState(false)
  const [exibirModal, setExibirModal] = useState(false)

  const handleAdicionarCarrinho = useCallback(() => {
    setExibirModal(true)
  }, [])

  const handleCloseBarraLateral = () => {
    setExibirBarraLateral(false)
  }

  const handleImagemPizzaClick = () => {
    setExibirModal(true)
  }

  return (
    <ContainerPerfil>
      <ImagemPizza
        src={produto.foto}
        alt="{produto.capa}"
        onClick={handleImagemPizzaClick}
      />
      <Pizza>{produto.nome}</Pizza>
      <TextoPizza>{produto.descricao}</TextoPizza>
      <ButtonContainer>
        <ButtonSabiaMais onClick={handleAdicionarCarrinho}>
          Mais detalhes
        </ButtonSabiaMais>
      </ButtonContainer>
      {exibirBarraLateral && (
        <BarraLateral
          produto={{
            id: produto.id,
            capa: produto.foto,
            nome: produto.nome,
            preco: produto.preco
          }}
          onClose={handleCloseBarraLateral}
        />
      )}
      {exibirModal && (
        <Modal
          onClose={() => {
            setExibirModal(false)
            setExibirBarraLateral(true)
          }}
          showSidebar={() => setExibirBarraLateral(true)}
          produto={produto}
        />
      )}
    </ContainerPerfil>
  )
}

export default ProdutosPerfilCard
