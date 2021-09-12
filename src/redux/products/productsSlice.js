import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
    categories: [],
    searchedProducts:[],
  },
  reducers: {
    setSearchedProducts:(state,action)=>{
      state.searchedProducts.push(action.payload)
    },
    removeSearchedProducts:(state)=>{
      state.searchedProducts=[]
    },
    
  },
  extraReducers: {
    [getProductsAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.items.map((item) => {
        if (!state.categories.includes(item.category)) {
          state.categories.push(item.category);
        }
      });
    },

    [getProductsAsync.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export const {setSearchedProducts,removeSearchedProducts} = productsSlice.actions;
export default productsSlice.reducer;
