import React, {useState} from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import {Searching} from "./Searching";
import css from './Search.module.css'


export const SearchForm = () => {

    const {handleSubmit, reset, register} = useForm()
    const [keyword, setKeyword] = useState<string>()

    const search: SubmitHandler<FieldValues> = (query) => {
        setKeyword(query.keyword)
        reset()
    };
    return (
        <>
            <div className={css.GeneralInput}>
        <form onSubmit={handleSubmit(search)}>
            <input className={css.Input} type='text' placeholder='Search...' {...register('keyword')} />
            <button className={css.Button}>Search movie</button>
        </form>
            </div>
            <Searching keyword={keyword}/>
        </>
    );
};

