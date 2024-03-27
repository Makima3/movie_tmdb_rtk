import React from 'react';
import {useAppSelector} from "../../hooks";

import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {noPoster, urls} from "../../const";
import {Actors} from "../ActorsComponent/Actors";
import {GenresForMovie} from "./GenresForMovie";
import css from './MovieInfo.module.css'

export const OneMovieInfo = () => {

    const {movieById, actors} = useAppSelector(state => state.movie)
    const {
        poster_path,
        title,
        overview,
        vote_average,
        genres,
        release_date,
        runtime,
        budget,
        original_language
    } = movieById

    return (
        <>
            <div className={css.GeneralBlock}>

                <div className={css.FirstBlock}>
                    <div>
                        {poster_path ? <img className={css.Poster} src={`${urls.poster}/${poster_path}`} alt={title}/> :
                            <img className={css.Poster}src={noPoster} alt={title}/>}
                    </div>
                </div>

                <div className={css.SecondBlock}>
                    <div>
                        <h1>{title}</h1>
                        <p><b>Release date: </b> {release_date}</p>
                        <p><b>Runtime: </b>{runtime} min</p>
                        <p><b>Budget: </b>{budget}$</p>
                        <p><b>Original language: </b>{original_language}</p>
                        <p><b>Overview: </b>{overview}</p>
                        <div className={css.Rait}>
                            <Rating name="half-rating-read" value={vote_average} max={10}
                                    emptyIcon={<StarIcon style={{opacity: 0.5, color: 'gray'}}/>}
                            />
                            <div>{vote_average}</div>
                        </div>
                        <div className={css.Genres}>{genres.map(genre => <GenresForMovie key={genre.id}
                                                                                         genre={genre}/>)}</div>
                    </div>
                </div>
            </div>
            <div className={css.Title}><h1>Main cast</h1></div>
            <div className={css.Actors}>
                {
                    actors.map(actor => <Actors key={actor.id} actor={actor}/>)
                }
            </div>
        </>

    );
};

