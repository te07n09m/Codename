const qrcode = document.getElementById('qrcode')
const spyId = document.getElementById('spy-id')
const masterLink = document.getElementById('master-link')
const cards = document.getElementsByClassName('card')
const confirmLink = document.getElementsByClassName('confirm-link')

const selectedClass = 'selected'
const gameId = spyId.innerHTML.replace('SPY:', '')
const masterUrl = `${window.location.origin}/game/master/${gameId}`

const qr = new QRCode(qrcode, {
    text: masterUrl,
    width: 128,
    height: 128
})
masterLink.href = masterUrl
masterLink.innerHTML = masterUrl

for(let ilink of confirmLink) {
    ilink.addEventListener('click', (e) => {
        e.preventDefault()
        if(confirm(`${ilink.dataset.linkname}に移動します。\nよろしいですか？`)) {
            window.location = ilink.href
        }
    })
}

for(let icard of cards) {
    icard.addEventListener('click', () => {
        if(icard.className.includes(selectedClass)) {
            const colorCard = icard.getElementsByClassName('color-card')[0]
            const moveCard = setInterval(() => {
                if(colorCard.offsetLeft <= 0 && colorCard.offsetTop <= 0) {
                    icard.classList.remove(selectedClass)
                    clearInterval(moveCard)
                }
                else {
                    const distance = Math.sqrt(colorCard.offsetLeft * colorCard.offsetLeft + colorCard.offsetTop * colorCard.offsetTop)
                    const speed = 40

                    const vx = (colorCard.offsetLeft / distance) * speed
                    const vy = (colorCard.offsetTop / distance) * speed

                    let nextLeft = colorCard.offsetLeft - vx
                    let nextTop = colorCard.offsetTop - vy
                    if(nextLeft < 0) {
                        nextLeft = 0
                    }
                    if(nextTop < 0) {
                        nextTop = 0
                    }

                    colorCard.style.left = `${nextLeft}px`
                    colorCard.style.top = `${nextTop}px`
                }
            }, 1000 / 60)
        }
        else {
            for(let jcard of cards) {
                jcard.classList.remove(selectedClass)
            }
            icard.classList.add(selectedClass)
        }
    })
}
