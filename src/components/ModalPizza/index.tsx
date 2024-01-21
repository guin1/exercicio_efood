import React, { useState } from 'react'
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
  ModalTitle,
  Prato
} from './styles'
import excluir from '../../assets/images/excluir.png'
import { ModalProps } from '../../pages/perfil'
import ProdutosPerfilCard from '../ProdutosPerfilCard'
import { RootState } from '../../store'

const Modal = ({ showSidebar, onClose, produto }: ModalProps) => {
  const dispatch = useDispatch()
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.itensNoCarrinho
  )

  const [mensagemProdutoJaNoCarrinho, setMensagemProdutoJaNoCarrinho] =
    useState(false)

  const handleClickAdicionarAoCarrinho = () => {
    const produtoExistente = itensNoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produto.id
    )

    if (produtoExistente) {
      setMensagemProdutoJaNoCarrinho(true)
    } else {
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
      <ContainerOverlay onClick={() => onClose()} />
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
                handleClickAdicionarAoCarrinho()
                showSidebar()
              }}
            >
              Adicionar ao carrinho - R$ {produto.preco}
            </ModalCloseButton>
            {mensagemProdutoJaNoCarrinho && (
              <Prato>Prato já foi selecionado !!!</Prato>
            )}
          </ModalText>
        </ModalContent>
      </ContainerModal>
    </>
  )
}

export default Modal
