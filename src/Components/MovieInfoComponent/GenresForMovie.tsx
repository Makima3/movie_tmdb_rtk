import React, {FC} from 'react';
import {IGenre} from "../../interfaces";

interface IProps{
    genre:IGenre
}

export const GenresForMovie: FC<IProps> = ({genre}) => {

    return (
        <div>
            Genre: {genre.name}
        </div>
    );
};

