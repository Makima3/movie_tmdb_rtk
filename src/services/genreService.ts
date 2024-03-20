import {urls} from "../const";
import {IRes} from "../types";
import {IGenres, IMovieInfo} from "../interfaces";
import {axiosService} from "./axiosService";

export const genreService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre),
    getMoviesByGenres: (page: string, with_genres: string): IRes<IMovieInfo> => axiosService.get(urls.movies, {
        params: {
            page,
            with_genres
        }
    })
}