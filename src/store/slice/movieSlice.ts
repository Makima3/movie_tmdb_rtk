import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICast, IGenre, IMovie, IMovieInfo} from "../../interfaces";
import {IOneMovieInfo} from "../../interfaces/infoMovieInterfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    page: string
    total_pages: number
    movies: IMovie[]
    movieById: IOneMovieInfo
    actors: ICast[]
    genres: IGenre[]
    errors: boolean
}

const initialState: IState = {
    page: null,
    total_pages: 500,
    movies: [],
    movieById: null,
    actors: null,
    genres: null,
    errors: null
}

const getAllMovies = createAsyncThunk<IMovieInfo, { page: string }>(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action)=>{
            state.page = action.payload.page
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.movieById = null;
                state.errors = false;
            })
})

export const {reducer: movieReducer, actions} = movieSlice

export const movieAction = {
    ...actions,
    getAllMovies
}