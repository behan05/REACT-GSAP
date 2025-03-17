import { configureStore } from '@reduxjs/toolkit';
import countSlice from '../features/counterSlice';
import formSlice from '../features/formSlice';
import todoSlice from '../features/todoSlice';

export const store = configureStore({
    reducer: {
        counter: countSlice,
        form: formSlice,
        todos: todoSlice
    }
})