import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {Movie} from "./Movie";
import {PaginationMovies} from "./PaginationMovies";
import css from './Movies.module.css'


interface IProps {
    movies: IMovie[]
}

export const AllMovies: FC<IProps> = ({movies}) => {
    return (
        <>
        <div className={css.Cards}>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
            <div className={css.Pagination}><PaginationMovies/></div>
        </>
    );
};

