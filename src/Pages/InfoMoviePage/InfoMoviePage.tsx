import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {movieAction} from "../../store";
import {OneMovieInfo} from "../../Components";


export const InfoMoviePage = () => {

    const {id} = useParams<string>()
    const {movieById, actors} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieById({id}))
        dispatch(movieAction.getActors({id}))
    }, [id]);

    return (
        <div>
            {movieById && actors && <OneMovieInfo/>}
        </div>
    );
};
