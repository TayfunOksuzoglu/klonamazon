import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    productsNumber: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // check if the received product is already in the products array or not
            const addProductExists = state.products.find((product) => product.id === action.payload.id);
            if (addProductExists) {
                addProductExists.quantity += parseInt(action.payload.quantity);
            } else {
                state.products.push({ ...action.payload, quantity: parseInt(action.payload.quantity) });
            }
            state.productsNumber += parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action) => {
            // find the product to be removing the array
            const productToRemove = state.products.find((product) => product.id === action.payload);
            // remove the quantity of that product from product number
            state.productsNumber -= productToRemove.quantity;
            // find the index of the product
            const index = state.products.findIndex((product) => product.id === action.payload);
            // use the index to remove from the array
            state.products.splice(index, 1);
        },
        incrementInCart: (state, action) => {
            const itemInc = state.products.find((item) => item.id === action.payload);
            if (itemInc.quantity >= 1) {
                itemInc.quantity += +1;
            }
            state.productsNumber += 1;
        },
        decrementInCart: (state, action) => {
            const itemDec = state.products.find((item) => item.id === action.payload);
            if (itemDec.quantity === 1) {
                const index = state.products.findIndex((item) => item.id === action.payload);
                state.products.splice(index, 1);
            } else {
                itemDec.quantity--;
            }
            state.productsNumber -= 1;
        },
    },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } = cartSlice.actions;
export default cartSlice.reducer;
