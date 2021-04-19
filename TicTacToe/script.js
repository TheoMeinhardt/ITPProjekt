const X_CLASS = 'x'
const C_CLASS = 'c'
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let cTurn

// Minute 31
startGame()


function startGame(){
    cTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once:true})
    })
    setBoardHoverClass()
}


function handleClick(e) {
    const cell = e.target
    const currentClass = cTurn ? C_CLASS : X_CLASS
    placeMark(cell, currentClass)
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}
function swapTurns(){
    cTurn = !cTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(C_CLASS)
    if(cTurn){
        board.classList.add(C_CLASS)
    }
    else{
        board.classList.add(X_CLASS)
    }
}