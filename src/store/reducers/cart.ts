import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/home'

type CartState = {
  items: Restaurant[]
}
const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
