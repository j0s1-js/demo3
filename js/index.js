const prev = document.querySelector(".buttons .left")
const download = document.querySelector(".buttons .center")
const next = document.querySelector(".buttons .right")
const slide = document.getElementById("slide")
const musicIcon = document.querySelector(".music")
const music = document.getElementById("music")

music.currentTime = 31

let openClick = true

next.addEventListener('click', () => {
    if(openClick){
        openClick = false
        const items = document.querySelectorAll('.item')
        slide.appendChild(items[0])
        setTimeout(() => {
            openClick = true
        }, 1000);
    }
})

prev.addEventListener('click', () => {
    if(openClick){
        openClick = false
        const items = document.querySelectorAll('.item')
        slide.prepend(items[items.length-1])
        setTimeout(() => {
            openClick = true
        }, 1000);
    }
})

download.addEventListener('click', () => {
    if(openClick){
        openClick = false
        const img = document.querySelectorAll('.item')[1]
        const imgUrl = img.src

        const a = document.createElement('a')
        a.download = img.alt
        a.href = imgUrl
        a.click()
        
        setTimeout(() => {
            openClick = true
        }, 1000);
    }
})

musicIcon.addEventListener('click', () => {
    if(musicIcon.className.indexOf('music-off') < 0){
        musicIcon.classList.add('music-off')
        music.pause()
    }else{
        musicIcon.classList.remove('music-off')
        music.play()
    }
})