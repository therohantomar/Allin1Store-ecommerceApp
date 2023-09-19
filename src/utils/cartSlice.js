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
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer
