import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ProdutoNoCarrinho = {
  id: number
  capa: string
  nome: string
  preco: number
}

type CartState = {
  produtosNoCarrinho: number
  produtoSelecionado: boolean
  items: string[]
  produtoNaBarraLateral?: {
    capa: string
    titulo: string
    preco: number
  }
  itensNoCarrinho: ProdutoNoCarrinho[]
}

const initialState: CartState = {
  produtosNoCarrinho: 0,
  produtoSelecionado: false,
  items: [],
  itensNoCarrinho: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarProduto: (state) => {
      state.produtosNoCarrinho += 1
    },
    selecionarProduto: (state) => {
      state.produtoSelecionado = true
    },
    atualizarBarraLateral: (
      state,
      action: PayloadAction<{ capa: string; titulo: string; preco: number }>
    ) => {
      state.produtoNaBarraLateral = {
        capa: action.payload.capa,
        titulo: action.payload.titulo,
        preco: action.payload.preco
      }
    },
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoNoCarrinho>) => {
      const { id } = action.payload
      const produtoExistente = state.itensNoCarrinho.find(
        (produto) => produto.id === id
      )

      if (!produtoExistente) {
        state.itensNoCarrinho.push(action.payload)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.itensNoCarrinho = state.itensNoCarrinho.filter(
        (produto) => produto.id !== id
      )
    }
  }
})

export const {
  adicionarProduto,
  selecionarProduto,
  atualizarBarraLateral,
  adicionarAoCarrinho,
  removerDoCarrinho
} = cartSlice.actions

export default cartSlice.reducer
