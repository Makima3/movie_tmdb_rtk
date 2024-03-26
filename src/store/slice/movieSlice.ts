import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IActors, ICast, IGenre, IGenres, IMovie, IMovieInfo} from "../../interfaces";
import {IOneMovieInfo} from "../../interfaces/infoMovieInterfaces";
import {actorsService, genreService, movieService, searchService} from "../../services";
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

const getMovieById = createAsyncThunk<IOneMovieInfo, { id: string }>(
    'movieSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getActors = createAsyncThunk<IActors, { id: string }>(
    'movieSlice/getActors',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await actorsService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getAllGenres = createAsyncThunk<IGenres, void>(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMovieByGenre = createAsyncThunk<IMovieInfo, { page: string, with_genres: string }>(
    'moviesSlice/getMoviesByGenre',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getMoviesByGenres(page, with_genres)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getByKeyword = createAsyncThunk<IMovieInfo, { keyword: string, page: string }>(
    'movieSlice/getByKeyword',
    async ({keyword, page}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getByKeyword(keyword, page)
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
        setPage: (state, action) => {
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
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(getActors.fulfilled, (state, action) => {
                state.actors = action.payload.cast
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getMovieByGenre.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.movieById = null;
                state.errors = false;
            })
            .addCase(getByKeyword.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movies = results
            })

})

export const {reducer: movieReducer, actions} = movieSlice

export const movieAction = {
    ...actions,
    getAllMovies,
    getMovieById,
    getActors,
    getAllGenres,
    getMovieByGenre,
    getByKeyword
}