// store.js
import { createStore } from 'redux'

const initialState = {
  produtosSelecionados: [],
  valorTotal: 0
}

const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_PRODUTO':
      return {
        ...state,
        produtosSelecionados: [...state.produtosSelecionados, action.produto],
        valorTotal: state.valorTotal + action.produto.price
      }
    case 'REMOVER_PRODUTO':
      const produtoRemovido = state.produtosSelecionados.find(
        (produto) => produto.id === action.produtoId
      )
      return {
        ...state,
        produtosSelecionados: state.produtosSelecionados.filter(
          (produto) => produto.id !== action.produtoId
        ),
        valorTotal:
          state.valorTotal - (produtoRemovido ? produtoRemovido.price : 0)
      }
    default:
      return state
  }
}

const store = createStore(carrinhoReducer)

export default store
