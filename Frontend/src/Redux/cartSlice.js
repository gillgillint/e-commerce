import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    reset: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, reset } = CartSlice.actions;

export default CartSlice.reducer;
