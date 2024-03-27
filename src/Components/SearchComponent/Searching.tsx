import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {AllMovies} from "../MovieComponent/AllMovies";

interface IProps {
    keyword: string
}

export const Searching: FC<IProps> = ({keyword}) => {
    const [query] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {movies} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        keyword
            ?
            dispatch(movieAction.getByKeyword({keyword, page}))
            :
            dispatch(movieAction.getAllMovies({page}))

    }, [keyword, page, dispatch]);

    return (
        <div>
            <AllMovies movies={movies}/>
        </div>
    );
};

