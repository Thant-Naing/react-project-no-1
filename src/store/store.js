import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "../slice/slice";

import productSlice from "../slice/products.slice";

export const store =configureStore({
    reducer :{
        totalCard : cardSlice.reducer,

        products : productSlice.reducer
    }
})