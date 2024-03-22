import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'
import {SvgIcon} from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

export const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.Links}>
                <NavLink to={'movie'}><b>Movies</b></NavLink>
                <NavLink to={'genre'}><b>Genres</b></NavLink>
                <NavLink to={'search'}><b>Search</b></NavLink>
            </div>
            <div className={css.Icon}>
                <SvgIcon fontSize="large">
                    <AccountCircleSharpIcon/>
                </SvgIcon>
                <div className={css.Name}>
                    <p>Gojo</p>
                    <p>Satoru</p>
                </div>
            </div>
        </div>
    );
};

