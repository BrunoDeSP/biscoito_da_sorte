const biscoito = document.querySelector("#biscoito")
const screen = document.querySelector('#menu')
const first_screen = document.querySelector('.screen1')
const second_screen = document.querySelector('.screen2')
const botao = document.querySelector('button')

biscoito.addEventListener('click', biscoito_quebrado)
botao.addEventListener('click', toggleScreen)
function biscoito_quebrado() {
    const randomNumber = Math.round(Math.random() * 10)
    if(randomNumber % 2 == 0) {
        second_screen.querySelector(".screen2 p").innerText = "Procure acender uma vela em vez de amaldiçoar a escuridão"
        toggleScreen()    
    } else {
        second_screen.querySelector(".screen2 p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu"
        toggleScreen()
    }
}

function toggleScreen() {
    screen.classList.toggle('hide')
    first_screen.classList.toggle('disable')
    second_screen.classList.toggle('disable')
}



