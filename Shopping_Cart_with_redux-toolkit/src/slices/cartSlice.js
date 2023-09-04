import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const addItemToCart = (state,item) => {
    let newItem = {
        id: Math.floor(Math.random() * 100),
        name: item.name,
        price: item.price,
        amount: item.amount
    }
    return {
        ...state,
        items: [...state.items,newItem],
        totalQuantity: state.totalQuantity + newItem.amount,
        totalPrice: state.totalPrice + newItem.price * newItem.amount
    }
}

const updateCartItem = (state,item,type) => {
    const itemIndex = state.items.findIndex((cart => cart.id === item.id));
    const existingItem = state.items[itemIndex];

    let updatedItems;

    if(existingItem) {
        switch(type) {
            case 'increase' : 
                updatedItems = [...state.items];
                updatedItems[itemIndex] = {...existingItem,amount: existingItem.amount + 1};
                break;
            case 'decrease' : 
                if(existingItem.amount === 1){
                    updatedItems = state.items.filter(cart => cart.id !== item.id);
                }else{
                    updatedItems = [...state.items];
                    updatedItems[itemIndex] = {...existingItem,amount: existingItem.amount - 1};
                }
                break;
            default: 
                updatedItems = state.items;
                break;
        }
    }else{
        updatedItems = state.items;
    }

    const updatedQuantity = updatedItems.reduce((total,item) => total + item.amount,0); 
    const updatedPrice = updatedItems.reduce((total,item) => total + item.price * item.amount,0);

    return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedQuantity,
        totalPrice: updatedPrice
    }
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => addItemToCart(state,action.payload),
        removeFromCart : (state,action) => {
            const item = action.payload;
            const filteredItems = state.items.filter((cart) => cart.id !== item.id);
            return {
                ...state,
                items: filteredItems,
                totalQuantity: state.totalQuantity - item.amount,
            };
        },
        clearCart: (state) => initialState,
        increase: (state,action) => updateCartItem(state,action.payload,'increase'),
        decrease: (state,action) => updateCartItem(state,action.payload,'decrease')
    }
})

export const { addToCart,removeFromCart,clearCart,increase,decrease } = cartSlice.actions;

export default cartSlice.reducer;