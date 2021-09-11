import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartsAsync = createAsyncThunk(
  "carts/getCartsAsync",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/carts");
    return response.data;
  }
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    items: [],
    isLoading: false,
    usersCarts: [],
    cartPrice: 0,
  },
  reducers: {
    setUsersCarts: (state, action) => {
      state.usersCarts.push(action.payload);
    },
    removeUsersCarts: (state) => {
      state.usersCarts = [];
    },
    removeCartPrice: (state) => {
      state.cartPrice = 0;
    },
    setCartPrice: (state, action) => {
      state.cartPrice += action.payload;
    },
  },
  extraReducers: {
    [getCartsAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getCartsAsync.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export const {
  setUsersCarts,
  removeUsersCarts,
  removeCartPrice,
  setCartPrice,
} = cartsSlice.actions;
export default cartsSlice.reducer;
