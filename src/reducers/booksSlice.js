import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const initialState = {
    books: [],
    filter: 'all',
    search: ''
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push({
                id: uuid(),
                title: action.payload.title,
                author: action.payload.author,
                description: action.payload.description,
                read: false
            })
        },
        updateBook: (state, action) => {
            const bookIndex = state.books.findIndex(book => book.id === action.payload.id);
            if (bookIndex !== -1) {
                state.books[bookIndex] = action.payload;
            }
        },
        toggleReadStatus: (state, action) => {
            const book = state.books.find(book => book.id === action.payload);
            if (book) {
                book.read = !book.read;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;;
        },
        deleteBook: (state, action) => {
            state.search = action.payload;
        }
    }
})


export const { addBook, updateBook, toggleReadStatus, setFilter, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;