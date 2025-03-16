import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    countValue: 0
}


export const countSlice = createSlice({
    name: "count",
    initialState,

    reducers: {
        addNum: (state, action) => {
            state.countValue = action.payload;
        },
        
        removeNum: (state, action) => {
            state.countValue = action.payload;
        }
    }
})

export const { addNum,removeNum } = countSlice.actions;
export default countSlice.reducer;