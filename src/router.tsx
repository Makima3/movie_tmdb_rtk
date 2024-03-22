import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {Genres, Movies, Search} from "./Pages";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element:<Navigate to={'movie'}/>},
            {path: 'movie', element:<Movies/>},
            {path: 'genre', element: <Genres/>},
            {path: 'search', element:<Search/>}
        ]
    }
]);