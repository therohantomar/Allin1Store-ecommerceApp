import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const Index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (Index === -1) {
        const item = { ...action.payload, quantity: 1 };
        state.items = [...state.items, item];
      } else {
        state.items.at(Index).quantity += 1;
        
        

      }
    },
    removeItem:(state,action)=>{
      const filteredProducts=state.items.filter(product=>{
        return product.title!==action.payload.title
      })
      state.items=filteredProducts

    },
    quantityIncrement:(state,action)=>{
      const Index=state.items.findIndex((item)=>item.title===action.payload.title)
      state.items.at(Index).quantity+=1

      
    },
    quantityDecrement:(state,action)=>{
      const Index=state.items.findIndex((item)=>item.title===action.payload.title)
      state.items.at(Index).quantity<=1?state.items.at(Index).quantity=1:state.items.at(Index).quantity-=1

    }
  },
 
});

export const { addItem, removeItem, quantityIncrement, quantityDecrement } = cartSlice.actions;
export default cartSlice.reducer
