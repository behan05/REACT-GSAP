import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    id: nanoid(),
    name: "Behan Kumar",
    age: 24,
    designation: "Software Engg",
    contact: 8969015583,
}


export const formSlice = createSlice({
    name: "form",
    initialState,

    reducers: {
        addFormInfo: (state, action) => {
            const { name, age, designation, contact } = action.payload;

            if (name && age && designation && contact) {
                state.id = nanoid();
                state.name = name;
                state.age = age;
                state.designation = designation;
                state.contact = contact;

            } else {
                console.error("Please fill all field!");
            }
        }
    }
})

export const { addFormInfo } = formSlice.actions;
export default formSlice.reducer;