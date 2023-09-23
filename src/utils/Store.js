import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./poductsSlice";
import userSlice from "./userSlice";
const Store=configureStore({
    reducer:{
        cart:cartSlice,
        products:productsSlice,
        user:userSlice
    }
})

export default Store