import { configureStore } from "@reduxjs/toolkit";
import  booksReducer  from "../feature/books/BookSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    },
});
export default store;