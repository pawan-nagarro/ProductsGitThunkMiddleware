import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products', async () => {
  const response = await fetch('');
  const result = await response.json();
  return result;
});

const productsSlice = createSlice({
  name: 'ProductsSlice',
  initialState: {
    count: 0,
    data: null,
    isError: false,
    isLoading: false,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 2;
    },
    decrement: (state, action) => {
      state.count = state.count - 2;
    },
  },
});

export const {increment, decrement} = productsSlice.actions;
export default productsSlice.reducer;
