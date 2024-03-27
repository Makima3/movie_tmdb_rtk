import {noPoster, urls} from "../../const";
import {useNavigate} from "react-router-dom";
import React, {FC} from 'react';

import Badge from '@mui/material/Badge';
import {IMovie} from "../../interfaces";
import css from './Movies.module.css'

interface IProps {
    movie: IMovie
}

export const Movie: FC<IProps> = ({movie}) => {

    const {
        id,
        title,
        poster_path,
        release_date,
        vote_average
    } = movie
    const navigate = useNavigate()

    return (
        <div className={css.Blocks} onClick={() => navigate(`/movie/${id}`)}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}>
                {poster_path ? <img className={css.Poster} src={`${urls.poster}/${poster_path}`} alt={title}/> :
                    <img className={css.Poster} src={noPoster} alt={title}/>}
            </Badge>
            <div className={css.Text}>
                <p>{title}</p>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

