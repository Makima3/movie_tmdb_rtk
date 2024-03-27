import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import css from './Genre.module.css'
import {movieAction} from "../../store";
import {useAppDispatch} from "../../hooks";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre
}

export const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const chosenGenre = () => {
        dispatch(movieAction.setPage({page: '1'}))
        navigate(`${id}`)
    }
    return (
        <div onClick={chosenGenre} className={css.Genre}>
            <h1>{name}</h1>
        </div>
    );
};

