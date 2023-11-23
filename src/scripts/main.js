const tryBtn = document.querySelector("#tryBtn")
const resetBtn = document.querySelector("#resetBtn")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.floor(Math.random() * 11)

let xAttempts = 1


function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

const resetHandler = () => {
    toggleScreen()
    inputNumber.value = ""
    randomNumber = Math.floor(Math.random() * 11)
    xAttempts = 1
}

tryBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `You gussed it in ${xAttempts} attempts!`
    }

    xAttempts++
    inputNumber.value = ""
})


resetBtn.addEventListener('click', resetHandler)

document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter' && screen1.classList.contains("hide")){
        resetHandler()
    }
})







