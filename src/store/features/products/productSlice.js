import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios('http://localhost:3001/products')

        return data 
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: 'idle'
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
            })  
            .addCase(fetchProducts.rejected, (state, action) => {
                state.data = action.payload
            }) 
            .addCase(fetchProducts.pending, (state, action) => {
                console.log('asdasda');
            }) 
    }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer