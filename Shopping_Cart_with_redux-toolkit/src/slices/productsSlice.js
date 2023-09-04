import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productsSlice.reducer;