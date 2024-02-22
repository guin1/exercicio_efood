import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store/reducers/cart'

import cardapioSlice from '../store/reducers/cardapio'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cardapio: cardapioSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
