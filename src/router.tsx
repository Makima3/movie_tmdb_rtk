import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layout";
import {GenreMoviePage, Genres, InfoMoviePage, Movies, Search} from "./Pages";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element:<Navigate to={'movie'}/>},
            {path: 'movie', element:<Movies/>},
            {path: 'movie/:id', element: <InfoMoviePage/>},
            {path: 'genre', element: <Genres/>},
            {path: 'genre/:id', element: <GenreMoviePage/>},
            {path: 'search', element:<Search/>}
        ]
    }
]);