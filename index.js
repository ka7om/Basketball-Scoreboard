let countA = 0
let countB = 0
let countElA = document.getElementById("count-el1")
let countElB = document.getElementById("count-el2")
let incrementBtn1A = document.getElementById("increment-btn1a")
let incrementBtn2A = document.getElementById("increment-btn2a")
let incrementBtn3A = document.getElementById("increment-btn3a")
let incrementBtn1B = document.getElementById("increment-btn1b")
let incrementBtn2B = document.getElementById("increment-btn2b")
let incrementBtn3B = document.getElementById("increment-btn3b")
let newGameBtn = document.getElementById("new-game-btn")

function increment1A() {
    countA += 1
    countElA.textContent = countA
}
function increment2A() {
    countA += 2
    countElA.textContent = countA
}
function increment3A() {
    countA += 2
    countElA.textContent = countA
}

// SPL

function increment1B() {
    countB += 1
    countElB.textContent = countB
}
function increment2B() {
    countB += 2
    countElB.textContent = countB
}
function increment3B() {
    countB += 2
    countElB.textContent = countB
}

function newgame() {
    countA = 0
    countB = 0
    countElA.textContent = 0
    countElB.textContent = 0
}