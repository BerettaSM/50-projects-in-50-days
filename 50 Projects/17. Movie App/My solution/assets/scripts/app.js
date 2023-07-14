import { loadMovies } from './data.js'
import * as app from './constants.js'
import * as event from './events.js'

app.searchInput.addEventListener('input', event.onSearch)
app.pagination.addEventListener('click', event.onClickPage)
app.moviesList.addEventListener('click', event.onClickMovie)
app.closeModalBtn.addEventListener('click', event.onCloseMovieModal)

const year = new Date().getFullYear()
app.yearSpan.textContent = year

loadMovies()
