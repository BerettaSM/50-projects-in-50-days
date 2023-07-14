import { moviesList } from './constants.js'
import * as DOM from './dom.js'

const API_KEY = '' // themoviedb api key here

export const fetchMovieById = async (movieId) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    )
    if (!res.ok) throw Error('Something went wrong')
    return res.json()
}

export const fetchMovies = async (query, page) => {
    let res
    if (query) {
        res = await fetch(
            `https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${API_KEY}&page=${page}&query=${query}`
        )
    } else {
        res = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?include_adult=false&api_key=${API_KEY}&page=${page}`
        )
    }
    const json = await res.json()
    if (!res.ok) throw Error('Something went wrong')
    return json
}

export const loadMovies = async (query = '', page = 1) => {
    DOM.toggleSpinner()
    try {
        const apiResponse = await fetchMovies(query, page)
        moviesList.innerHTML = ''
        const { results: movies, total_pages: totalPages } = apiResponse
        if (movies.length > 0) {
            DOM.renderMovies(movies)
        } else {
            DOM.showMessage('No results for current query.');
        }
        DOM.updatePagination(page, totalPages)
    } catch (e) {
        DOM.showMessage(e.message)
    }
    DOM.toggleSpinner()
}
