import React, {FC} from 'react';

import {ICast} from "../../interfaces";
import {noImage, urls} from "../../const";
import css from './Actors.module.css'

interface IProps {
    actor: ICast
}

export const Actors: FC<IProps> = ({actor}) => {
    const {name, profile_path} = actor
    return (
        <div className={css.Block}>
            {
                profile_path ? <img className={css.Image} src={`${urls.poster}/${profile_path}`} alt={name}/> :
                    <img className={css.Image} src={noImage} alt={name}/>
            }
            <div><b>{name}</b></div>
        </div>
    );
};

