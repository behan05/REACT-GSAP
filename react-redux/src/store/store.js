import { configureStore } from '@reduxjs/toolkit';
import countSlice from '../features/counterSlice';
import formSlice  from '../features/formSlice';

export const store = configureStore({
    reducer: {
        counter: countSlice,
        form: formSlice,
    }
})