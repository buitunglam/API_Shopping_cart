import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productsList: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      console.log('products...',state, action);
      state.isFetching = false;
      state.error = false;
      state.productsList = action.payload;
      
    },
    getProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const { getProductStart, getProductSuccess, getProductFailed } = productSlice.actions
export default productSlice.reducer;