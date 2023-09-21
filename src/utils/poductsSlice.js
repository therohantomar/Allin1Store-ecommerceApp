import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice=createSlice({
    name:'products',
    initialState:{
        Products:[]
    },
    reducers:{
        addProducts:(state,action)=>{
            state.Products=action.payload
        }
    }
})

export const {addProducts}=ProductsSlice.actions
export default ProductsSlice.reducer