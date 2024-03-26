import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {Movie} from "./Movie";
import {PaginationMovies} from "./PaginationMovies";


interface IProps{
    movies: IMovie[]
}

export const AllMovies: FC<IProps> = ({movies}) => {
    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
            <PaginationMovies/>
        </div>
    );
};

