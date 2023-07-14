const container = document.querySelector('.container')

const medias = [
    {
        icon: 'fa-twitter',
        count: 12000,
        text: 'Twitter Followers',
    },
    {
        icon: 'fa-youtube',
        count: 5000,
        text: 'Youtube Subscribers',
    },
    {
        icon: 'fa-facebook',
        count: 7500,
        text: 'Facebook Fans',
    },
]

const createMediaElement = ({ icon, count, text }) => {
    const ele = document.createElement('div')
    ele.className = 'social-media'
    ele.innerHTML = `
        <i class="fa-brands ${icon}"></i>
        <p>
            <span class="count" data-count="${count}"></span>
            ${text}
        </p>
    `
    return ele
}

const updateCounter = (countEle) => {
    const targetCount = +countEle.getAttribute('data-count')

    const increment = targetCount / 250
    const updatedCount = +countEle.textContent + increment

    countEle.textContent = Math.floor(updatedCount)

    if (updatedCount < targetCount) {
        setTimeout(updateCounter.bind(null, countEle), 1)
    } else {
        countEle.textContent = targetCount
    }
}

const mediaElements = medias.map((media) => createMediaElement(media))

mediaElements.forEach((mediaEle) => {
    container.append(mediaEle)
    const countEle = mediaEle.querySelector('.count')
    countEle.textContent = 0
    updateCounter(countEle)
})
