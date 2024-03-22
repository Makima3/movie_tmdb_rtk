import {createSlice} from "@reduxjs/toolkit";

interface IState{

}

const initialState: IState = {

}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
})