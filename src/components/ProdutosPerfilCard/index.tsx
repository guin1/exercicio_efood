import React, { useCallback, useState } from 'react'
import {
  ContainerPerfil,
  ImagemPizza,
  Pizza,
  TextoPizza,
  ButtonSabiaMais
} from './styles'
import BarraLateral from '../BarraLateral'
import Modal from '../ModalPizza'
import { Produto } from '../../pages/perfil'

interface ProdutosPerfilCardProps {
  produto: Produto
}

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
  const getDescricao = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 170) + '...'
    }
    return descricao
  }

  return (
    <ContainerPerfil>
      <ImagemPizza
        src={produto.capa}
        alt="{produto.capa}"
        onClick={handleImagemPizzaClick}
      />
      <Pizza>{produto.titulo}</Pizza>
      <TextoPizza>{getDescricao(produto.descricao)}</TextoPizza>
      <div>
        <ButtonSabiaMais onClick={handleAdicionarCarrinho}>
          Mais detalhes
        </ButtonSabiaMais>
      </div>
      {exibirBarraLateral && (
        <BarraLateral
          produto={{
            id: produto.id,
            capa: produto.capa,
            titulo: produto.titulo,
            preco: produto.cardapio[0].preco
          }}
          onClose={handleCloseBarraLateral}
        />
      )}
      {exibirModal && (
        <Modal
          onClose={() => setExibirModal(false)}
          showSidebar={() => setExibirBarraLateral(true)}
          produto={produto}
        />
      )}
    </ContainerPerfil>
  )
}

export default ProdutosPerfilCard
