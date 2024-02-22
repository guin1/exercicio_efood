import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProdutoCardapio = {
  id: number
  nome: string
  descricao: string
  preco: number
}

type CardapioState = {
  cardapio: ProdutoCardapio[]
}

const initialState: CardapioState = {
  cardapio: []
}

const cardapioSlice = createSlice({
  name: 'cardapio',
  initialState,
  reducers: {
    setCardapio: (state, action: PayloadAction<ProdutoCardapio[]>) => {
      state.cardapio = action.payload
    }
  }
})

export const { setCardapio } = cardapioSlice.actions

export default cardapioSlice.reducer
