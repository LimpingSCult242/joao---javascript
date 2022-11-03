const inputelement = document.querySelector('.new-taks-input')
const addtaskbutton = document.querySelector('.taks-button')
const taskcontainer = document.querySelector('.tasks-container')

function validarbotao(){
    const texto = document.createElement('p')
    taskcontainer.appendChild(texto)
    texto.innerText = inputelement.value 
}

addtaskbutton.addEventListener('click',validarbotao);