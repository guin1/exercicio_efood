import { useDispatch, useSelector } from 'react-redux'

import { adicionarAoCarrinho } from '../../store/reducers/cart'

import {
  ContainerModal,
  ContainerOverlay,
  Excluir,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalText,
  ModalTitle
} from './styles'

import excluir from '../../assets/images/excluir.png'
import { Produto } from '../../pages/perfil'
import ProdutosPerfilCard from '../ProdutosPerfilCard'
import { RootState } from '../../store'

export interface ModalProps {
  onClose: () => void
  showSidebar: () => void
  produto: Produto
}

const Modal = ({ showSidebar, onClose, produto }: ModalProps) => {
  const dispatch = useDispatch()
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.itensNoCarrinho
  )

  const handleClickAdicionarAoCarrinho = () => {
    {
      console.log('Produto ao adicionar ao carrinho:', produto)

      dispatch(
        adicionarAoCarrinho({
          id: produto.id,
          capa: produto.foto,
          nome: produto.nome,
          preco: produto.preco
        })
      )

      console.log('Estado após adicionar ao carrinho:', itensNoCarrinho)

      onClose()
    }
  }

  const primeiroItemCardapio =
    produto.cardapio && produto.cardapio.length > 1 ? produto.cardapio[1] : null

  return (
    <>
      <ContainerOverlay
        onClick={() => {
          onClose()
        }}
      />
      <ContainerModal>
        <ModalContent>
          <ModalImage src={produto.foto} alt={produto.foto} />
          {primeiroItemCardapio && (
            <ProdutosPerfilCard
              produto={{ ...produto, cardapio: [primeiroItemCardapio] }}
            />
          )}
          <ModalText>
            <Excluir src={excluir} alt="excluir" onClick={onClose} />{' '}
            <ModalTitle>
              <b>{produto.nome}</b>
            </ModalTitle>
            <ModalDescription>
              {produto.descricao}
              <br /> <br /> Serve: {produto.porcao}
            </ModalDescription>
            <ModalCloseButton
              onClick={() => {
                onClose()
                handleClickAdicionarAoCarrinho()
                showSidebar()
              }}
            >
              Adicionar ao carrinho - R$ {produto.preco}
            </ModalCloseButton>
          </ModalText>
        </ModalContent>
      </ContainerModal>
    </>
  )
}

export default Modal
