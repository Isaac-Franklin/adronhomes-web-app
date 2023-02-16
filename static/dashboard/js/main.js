
//   OPEN AND CLOSE SIDE BAR ON MOBILE DEVICE
let closeNav = document.querySelector('.navclose')
let openNav = document.querySelector('.navopen')
let useraccesssection = document.querySelector('.navimages')
let listmenu = document.querySelector('.listmenu')


openNav.addEventListener('click', () => {
    openNav.style.display = 'none'
    closeNav.style.display = 'block'
    useraccesssection.style.opacity = '1'
    listmenu.style.display = 'block'
})

closeNav.addEventListener('click', () => {
    openNav.style.display = 'block'
    closeNav.style.display = 'none'
    useraccesssection.style.opacity = '0'
    listmenu.style.display = 'none'
})

