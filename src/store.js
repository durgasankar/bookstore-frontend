import { configureStore } from '@reduxjs/toolkit';
import booksReducer  from './reducers/booksSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});