import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/users");
    return response.data;
  }
);
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    user: {},
    
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logUserOut: (state) => {
      state.user = {};
    },
  },
  extraReducers: {
    [getUsersAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getUsersAsync.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setUser, logUserOut } = usersSlice.actions;
export default usersSlice.reducer;
