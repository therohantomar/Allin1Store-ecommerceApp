import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./poductsSlice";
const Store=configureStore({
    reducer:{
        cart:cartSlice,
        products:productsSlice
    }
})

export default Store