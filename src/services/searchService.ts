import {urls} from "../const";
import {IRes} from "../types";
import {IMovieInfo} from "../interfaces";
import {axiosService} from "./axiosService";

export const searchService = {
    getByKeyword: (query: string, page: string): IRes<IMovieInfo> => axiosService.get(urls.search, {
        params: {
            query,
            page
        }
    })
}