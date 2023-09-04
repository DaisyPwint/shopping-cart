const addToCart = (state,item) => {
    const newItem = {
        id: Math.floor(Math.random() * 100),
        name: item.name,
        price: item.price,
        amount: item.amount,
      };
    
      const updatedItems = [...state.items, newItem];
      const updatedTotalQuantity = state.totalQuantity + newItem.amount;
      const updatedTotalPrice = state.totalPrice + newItem.price * newItem.amount;
    
      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
}

const removeFromCart = (state,item) => {
    const filteredItems = state.items.filter((cart) => cart.id !== item.id);
    const updatedTotalQuantity = state.totalQuantity - item.amount;

    return {
        ...state,
        items: filteredItems,
        totalQuantity: updatedTotalQuantity,
    };
}

const clearCart = (state) => {
    return {
        ...state,
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    }
}

const updatedCartItem = (state,item,type) => {
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

// const decrease = (state,item) => {
//     const itemIndex = state.items.findIndex((cart => cart.id === item.id));
//     const existingItem = state.items[itemIndex];

//     let decreaseItem,updatedItems;
//     if(existingItem.amount === 1){
//         updatedItems = state.items.filter(cart => cart.id !== item.id);
//     }else{
//         decreaseItem = {...existingItem,amount: existingItem.amount - 1};
//         updatedItems = [...state.items];
//         updatedItems[itemIndex] = decreaseItem;
//     }
//     const updatedQuantity = updatedItems.reduce((total,item) => total + item.amount,0); 
//     const updatedPrice = updatedItems.reduce((total,item) => total + item.price * item.amount,0);

//     return {
//         ...state,
//         items: updatedItems,
//         totalQuantity: updatedQuantity,
//         totalPrice: updatedPrice
//     }
// }

const reducer = (state,action) => {

    switch(action.type){
        case 'ADD_TO_CART': return addToCart(state,action.payload);
        case 'REMOVE_FROM_CART' : return removeFromCart(state,action.payload);
        case 'CLEAR_CART' : return clearCart(state);
        case 'INCREASE' : return updatedCartItem(state,action.payload,'increase');
        case 'DECREASE' : return updatedCartItem(state,action.payload,'decrease');
        default:
            return state
    }
}

export default reducer;