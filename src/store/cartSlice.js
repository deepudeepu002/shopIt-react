import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addToCart: (state,action) => {
            const itemExist = state.items.find(item => item.id === action.payload.id)
            if(itemExist){
                itemExist.quantity += 1;
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
        },
        incrementQuantity: (state,action) => {
            const itemExist = state.items.find(item => item.id === action.payload.id)
            if (itemExist) { itemExist.quantity += 1 }
        },
        decrementQuantity: (state,action) => {
            const itemExist = state.items.find(item => item.id === action.payload.id)
            if (itemExist && itemExist.quantity > 1) { itemExist.quantity -= 1 }
        },
        removeFromCart: (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;