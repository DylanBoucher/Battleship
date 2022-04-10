//Variables
const computer = document.querySelector('.computer')
const player = document.querySelector('.player')
console.log(player)
const carrier = document.querySelector('.carrier')
const battleship = document.querySelector('.battleship')
const cruiser = document.querySelector('.cruiser')
const submarine = document.querySelector('.submarine')
const destroyer = document.querySelector('.destroyer')
const playerGameboard = document.querySelector('.gameboard1')
const rotate = document.querySelector('.rotate')
const message = document.querySelector('.message')
const startButton = document.querySelector('.start')
const computerGameboard = document.querySelector('.gameboard2')
const cells = document.querySelectorAll('td')
let startGame = false
let playerTurn = true
const ships = document.querySelector('.ships')
const boats = document.querySelectorAll('.boats')
let draggedItem = null;
let player1Hits = 0
let player2Hits = 0

//Start Button
startButton.addEventListener('click', () => {
    startGame = true
    cells.forEach(element => {
        element.classList.add('gameStarted')
    }) 
     message.innerHTML = 'Player 1\'s Turn'
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
    carrier.classList.toggle('rotateShips')
    battleship.classList.toggle('rotateShips')
    cruiser.classList.toggle('rotateShips')
    submarine.classList.toggle('rotateShips')
    destroyer.classList.toggle('rotateShips')
})

//Making hits and misses on the player 1 board
player.addEventListener('click', (e) => {
    if(startGame && !playerTurn) {
          if(e.target.classList.contains('occupied')) {
        console.log(e.target.classList)
        e.target.classList.add("hit")
        e.target.innerHTML = 'X'
        player1Hits++
        if(player1Hits === 17) {        //winning conditions
            message.innerHTML = 'Player 2 Wins!'
        } else {
            changePlayer()
            message.innerHTML = 'Player 1\'s Turn'
        }
    }else if(!e.target.classList.contains('occupied')) {
        e.target.classList.add("miss")
        e.target.innerHTML = '&#11044'
        changePlayer()
        message.innerHTML = 'Player 1\'s Turn'
        startGame = false
    }
    }else if(playerTurn){
        message.innerHTML = 'Wait your turn'
        setTimeout(() =>{
            message.innerHTML = 'Player 1\'s Turn'
        }, 2000)
    }else {
        message.innerHTML = 'Please press start'
    }
})

//Making hits and misses on the player 2 board
computer.addEventListener('click', (e) => {
    if(startGame && playerTurn) {
        if(e.target.classList.contains('occupied')) {
            console.log(e.target.classList)
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
    // console.log(e.target.innerHTML)
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
    })
})
    
  function placeShip(piece, index, boat) {
        let x = boatPieces[boat.innerHTML]
        let i = 0
          while (i < x) {
            console.log(i)  
            let currentCell = piece[index + i]
            currentCell.style.backgroundColor = 'gray'
            currentCell.classList.add('occupied')
            currentCell.appendChild(boat)
           i++
        }
     }     
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
