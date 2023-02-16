console.log('working')

let homeownerbtn = document.querySelector('.homeownerbtn')
let tenantbtn = document.querySelector('.tenantbtn')
let homeownerssection = document.querySelector('.homeownerssection')
let tenantssection = document.querySelector('.tenantssection')
let main = document.querySelector('.main')


homeownerbtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('homeownerbtn clicked')
    main.style.display = 'none'
    homeownerssection.style.display = 'block'
})

tenantbtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('tenantbtn clicked')
    main.style.display = 'none'
    tenantssection.style.display = 'block'
})