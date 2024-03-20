const baseURL = 'https://api.themoviedb.org/3/'

const genre = '/genre/movie/list';
const movies = '/discover/movie';
const poster = 'https://image.tmdb.org/t/p/w300/'
const movie = '/movie'
const actors = '/movie'
const search = '/search/movie'
const tv = '/discover/tv'

const urls = {
    genre,
    movies,
    poster,
    search,
    movie: {
        byId: (id: string) => `${movie}/${id}`
    },
    actors: {
        byId: (id: string) => `${actors}/${id}/credits`
    },
    tv,

}

export {
    baseURL,
    urls
}