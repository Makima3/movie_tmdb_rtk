import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IKeyword} from "../../interfaces";
import {Searching} from "./Searching";


export const SearchForm = () => {

    const {handleSubmit, reset, register} = useForm()
    const [word, setWord] = useState<string>()

    const search = (query: IKeyword) => {
        setWord(query.keyword)
        reset()
    };
    return (
        <>
        <form onSubmit={handleSubmit(search)}>
            <input type='text' placeholder='Search...' {...register('keyword')} />
            <button>Search movie</button>
        </form>
            <Searching word={word}/>
        </>
    );
};

