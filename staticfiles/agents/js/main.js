let agentsbutton = document.querySelector('.agentsbutton')
let agentboxoutter = document.querySelector('.agentboxoutter')
let addnewagent = document.querySelector('.addnewagent')
let addnewagentbtn = document.querySelector('.addnewagent button')
let addnewagentsection = document.querySelector('.addnewagentsection')



agentboxoutter.style.display = 'block'
agentsbutton.style.backgroundColor = '#5c702a2f';


agentsbutton.addEventListener('click', () => {
    agentsbutton.style.backgroundColor = '#5c702a2f';
    agentboxoutter.style.display = 'block'
    addnewagentbtn.style.backgroundColor = 'white';
    addnewagentsection.style.display = 'none';
})

addnewagent.addEventListener('click', () => {
    agentsbutton.style.backgroundColor = 'white';
    addnewagentbtn.style.backgroundColor = '#5c702a2f';
    agentboxoutter.style.display = 'none'
    addnewagentsection.style.display = 'block';

})