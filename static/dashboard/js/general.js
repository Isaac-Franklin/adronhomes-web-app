console.log('general start')

let navimagesinner = document.querySelector('.navimagesinner')
let dropdownnavtab = document.querySelector('.dropdownnavtab')
let downarrow = document.querySelector('.downarrow')
let uparrow = document.querySelector('.uparrow')



downarrow.addEventListener('click', () => {
    downarrow.style.visibility = 'hidden'
    uparrow.style.display = 'block'
    dropdownnavtab.style.display = 'block'
})


uparrow.addEventListener('click', () => {
    downarrow.style.visibility = 'visible'
    uparrow.style.display = 'none'
    dropdownnavtab.style.display = 'none'
})

