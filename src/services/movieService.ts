import {urls} from "../const";
import {IRes} from "../types";
import {IMovieInfo} from "../interfaces";
import {axiosService} from "./axiosService";
import {IOneMovieInfo} from "../interfaces/infoMovieInterfaces";

export const movieService = {
    getAll: (page: string): IRes<IMovieInfo> => axiosService.get(urls.movies, {params: {page}}),
    getById: (id: string): IRes<IOneMovieInfo> => axiosService.get(urls.movie.byId(id))
}