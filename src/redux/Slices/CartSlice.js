import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState:[] ,
    reducers:{
        add:(state,action) =>{
            state.push(action.payload)
        },
        remove: (state,action)=>{
            return state.filter((item)=> item.id !== action.payload)
            // it will return all the items except the one with the id that we passed in the payload
            // wahi item to retain karna hai jiska id match nahi karta hai payload ke id se
        },
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;