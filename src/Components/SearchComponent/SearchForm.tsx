import React, {useState} from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {Searching} from "./Searching";


export const SearchForm = () => {

    const {handleSubmit, reset, register} = useForm()
    const [keyword, setKeyword] = useState<string>()

    const search: SubmitHandler<FieldValues> = (query) => {
        setKeyword(query.keyword)
        reset()
    };
    return (
        <>
        <form onSubmit={handleSubmit(search)}>
            <input type='text' placeholder='Search...' {...register('keyword')} />
            <button>Search movie</button>
        </form>
            <Searching keyword={keyword}/>
        </>
    );
};

