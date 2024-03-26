const baseURL = 'https://api.themoviedb.org/3/'

const genre = '/genre/movie/list';
const movies = '/discover/movie';
const noImage = 'https://i.pinimg.com/564x/9c/85/c7/9c85c706a24cd4d89af9a5861d554246.jpg'
const noPoster = 'https://i.pinimg.com/736x/be/aa/4b/beaa4b06ec621368d665eccc509c42c0.jpg'
const poster = 'https://image.tmdb.org/t/p/w300/'
const movie = '/movie'
const actors = '/movie'
const search = '/search/movie'

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
}

export {
    baseURL,
    urls,
    noPoster,
    noImage
}