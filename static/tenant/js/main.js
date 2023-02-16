
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




// MODAL EXTRANCE AND REMOVAL EFFECTS STARTS HERE
let registerdeviceformmodal = document.querySelector('.registerdeviceformmodal')
let registerstaff = document.querySelector('.registerstaff')
let registerstaff2 = document.querySelector('.registerstaff2')
let closemodal = document.querySelector('.closemodal')
let shadow = document.querySelector('.shadow')

registerstaff.addEventListener('click', () => {
    registerdeviceformmodal.classList.add('registerdeviceformmodalShow')
    shadow.style.display = 'block'
    registerdeviceformmodal.style.display = 'block';
    
})

let closemodalsign = document.querySelector('.closemodalsign')
// closemodalsign.addEventListener('click', () => {
//     shadow.style.display = 'none'
//     registerdeviceformmodal.style.display = 'none';
// })

closemodal.addEventListener('click', () => {
    shadow.style.display = 'none'
    registerdeviceformmodal.style.display = 'none';
    // scannetworkmmodal.style.display = 'none';
})

// MODAL EXTRANCE AND REMOVAL EFFECTS ENDS HERE

registerstaff2.addEventListener('click', () => {
    console.log('clicked o')
    mobilenavbar.style.display = 'none'
    closenav.style.display = 'none'
    opennav.style.display = 'block'
    // 
    registerdeviceformmodal.classList.add('registerdeviceformmodalShow')
    shadow.style.display = 'block'
    registerdeviceformmodal.style.display = 'block';
})