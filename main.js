const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")
const tryNumber = document.querySelector("#tryNumber")
const tryAgain = document.querySelector("#tryAgain")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1;

tryNumber.addEventListener('click', tryNumberClick)
tryAgain.addEventListener('click', tryAgainClick)
document.addEventListener('keydown', validEnter)

function tryNumberClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector(".screen-2 h2").innerText = `Você acertou em ${attempts} tentativas`
  }
  
  if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
  alert('Digite um número entre 0 e 10')
    
  }

  if (Number(inputNumber.value) == "") {
    alert('Digite um número')
    attempts--
    
  }
  
  inputNumber.value = ""  
  attempts++
 
  console.log(attempts)
}

function tryAgainClick (event) {
  
  toggleScreen()
  attempts = 1;
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function validEnter (event) {
  if(validEnter.key =='Enter' && screen1.classList.contains("hide")) {
    tryAgainClick()
  }
}

