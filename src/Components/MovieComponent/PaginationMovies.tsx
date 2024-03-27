import {ChangeEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {movieAction} from "../../store";
import Pagination from '@mui/material/Pagination';

export const PaginationMovies = () => {

    const dispatch = useAppDispatch();
    const {total_pages} = useAppSelector(state => state.movie)
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        setQuery({page})
        dispatch(movieAction.setPage({page}))
    }, []);

    const change = (event: React.ChangeEvent<unknown>, page: number): void => {
        setQuery({page: `${page}`})
        dispatch(movieAction.setPage({page}))
    }

    return (
        <div>
            <Pagination onChange={change}
                        page={+page}
                        count={total_pages}
                        color="primary"
                        size="large"
                        shape="rounded"
                        boundaryCount={2}
            />
        </div>
    );
};

