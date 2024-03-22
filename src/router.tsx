import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layout";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: []
    }
]);