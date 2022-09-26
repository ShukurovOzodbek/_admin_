import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios.get('http://localhost:3001/products')

        return data
    }
)

export const addProducts = createAsyncThunk(
    'products/addProducts',
    async (obj) => {
        const { data } = await axios.post('http://localhost:3001/products', obj)

        return data
    }
)

export const delProducts = createAsyncThunk(
    'products/delProducts',
    async (id, {rejectWithValue, dispatch}) => {
        const { data } = await axios.delete(`http://localhost:3001/products/${id}`)

        dispatch(getAfter(id))

        return data
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: 'idle'
    },
    reducers:{
        getAfter: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        } 
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

export const { getAfter } = productSlice.actions
export default productSlice.reducer