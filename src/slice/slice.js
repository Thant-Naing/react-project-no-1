import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCard : []
};

 const cardSlice = createSlice({
    name: "card",
    initialState:initialState,
    reducers : {
        addToCard : (state,newData) => {state.totalCard.push(newData)},
        deleCard : (state,id) => {state.totalCard.filter((pd) => pd.id!=id )}
    }
})

export const {addToCard,deleCard}=cardSlice.actions;

export default cardSlice;