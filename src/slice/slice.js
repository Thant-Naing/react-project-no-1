import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalCard : []
};


 const cardSlice = createSlice({
    name: "totalCard",
    initialState:initialState,
    reducers : {
        
        addToCard : (state,newData) => {state.totalCard.push(newData)},

        deleCard: (state, action) => {
            state.totalCard = state.totalCard.filter(pd => pd.payload.id !== action.payload);
        },

        increase: (state, action) => {
            state.totalCard = state.totalCard.filter(pd =>{ 
                if(pd.payload.id == action.payload.id){
                    if(action.payload.type==="increase"){
                        pd.payload.quantity += 1 ;
                    }  if (action.payload.type==="decrease") {
                        pd.payload.quantity >1 && (pd.payload.quantity -= 1) ;
                    }
                return pd
            } else return pd
        
        });
           
        },
    }
})

export const {addToCard,deleCard,increase}=cardSlice.actions;

export default cardSlice;