import {urls} from "../const";
import {IRes} from "../types";
import {IActors} from "../interfaces";
import {axiosService} from "./axiosService";

export const actorsService = {
    getById: (id: string): IRes<IActors> => axiosService.get(urls.actors.byId(id))
}