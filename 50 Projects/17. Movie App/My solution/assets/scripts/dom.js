import { spinner, movieModal, pagination, modalContent, moviesList } from './constants.js'
import { formatMinutes, formatMoney } from './utils.js'

export const toggleSpinner = () => {
    document.body.classList.toggle('modal__active')
    spinner.classList.toggle('spinner__show')
}

export const toggleMovieModal = () => {
    document.body.classList.toggle('modal__active')
    movieModal.classList.toggle('show')
}

const createPaginationButton = (page, disabled = false, innerText = page) => {
    const pageBtnEl = document.createElement('button')
    pageBtnEl.classList.add('page')
    pageBtnEl.setAttribute('data-page', page)
    pageBtnEl.textContent = innerText
    pageBtnEl.disabled = disabled
    return pageBtnEl
}

export const updatePagination = (
    currentPage,
    totalPages,
    curPageOffset = 5
) => {
    pagination.innerHTML = ''

    if (totalPages < 2) return

    // MovieDB is unable to display over the page 500, even though
    // the api response explicitly says there's more.
    totalPages = totalPages > 500 ? 500 : totalPages

    let startPage = currentPage - curPageOffset
    startPage = startPage < 1 ? 1 : startPage
    let endPage = currentPage + curPageOffset
    endPage = endPage > totalPages ? totalPages : endPage

    for (let page = startPage; page <= endPage; page++) {
        const disabled = page === currentPage
        const pageBtnEl = createPaginationButton(page, disabled)
        pagination.appendChild(pageBtnEl)
    }

    const isFirstPageDisabled = currentPage === 1
    const firstPageBtnEl = createPaginationButton(1, isFirstPageDisabled, '<<')
    pagination.insertAdjacentElement('afterbegin', firstPageBtnEl)

    const isLastPageDisabled = currentPage === totalPages
    const lastPageBtnEl = createPaginationButton(
        totalPages,
        isLastPageDisabled,
        '>>'
    )
    pagination.insertAdjacentElement('beforeend', lastPageBtnEl)
}

const createMovieElement = (apiResultMovie) => {
    const {
        id,
        poster_path: poster,
        vote_average: ratingVal,
        title,
    } = apiResultMovie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.setAttribute('data-movie-id', id)

    const ratingClass = ratingVal < 6 ? 'low' : ratingVal < 8 ? 'avg' : ''
    const rating = !ratingVal ? 'N/A' : ratingVal.toFixed(1)
    const imageUrl = poster
        ? `https://image.tmdb.org/t/p/w500${poster}`
        : '/assets/images/no-poster.jpg'
    
    const imagePreload = new Image()

    imagePreload.onload = function() {
        movieEl.querySelector('.spinner').remove()
        movieEl.querySelector('img').src = imagePreload.src
    }

    imagePreload.src = imageUrl

    const html = `
        <div class="spinner spinner__show"></div>
        <img src="">
        <div class="info">
            <span class="title">${title}</span>
            <span class="rating ${ratingClass}">${rating}</span>
        </div>
    `
    movieEl.innerHTML = html
    return movieEl
}

export const renderMovieDetails = (movie) => {
    const {
        vote_average: ratingVal,
        title,
        homepage,
        backdrop_path: backdrop,
        tagline,
        genres,
        overview,
        budget,
        revenue,
        release_date: releaseDate,
        runtime,
    } = movie

    const ratingClass = ratingVal < 6 ? 'low' : ratingVal < 8 ? 'avg' : ''
    const rating = !ratingVal ? 'N/A' : ratingVal.toFixed(1)

    const genresHtml = genres
        .map((genre) => '<span>' + genre.name + '</span>')
        .join('')

    const imageUrl = backdrop
        ? `https://image.tmdb.org/t/p/w500${backdrop}`
        : '/assets/images/no-backdrop.jpg'

    const duration = runtime ? formatMinutes(runtime) : 'Unknown'
    const budgetDesc = budget ? formatMoney(budget) : 'Unknown'
    const revenueDesc = revenue ? formatMoney(revenue) : 'Unknown'

    const html = `
        <div class="movie-header">
            <span class="rating ${ratingClass}">${rating}</span>
            <h1 class="title">
                <a
                    href="${homepage}"
                    class="homepage"
                >
                    ${title}
                </a>
            </h1>
        </div>
        <div class="movie-backdrop">
            <div class="spinner"></div>
            <img
                src="${imageUrl}"
            />
            <div class="image-overlay"></div>
            <span class="tagline">${tagline}</span>
        </div>
        <div class="genres">
            ${genresHtml || 'No tags provided.'}
        </div>
        <p class="overview">${overview || 'No description provided.'}</p>
        <div class="info">
            <h2>Info</h2>
            <p class='budget'>Budget: ${budgetDesc}</p>
            <p class='revenue'>Revenue: ${revenueDesc}</p>
            <p class='release'>Release date: ${releaseDate}</p>
            <p class='runtime'>Runtime: ${duration}</p>
        </div>
    `

    modalContent.innerHTML = html
}

export const renderMovies = (movies) => {
    movies.forEach(movie => {
        const movieEl = createMovieElement(movie)
        moviesList.appendChild(movieEl)
    })
}

export const showMessage = (message) => {
    const p = document.createElement('p')
    p.classList.add('message')
    p.textContent = message
    moviesList.innerHTML = ''
    moviesList.appendChild(p)
}