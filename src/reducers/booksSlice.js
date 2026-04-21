import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { BOOK_IMAGES } from "../utils/bookImages";


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
            const randomImage = BOOK_IMAGES[Math.floor(Math.random() * BOOK_IMAGES.length)];

            state.books.push({
                id: uuid(),
                title: action.payload.title,
                author: action.payload.author,
                description: action.payload.description,
                read: false,
                image: randomImage
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
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})


export const { addBook, updateBook, toggleReadStatus, setFilter, deleteBook, setSearch } = bookSlice.actions;
export default bookSlice.reducer;