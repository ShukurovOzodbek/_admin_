import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import userSlice from "./features/users/userSlice";

export default configureStore({
    reducer: {
        products: productSlice,
        users: userSlice
    }
})