import { useDispatch } from 'react-redux'

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

export interface ModalProps {
  onClose: () => void
  showSidebar: () => void
  produto: Produto
}

const Modal = ({ showSidebar, onClose, produto }: ModalProps) => {
  const dispatch = useDispatch()

  const handleClickAdicionarAoCarrinho = () => {
    if (produto.cardapio && produto.cardapio.length > 0) {
      dispatch(
        adicionarAoCarrinho({
          id: produto.id,
          capa: produto.foto,
          titulo: produto.titulo,
          preco: produto.preco
        })
      )

      onClose()
    }
  }

  const primeiroItemCardapio =
    produto.cardapio && produto.cardapio.length > 0 ? produto.cardapio[0] : null

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
              <br /> <br /> Serve:{produto.porcao}
            </ModalDescription>
            <ModalCloseButton
              onClick={() => {
                onClose()
                showSidebar()
                handleClickAdicionarAoCarrinho()
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
