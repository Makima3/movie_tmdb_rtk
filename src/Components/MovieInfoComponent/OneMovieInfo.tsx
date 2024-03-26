import React from 'react';
import {useAppSelector} from "../../hooks";
import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {noPoster, urls} from "../../const";

export const OneMovieInfo = () => {

    const {movieById, actors} = useAppSelector(state => state.movie)
    const {poster_path,title, overview, vote_average, genres, release_date, runtime, budget, original_language} = movieById

    return (
        <div>
            <div><h1>{title}</h1></div>
            <div>
                Release date: {release_date}
                Runtime:{runtime}
                Budget: {budget}
                Original language: {original_language}
                Overview:{overview}
            </div>
            <div>{poster_path ? <img src={`${urls.poster}/${poster_path}`} alt={title}/> :
            <img src={noPoster} alt={title}/>}
            </div>
            <Rating name="half-rating-read" value={vote_average} max={10}
                    emptyIcon={<StarIcon style={{opacity: 0.5, color: 'gray'}}/>}
            />
        </div>
    );
};

