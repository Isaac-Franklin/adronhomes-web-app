console.log('clicked now')

let allocatedagents = document.querySelector('.allocatedagents')
let propertiesSold = document.querySelector('.propertiesSold')
// 
let listofagents = document.querySelector('.listofagents')
let soldapartments = document.querySelector('.soldapartments')


listofagents.style.display = 'block'
allocatedagents.classList.add('active')


allocatedagents.addEventListener('click', () => {
    listofagents.style.display = 'block'
    allocatedagents.classList.add('active')
    // 
    
    soldapartments.style.display = 'none'
    propertiesSold.classList.remove('active')
})
propertiesSold.addEventListener('click', () => {
    listofagents.style.display = 'none'
    allocatedagents.classList.remove('active')
    // 
    soldapartments.style.display = 'block'
    propertiesSold.classList.add('active')
})

// MAIN SECTION FOR MANAER SWITCH STARTS HERE

let manager1 = document.querySelector('.manager1')
let manager2 = document.querySelector('.manager2')
let manager3 = document.querySelector('.manager3')
let manager4 = document.querySelector('.manager4')
let managername = document.querySelector('.managernamemain')



manager1.classList.add('manageractive')

manager1.addEventListener('click', () => {
    manager1.classList.add('manageractive')
    // 
    manager2.classList.remove('manageractive')
    manager3.classList.remove('manageractive')
    manager4.classList.remove('manageractive')
    // 
    managername.innerHTML = 'Olamide Funmi'
})
manager2.addEventListener('click', () => {
    manager2.classList.add('manageractive')
    // 
    manager1.classList.remove('manageractive')
    manager3.classList.remove('manageractive')
    manager4.classList.remove('manageractive')
    // 
    managername.innerHTML = 'Gerald Bamilola'
})
manager3.addEventListener('click', () => {
    manager3.classList.add('manageractive')
    // 
    manager2.classList.remove('manageractive')
    manager2.classList.remove('manageractive')
    manager1.classList.remove('manageractive')
    manager4.classList.remove('manageractive')
    // 
    managername.innerHTML = 'Hasam Lafiya'
})
manager4.addEventListener('click', () => {
    manager4.classList.add('manageractive')
    // 
    manager2.classList.remove('manageractive')
    manager3.classList.remove('manageractive')
    manager1.classList.remove('manageractive')
    // 
    managername.innerHTML = 'Jide Baba-Tunda'
})



// MAIN SECTION FOR MANAER SWITCH ENDS HERE