const board = document.querySelector('.sound-board')
const audios = board.getElementsByTagName('audio')

for (const audio of audios) {
    audio.addEventListener('play', (e) => {
        e.currentTarget.classList.add('playing')
    })
    audio.addEventListener('pause', (e) => {
        e.currentTarget.classList.remove('playing')
    })
}

board.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return

    const targetAudio = e.target.parentElement.querySelector('audio')
    const playingAudio = board.querySelector('audio.playing')

    if (playingAudio) {
        playingAudio.pause()
        playingAudio.currentTime = 0
    }

    if (targetAudio !== playingAudio) targetAudio.play()
})
