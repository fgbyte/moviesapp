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
        console.error(error)
    }

}

export async function getCategoriesPreview() {
    //GET /genre/movie/list => array[object]
    try {
        const { data } = await api('genre/movie/list')
        const categories = data.genres
        return categories
    } catch (error) {
        return console.error(error)
    }
}

export async function getVideos(movie_id) {
    try {
        const { data } = await api(`movie/${movie_id}/videos`)
        return data
    } catch (error) {
        return console.error(error)
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

export async function getMoviesByCategories(category_id) {
    //GET /discover/movie
    //es el endpoint para filtrar películas
    //debemos enviar un query param para el tipo de filtro (?query_param)
    try {
        const { data } = await api('discover/movie', {
            params: {
                with_genres: category_id,
            }
        })
        return data
    } catch (err) {
        console.error(err)
    }
}

export async function getMovie(movie_id) {
    // GET /movie/{movie_id}
    try {
        const { data } = await api(`/movie/${movie_id}`)
        return data
    } catch (err) {
        console.error(err)
    }
}


export async function handleSearch(search) {
    const { data } = await api(`/search/movie`, {
        params: {
            query: search,
            include_adult: 'false',
            language: 'en-US',
            page: '1'
        },
    })
    return data //array de movies
}