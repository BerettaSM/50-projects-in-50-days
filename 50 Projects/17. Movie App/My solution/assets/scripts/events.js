import { searchInput, movieModal } from './constants.js'
import { loadMovies, fetchMovieById } from './data.js'
import { toggleSpinner, toggleMovieModal, renderMovieDetails } from './dom.js'

let searchEvent
let lastSearchQuery = ''

export const onSearch = (e) => {
    if (searchEvent) clearTimeout(searchEvent)
    searchEvent = setTimeout(() => {
        const query = e.target.value
        if (lastSearchQuery !== query) {
            loadMovies(query)
            lastSearchQuery = query
        }
        searchEvent = null
    }, 500)
}

export const onClickPage = async (e) => {
    if (e.target === e.currentTarget) return
    const page = +e.target.getAttribute('data-page')
    const query = searchInput.value
    await loadMovies(query, page)
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}

export const onClickMovie = async (e) => {
    if (e.target === e.currentTarget) return
    toggleSpinner()
    const movieEl = e.target.closest('.movie')
    const movieId = movieEl.getAttribute('data-movie-id')
    const movie = await fetchMovieById(movieId)
    renderMovieDetails(movie)
    toggleSpinner()
    toggleMovieModal()
}

export const onCloseMovieModal = () => {
    document.body.classList.remove('modal__active')
    movieModal.classList.remove('show')
}
