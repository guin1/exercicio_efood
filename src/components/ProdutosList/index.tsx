import React from 'react'
import ProdutosPerfilCard from '../ProdutosPerfilCard'
import { ListContainer } from './styles'

import { Produto } from '../../pages/perfil'

export interface ProdutosListProps {
  produtos: Produto[]
  children?: React.ReactNode
}

const ProdutosList: React.FC<ProdutosListProps> = ({ produtos }) => (
  <>
    <ListContainer className="container">
      {produtos.map((produto) => (
        <ProdutosPerfilCard
          key={produto.id}
          produto={{ ...produto, name: produto.titulo }}
        />
      ))}
    </ListContainer>
  </>
)

export default ProdutosList
