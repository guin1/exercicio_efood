import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProdutoNoCarrinho = {
  id: number
  capa: string
  titulo: string
  preco: number
}

type CartState = {
  showInputs: boolean
  showPagamentoInput: boolean
  pedidoConcluido: boolean
  inputValues: {
    input1: string
    input2: string
    input3: string
    input4: string
    input5: string
    input6: string
    numeroCartao: string
  }
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
  showInputs: false,
  showPagamentoInput: false,
  pedidoConcluido: false,
  inputValues: {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    numeroCartao: ''
  },
  produtosNoCarrinho: 0,
  produtoSelecionado: false,
  items: [],
  itensNoCarrinho: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleContinuarClick: (state) => {
      if (state.showInputs) {
        state.showInputs = false
        state.showPagamentoInput = true
      } else if (state.showPagamentoInput) {
        console.log('Número do Cartão:', state.inputValues.numeroCartao)
        state.showPagamentoInput = false
        state.pedidoConcluido = true
      } else {
        state.showInputs = true
      }
    },
    submitInputs: (state) => {
      if (state.showPagamentoInput) {
        state.showPagamentoInput = false
        state.showInputs = true
      } else if (state.pedidoConcluido) {
        state.pedidoConcluido = false
      } else {
        state.showInputs = false
      }
    },
    pedidoConcluidoClose: (state) => {
      state.pedidoConcluido = false
    },
    handleInputChange: (
      state,
      action: PayloadAction<{ inputName: string; value: string }>
    ) => {
      const { inputName, value } = action.payload

      if (inputName in state.inputValues) {
        state.inputValues[inputName as keyof typeof state.inputValues] = value
      }
    },
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
      const { id, capa, titulo, preco } = action.payload

      const produtoExistente = state.itensNoCarrinho.find(
        (item) => item.id === id
      )

      if (!produtoExistente) {
        state.itensNoCarrinho.push({ id, capa, titulo, preco })
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.itensNoCarrinho = state.itensNoCarrinho.filter(
        (item) => item.id !== id
      )
    }
  }
})

export const {
  handleContinuarClick,
  submitInputs,
  pedidoConcluidoClose,
  handleInputChange,
  adicionarProduto,
  selecionarProduto,
  atualizarBarraLateral,
  adicionarAoCarrinho,
  removerDoCarrinho
} = cartSlice.actions

export default cartSlice.reducer
