//Interacting with the DOM
const computer = document.querySelector('.computer')
const player = document.querySelector('.player')
const carrier = document.querySelectorAll('.carrier')
const battleship = document.querySelectorAll('.battleship')
const cruiser = document.querySelectorAll('.cruiser')
const submarine = document.querySelectorAll('.submarine')
const destroyer = document.querySelectorAll('.destroyer')
const rotate = document.querySelector('.rotate')
const message = document.querySelector('.message')
const startButton = document.querySelector('.start')
const cells = document.querySelectorAll('td')
const ships = document.querySelector('.ships')
const boats = document.querySelectorAll('.boats')
const p2 = document.querySelectorAll('.p2')
const p1 = document.querySelectorAll('.p1')
const restart = document.querySelector('.reset')
//Variables
let startGame = false
let playerTurn = true
let draggedItem = null;
let player1Hits = 0
let player2Hits = 0
const boatPieces = {
    Carrier1: 5,
    Battleship1: 4,
    Cruiser1: 3,
    Submarine1: 3,
    Destroyer1: 2,
    Carrier2: 5,
    Battleship2: 4,
    Cruiser2: 3,
    Submarine2: 3,
    Destroyer2: 2,
}
let shipCounter = 0

//Start Button
startButton.addEventListener('click', () => {
    startGame = true
    cells.forEach(element => {
        element.classList.add('gameStarted')
    }) 
     message.innerHTML = 'Player 1\'s Turn'  
})

restart.addEventListener('click', () => {
    window.location.reload()
})


//Switching Turns
function changePlayer() {
    if(playerTurn) {
        playerTurn = false
    } else if (!playerTurn) {
        playerTurn = true
    }
}

// Making the rotate button (Stretch Item)
rotate.addEventListener('click', () => {
    for(let i = 0; i < 2; i++) {
        carrier[i].classList.toggle('rotateShips')
        battleship[i].classList.toggle('rotateShips')
        cruiser[i].classList.toggle('rotateShips')
        submarine[i].classList.toggle('rotateShips')
        destroyer[i].classList.toggle('rotateShips') 
    }
})

//Making hits and misses on the player 1 board
player.addEventListener('click', (e) => {
    if(startGame && !playerTurn) {
        if(e.target.classList.contains('hit') || e.target.classList.contains('miss')) {
            message.innerHTML = 'Already shot there! <br> Try again!'
            setTimeout(() =>{
                message.innerHTML = 'Player 2\'s Turn!'
            }, 2000)
        }else {
            if(e.target.classList.contains('occupied')) {
                e.target.classList.add("hit")
                e.target.innerHTML = 'X'
                player1Hits++
            if(player1Hits === 17) {        //winning conditions
                message.innerHTML = 'Player 2 Wins!'
                startGame = false
            } else {
                changePlayer()
                message.innerHTML = 'Player 1\'s Turn'
            }
        }else if(!e.target.classList.contains('occupied')) {
            e.target.classList.add("miss")
            e.target.innerHTML = '&#11044'
            changePlayer()
            message.innerHTML = 'Player 1\'s Turn'    
        }
    } 
    }else if(!startGame) {
        message.innerHTML = 'Please press start'
    }else {
        message.innerHTML = 'Wait your turn'
        setTimeout(() =>{
            message.innerHTML = 'Player 1\'s Turn'
        }, 2000)
    }
})

//Making hits and misses on the player 2 board
computer.addEventListener('click', (e) => {
    if(startGame && playerTurn) {
        if(e.target.classList.contains('hit') || e.target.classList.contains('miss')) {
            message.innerHTML = 'Already shot there! <br> Try again!'
            setTimeout(() =>{
                message.innerHTML = 'Player 1\'s Turn!'
            }, 2000)
        }else {
            if(e.target.classList.contains('occupied')) {
                e.target.classList.add("hit")
                e.target.innerHTML = 'X'
                player2Hits++
            if(player2Hits === 17) {        //winning conditions
                message.innerHTML = 'Player 1 Wins!'
                startGame = false
            } else {
                 changePlayer()
            message.innerHTML = 'Player 2\'s Turn'
            }
        }else if(!e.target.classList.contains('occupied')) {
            e.target.classList.add("miss")
            e.target.innerHTML = '&#11044'
            message.innerHTML = 'Player 2\'s Turn'
            changePlayer()
        }
        }
    }else if(!startGame) {
        message.innerHTML = 'Please press start'
    }else {
        message.innerHTML = 'Wait your turn'
        setTimeout(() =>{
            message.innerHTML = 'Player 2\'s Turn'
        }, 2000)
    }
})

//got a lot of help from Troy Swayzee with this drag and drop
ships.addEventListener('dragstart', (e) => {
    draggedItem = e.target
    setTimeout(() => {
        e.target.style.display = 'none'
    }, 0) 
})

ships.addEventListener('dragend', (e) => {
    setTimeout(() => { 
        e.target.style.display = 'none'
    }, 0)
})

cells.forEach((cell, index) => {
    cell.addEventListener('dragenter', (e) => {
        e.preventDefault()
        cell.style.backgroundColor = 'gray'
    })

    cell.addEventListener('dragleave', () => {
        cell.style.backgroundColor = 'lightblue' 
    })

    cell.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    cell.addEventListener('drop', (e) => {
        placeShip(cells, index, draggedItem)
        shipCounter++
        if(shipCounter === 5) {
            p2.forEach(element => {
                element.style.display = 'block'
            })
            message.innerHTML = 'Player 2 <br> Place your ships!'
            p1.forEach(element => {
                element.style.opacity = '60%'
                element.style.backgroundColor = 'lightblue'
            })
        }
        if(shipCounter === 10) {
            message.innerHTML = 'Press start to play!'
        }
    })
})
    
function placeShip(piece, index, boat) {
    let x = boatPieces[boat.innerHTML]
    let i = 0
    while (i < x) { 
        let currentCell = piece[index + i]
        currentCell.style.backgroundColor = 'gray'
        currentCell.classList.add('occupied')
        currentCell.appendChild(boat)
        i++
    }
}
