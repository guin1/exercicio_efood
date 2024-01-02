import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducers from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducers,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
