import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            // console.log(state.cartItems);
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            // console.log(action);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.cartItems.push({ ...action.payload, quantity: action.payload.quantity })
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state, action) => {
            state.cartItems = []
        }

    }
});

export const { addToCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
