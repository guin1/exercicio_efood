import React from 'react'
import Produto from '../../models/Produto'
import ProdutosPerfilCard from '../ProdutosPerfilCard'
import { ListContainer, ProdutosListProps } from './styles'

const ProdutosList: React.FC<ProdutosListProps> = ({ produtos }) => (
  <>
    <ListContainer>
      {produtos.map((produto: Produto) => (
        <ProdutosPerfilCard
          key={produto.id}
          produto={produto}
          name={produto.name}
          image={produto.image}
        />
      ))}
    </ListContainer>
  </>
)

export default ProdutosList
