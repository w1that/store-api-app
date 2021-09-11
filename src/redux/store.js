import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./carts/cartsSlice";
import productsSlice from "./products/productsSlice";
import usersSlice from "./users/usersSlice";

export default configureStore({
    reducer:{
        products:productsSlice,
        users:usersSlice,
        carts:cartsSlice,

    }
})