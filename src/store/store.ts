import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slice/movieSlice";
import {themeReducer} from "./slice/themeSlice";

export const store = configureStore({
    reducer:{
        movie: movieReducer,
        theme: themeReducer
    }
})