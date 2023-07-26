import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchedVideo : [],

}


export const inputSlice = createSlice({
    name : "input",
    initialState,
    reducers: {
        setInputvalue : (state, action)=>{
            return action.payload
        }
    }
})


export const { setInputvalue } = inputSlice.actions
export default inputSlice.reducer