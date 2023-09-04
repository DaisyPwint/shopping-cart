import { createContext, useReducer } from "react";
import reducer from "./ItemReducer";

const ITEMS = [
    {
        id: '1',
        name: 'Boots',
        price: 19.99,
    },
    {
        id: '2',
        name: 'Book',
        price: 6.79
    }
]

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const ItemContext = createContext({
    
});

export const ItemProvider = ({children}) => {
    const [cartItems,dispatch] = useReducer(reducer, initialState);
    
    return (
        <ItemContext.Provider value={{items: ITEMS, dispatchCart: dispatch,cartItems: cartItems}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContext;