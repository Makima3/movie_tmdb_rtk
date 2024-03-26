import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {movieAction} from "../../store";
import {AllMovies} from "../../Components";

export const Movies = () => {
    const dispatch = useAppDispatch();
    const {page, movies}= useAppSelector(state => state.movie);
    const [_, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page})
    }, []);

    useEffect(() => {
        dispatch(movieAction.getAllMovies({page}))
    }, [page]);

    return (
        <div>
            <AllMovies movies={movies}/>
        </div>
    );
};

