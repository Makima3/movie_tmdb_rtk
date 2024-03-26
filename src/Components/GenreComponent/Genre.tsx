import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import css from './Genre.module.css'

interface IProps{
    genre: IGenre
}
export const Genre:FC<IProps> = ({genre}) => {
    return (
        <div className={css.Genre}>
            {genre.name}
        </div>
    );
};

