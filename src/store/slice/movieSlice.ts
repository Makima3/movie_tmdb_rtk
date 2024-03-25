import {createSlice} from "@reduxjs/toolkit";
import {ICast, IGenre, IMovie} from "../../interfaces";

interface IState {
    page: string
    total_pages: number
    movies: IMovie[]

    characters: ICast[]
    genres: IGenre[]

}

const initialState: IState = {
    page: null,
    total_pages: 500,
    movies: [],
    movieById: null,
    characters: null,
    genres: null,
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
})

export const {reducer: movieReducer, actions} = movieSlice

export const movieAction = {
    ...actions
}