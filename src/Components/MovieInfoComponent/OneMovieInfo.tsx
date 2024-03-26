import React from 'react';
import {useAppSelector} from "../../hooks";
import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {noPoster, urls} from "../../const";
import {Actors} from "../ActorsComponent/Actors";
import {GenresForMovie} from "./GenresForMovie";

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
        <div>
            <div><h1>{title}</h1></div>

            <div>{poster_path ? <img src={`${urls.poster}/${poster_path}`} alt={title}/> :
                <img src={noPoster} alt={title}/>}
            </div>

            <div>
                <div><b>Release date: </b> {release_date}</div>
                <div><b>Runtime: </b>{runtime} min</div>
                <div><b>Budget: </b>{budget}$</div>
                <div><b>Original language: </b>{original_language}</div>
                <div><b> Overview:</b>{overview}</div>
            </div>

            <div>
                {
                    genres.map(genre => <GenresForMovie key={genre.id} genre={genre}/>)
                }
            </div>

            <div>
                <Rating name="half-rating-read" value={vote_average} max={10}
                        emptyIcon={<StarIcon style={{opacity: 0.5, color: 'gray'}}/>}
                />
            </div>

            <div>
                {
                    actors.map(actor => <Actors key={actor.id} actor={actor}/>)
                }
            </div>
        </div>
    );
};

