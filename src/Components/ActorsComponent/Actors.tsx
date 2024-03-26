import React, {FC} from 'react';
import {ICast} from "../../interfaces";
import {noImage, urls} from "../../const";

interface IProps{
    actor: ICast
}
export const Actors:FC <IProps> = ({actor}) => {
    const {name, profile_path}= actor
    return (
        <div>
            {
                profile_path? <img  src={`${urls.poster}/${profile_path}`} alt={name}/>:
                    <img src={noImage} alt={name}/>
            }
            <div><b>{name}</b></div>
        </div>
    );
};

