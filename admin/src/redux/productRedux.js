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
      state.isFetching = false;
      state.error = false;
      state.productsList = action.payload;

    },
    getProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE PRODUCT
    deleteProductStart: (state) => {
      state.isFetching = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;

      let indexProduct = state.productsList.findIndex(item => item._id === action.payload);
      console.log('id...', indexProduct, action.payload);
      state.productsList.splice(indexProduct, 1);
    },
    deleteProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const { getProductStart, getProductSuccess, getProductFailed, deleteProductStart, deleteProductSuccess, deleteProductFailed } = productSlice.actions
export default productSlice.reducer;