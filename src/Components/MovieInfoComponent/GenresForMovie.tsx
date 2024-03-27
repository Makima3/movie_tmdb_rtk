import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import css from './MovieInfo.module.css'

interface IProps{
    genre:IGenre
}

export const GenresForMovie: FC<IProps> = ({genre}) => {

    return (
        <div className={css.Genre}>
            {genre.name}
        </div>
    );
};

