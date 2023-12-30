import React, { useCallback, useState } from 'react'
import {
  ContainerPerfil,
  ImagemPizza,
  Pizza,
  TextoPizza,
  ProdutosPerfilCardProps,
  ButtonSabiaMais
} from './styles'
import BarraLateral from '../BarraLateral'
import Modal from '../Modal'

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
        src={produto.image}
        alt=""
        onClick={handleImagemPizzaClick}
      />
      <Pizza>{produto.name}</Pizza>
      <TextoPizza>{produto.text}</TextoPizza>
      <div>
        <ButtonSabiaMais onClick={handleAdicionarCarrinho}>
          Adicionar ao carrinho
        </ButtonSabiaMais>
      </div>
      {exibirBarraLateral && (
        <BarraLateral produto={produto} onClose={handleCloseBarraLateral} />
      )}
      {exibirModal && (
        <Modal
          onClose={() => setExibirModal(false)}
          showSidebar={() => setExibirBarraLateral(true)}
        />
      )}
    </ContainerPerfil>
  )
}

export default ProdutosPerfilCard
