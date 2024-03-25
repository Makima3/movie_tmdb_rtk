import {createSlice} from "@reduxjs/toolkit";

interface IState {

}

const initialState: IState = {}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
})

export const {reducer: themeReducer, actions} = themeSlice

export const themeAction = {
    ...actions
}