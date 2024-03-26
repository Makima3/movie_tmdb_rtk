import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {noPoster, urls} from "../../const";

interface IProps {
    movie: IMovie
}
export const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, release_date, vote_average}= movie
    return (
        <div>
           <div>
               {poster_path ? <img src={`${urls.poster}/${poster_path}`} alt={title}/> :
                   <img src={noPoster} alt={title}/>}
           </div>
        </div>
    );
};

