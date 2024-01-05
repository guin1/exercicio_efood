import React from 'react'
import ProdutosPerfilCard from '../ProdutosPerfilCard'
import { ListContainer } from './styles'

import { Produto } from '../../pages/perfil'

export interface ProdutosListProps {
  produtos: Produto[]
}

const ProdutosList: React.FC<ProdutosListProps> = ({ produtos }) => (
  <>
    <ListContainer>
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
