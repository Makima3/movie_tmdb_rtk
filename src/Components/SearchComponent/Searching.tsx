import React, {FC, useEffect} from 'react';
import {movieAction} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {AllMovies} from "../MovieComponent/AllMovies";

interface IProps {
    word: string
}

export const Searching: FC<IProps> = ({word}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {movies} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        word
            ?
            dispatch(movieAction.getByKeyword({word, page}))
            :
            dispatch(movieAction.getAllMovies({page}))

    }, [word, page, dispatch]);

    return (
        <div>
            <AllMovies movies={movies}/>
        </div>
    );
};

