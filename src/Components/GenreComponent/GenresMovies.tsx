import React from 'react';
import {useAppSelector} from "../../hooks";
import {Genre} from "./Genre";

export const GenresMovies = () => {
    const {genres} = useAppSelector(state => state.movie)
    return (
        <div>
            {
                genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

