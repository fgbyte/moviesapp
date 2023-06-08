import axios from "axios"
// import { API_KEY } from "./secrets" //para desarrollo con yarn
const apiKey = process.env.API_KEY; //para desarrollo con vercel


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': apiKey//API_KEY para yarn ;  apiKey para vercel
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


//LOCALE STORAGE FUNCTIONS
export function likedMoviesList() {
    const item = JSON.parse(localStorage.getItem("liked_movies"));
    // console.log(item)
    let movies;

    if (item) {
        movies = item;//guárdalo en movies
    } else {
        movies = [];//sino dame un {}
    }
    return movies;
    //con esto hacemos que si hay algo lo retorne y si no que nos de un {}
}

export function likeMovie(id, movie) {
    const likedMovies = likedMoviesList();
    const movieInfo = {
        id: id,
        html: movie.outerHTML
    }

    let foundMatch = false;
    for (let i = 0; i < likedMovies.length; i++) {
        if (likedMovies[i] && likedMovies[i].id === id) {
            likedMovies.splice(i, 1)
            foundMatch = true;
            break;
        }
    }

    if (!foundMatch) {
        likedMovies.push(movieInfo);
    }

    localStorage.setItem("liked_movies", JSON.stringify(likedMovies));
}
