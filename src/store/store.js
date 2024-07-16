import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "../slice/slice";

export const store =configureStore({
    reducer :{
        card : cardSlice.reducer
    }
})