import { useDispatch } from 'react-redux'

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

// import modalPizza from '../../assets/images/modal_pizza.png'

import excluir from '../../assets/images/excluir.png'
import { adicionarProduto } from '../../store/reducers/cart'
import { Produto } from '../../pages/perfil'

export interface ModalProps {
  onClose: () => void
  showSidebar: () => void
  produto: Produto
}

const Modal = ({ showSidebar, onClose, produto }: ModalProps) => {
  const dispatch = useDispatch()

  const handleClickAdicionarAoCarrinho = () => {
    dispatch(adicionarProduto())

    onClose()
    showSidebar()
  }
  const primeiroItemCardapio = produto.cardapio[0]

  return (
    <>
      <ContainerOverlay
        onClick={() => {
          onClose()
        }}
      />
      <ContainerModal>
        <ModalContent>
          <ModalImage src={produto.capa} alt={produto.titulo} />
          <ModalText>
            <ModalTitle>
              <b>{produto.titulo}</b>
            </ModalTitle>
            <Excluir src={excluir} alt="" onClick={onClose} />{' '}
            <ModalDescription>
              {produto.descricao}
              <br /> <br /> Serve: {primeiroItemCardapio.porcao}
            </ModalDescription>
            <ModalCloseButton
              onClick={() => {
                onClose()
                showSidebar()
                handleClickAdicionarAoCarrinho()
              }}
            >
              Adicionar ao carrinho - R$ {produto.cardapio[0].preco}
            </ModalCloseButton>
          </ModalText>
        </ModalContent>
      </ContainerModal>
    </>
  )
}

export default Modal
