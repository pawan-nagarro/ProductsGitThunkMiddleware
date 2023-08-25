import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products', async count => {
  console.log('count inside fetch products', count);
  const response = await fetch(`https://dummyjson.com/products?limit=${count}`);
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
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.data = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isError = false;
        state.isLoading = false;
      });
  },
});

export const {increment, decrement} = productsSlice.actions;
export default productsSlice.reducer;
