import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const { data } = await axios.get('http://localhost:3001/users')

        return data
    }
)

export const addUsers = createAsyncThunk(
    'users/addUsers',
    async (obj) => {
        const { data } = await axios.post('http://localhost:3001/users', obj)

        return data
    }
)

export const delUsers = createAsyncThunk(
    'users/delUsers',
    async (id, { rejectWithValue, dispatch }) => {
        const { data } = await axios.delete(`http://localhost:3001/users/${id}`)

        dispatch(getAfter(id))

        return data
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle'
    },
    reducers: {
        getAfter: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchUsers.pending, (state, action) => {
                console.log('asdasda');
            })
    }
})

export const { getAfter } = userSlice.actions
export default userSlice.reducer