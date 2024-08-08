import { createSlice } from "@reduxjs/toolkit";

//createSlice function takes in a configuration to create a slice

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;   //this will make the items array size to zero (empty)
        },
    }
});

// The createSlice function will return an object and it will look like ->
 
// {
//      actions: {
//          addItem
//      },
//      reducer
// }

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;