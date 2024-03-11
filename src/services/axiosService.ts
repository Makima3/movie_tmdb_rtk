import axios from "axios";

import {baseURL} from "../const";

export const axiosService = axios.create({
    baseURL,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWJkYThmY2EzNmQxOTgzZmU2YWFkMDE4NzJhYWM5YSIsInN1YiI6IjY1ZGI2ZTg3ODI2MWVlMDE4NWMzMDdjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1s8KUnpqSy1bohe-S80yQ9Dv_fJGQwLOKQkvjK49xL4`
    }
})