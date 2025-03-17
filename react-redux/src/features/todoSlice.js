import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        task: "New Task",
    }
];

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        newTodo: (state, action) => {
            const newTask = {
                id: nanoid(),
                task: action.payload.task
            }

            state.push(newTask);
        },

        removeTodo: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    }
});

export const { newTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;