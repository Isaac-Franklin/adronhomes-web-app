console.log('activated!')

let closenav = document.querySelector('.closenav')
let opennav = document.querySelector('.opennav')
let mobilenavbar = document.querySelector('.mobilenavbar')

opennav.addEventListener('click', () => {
    mobilenavbar.style.display = 'block'
    closenav.style.display = 'block'
    opennav.style.display = 'none'
})

closenav.addEventListener('click', () => {
    mobilenavbar.style.display = 'none'
    closenav.style.display = 'none'
    opennav.style.display = 'block'
})