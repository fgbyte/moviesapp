import { API_KEY } from "./secrets"

export async function getTrendingMoviesPreview() {
    //GET /trending/{media_type}/{time_window}
   
   try {
       const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)
       const data = await res.json()
       //data === obj con las props "page" => number y "result" => [ 20 resultados ]

        const movies = data.results
        return movies
       //movies nos trae los objetos de 20 movies en tendencia
   } catch(error) {
        return console.error(error)
   }

}

export async function getPopularMovies() {
    // GET /movie/popular
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY)
        const data = await res.json()

        const movies = data.results
         return movies
    } catch(error) {
        return console.log(error)
    }
}

export async function getCategoriesPreview() {
    //GET /genre/movie/list => array[object]
    try {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY)
        const data = await res.json()

        const categories = data.genres
         return categories
    } catch(error) {
        return console.log(error)
    }
}