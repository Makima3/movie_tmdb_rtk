import React from 'react';
import {useAppSelector} from "../../hooks";

import {Genre} from "./Genre";
import css from './Genre.module.css'

export const GenresMovies = () => {
    const {genres} = useAppSelector(state => state.movie)
    return (
        <div className={css.BlockGenre}>
            {
                genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

