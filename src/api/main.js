import axios from "axios"
import { API_KEY } from "./secrets"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY
    }
})



export async function getTrendingMoviesPreview() {
    //GET /trending/{media_type}/{time_window}
    try {
        const { data } = await api('trending/movie/day')
        //data === obj con las props "page" => number y "result" => [ 20 resultados ]
        const movies = data.results
        return movies
        //movies nos trae los objetos de 20 movies en tendencia
    } catch (error) {
        return console.error(error)
    }

}

// export async function getPopularMovies() {
//     // GET /movie/popular
//     try {
//         const { data } = await api('movie/popular')
//         const movies = data.results
//         return movies
//     } catch (error) {
//         return console.log(error)
//     }
// }

export async function getCategoriesPreview() {
    //GET /genre/movie/list => array[object]
    try {
        const { data } = await api('genre/movie/list')
        const categories = data.genres
        return categories
    } catch (error) {
        return console.log(error)
    }
}

export async function getVideos(movie_id) {
    try {
        const { data } = await api(`movie/${movie_id}/videos`)
        return data
    } catch (error) {
        return console.log(error)
    }
}

export async function getCredits(movie_id) {
    try {
        const { data } = await api(`/movie/${movie_id}/credits`)
        return data
    } catch (error) {
        return console.error(error)
    }
}

export async function getGenres() {
    try {
        const { data } = await api('genre/movie/list')
        return data
    } catch (error) {
        return console.error(error)
    }
}
