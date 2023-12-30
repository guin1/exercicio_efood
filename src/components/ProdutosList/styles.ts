import styled from 'styled-components'
import Produto from '../../models/Produto'

export interface ProdutosListProps {
  produtos: Produto[]
}

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 10px;
    padding-right: 10px;
  }
`
