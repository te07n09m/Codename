const words = document.getElementsByClassName('word')

const resizeWord = () => {
    console.log('resize')
    const cardWidth = document.getElementsByClassName('card')[0].getBoundingClientRect().width
    const fontSize = cardWidth / 8
    for(let word of words) {
        word.style.fontSize = `${fontSize}px`
    }
}

window.addEventListener('resize', () => {
    resizeWord()
})

resizeWord()
