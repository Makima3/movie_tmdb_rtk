import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../store";
import {AllMovies} from "../../Components";

export const GenreMoviePage = () => {

    const {id} = useParams<string>()
    const {page, movies} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch();
    const [_, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page})
    }, [id]);

    useEffect(() => {
        page && dispatch(movieAction.getMovieByGenre({page, with_genres: id}))
    }, [page, id, dispatch]);
    return (
        <div>
            <AllMovies movies={movies}/>
        </div>
    );
};

