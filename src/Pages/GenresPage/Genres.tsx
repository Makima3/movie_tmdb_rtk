import React, {useEffect} from 'react';
import {movieAction} from "../../store";
import {useAppDispatch} from "../../hooks";
import {GenresMovies} from "../../Components";

export const Genres = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getAllGenres())
    }, []);

    return (
        <div>
            <GenresMovies/>
        </div>
    );
};

