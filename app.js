//Variables
const computer = document.querySelector('.computer')
const player = document.querySelector('.player')
const carrier = document.querySelectorAll('.carrier')
const battleship = document.querySelectorAll('.battleship')
const cruiser = document.querySelectorAll('.cruiser')
const submarine = document.querySelectorAll('.submarine')
const destroyer = document.querySelectorAll('.destroyer')
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
const p2 = document.querySelectorAll('.p2')
const p1 = document.querySelectorAll('.p1')
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
    for(let i = 0; i < boats.length; i++) {
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
let shipCounter = 0

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
        console.log(shipCounter)
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


const leftBoard = [
    [cells[0], cells[1], cells[2], cells[3], cells[4], cells[5], cells[6], cells[7], cells[8], cells[9]],
    [cells[10], cells[11], cells[12], cells[13], cells[14], cells[15], cells[16], cells[17], cells[18], cells[19]],
    [cells[20], cells[21], cells[22], cells[23], cells[24], cells[25], cells[26], cells[27], cells[28], cells[29]],
    [cells[30], cells[31], cells[32], cells[33], cells[34], cells[35], cells[36], cells[37], cells[38], cells[39]],
    [cells[40], cells[41], cells[42], cells[43], cells[44], cells[45], cells[46], cells[47], cells[48], cells[49]],
    [cells[50], cells[51], cells[52], cells[53], cells[54], cells[55], cells[56], cells[57], cells[58], cells[59]],
    [cells[60], cells[61], cells[62], cells[63], cells[64], cells[65], cells[66], cells[67], cells[68], cells[69]],
    [cells[70], cells[71], cells[72], cells[73], cells[74], cells[75], cells[76], cells[77], cells[78], cells[79]],
    [cells[80], cells[81], cells[82], cells[83], cells[84], cells[85], cells[86], cells[87], cells[88], cells[89]],
    [cells[90], cells[91], cells[92], cells[93], cells[94], cells[95], cells[96], cells[97], cells[98], cells[99]],
   
]
const rightBoard = [
    [cells[100], cells[101], cells[102], cells[103], cells[104], cells[105], cells[106], cells[107], cells[108], cells[109]],
    [cells[110], cells[111], cells[112], cells[113], cells[114], cells[115], cells[116], cells[117], cells[118], cells[119]],
    [cells[120], cells[121], cells[122], cells[123], cells[124], cells[125], cells[126], cells[127], cells[128], cells[129]],
    [cells[130], cells[131], cells[132], cells[133], cells[134], cells[135], cells[136], cells[137], cells[138], cells[139]],
    [cells[140], cells[141], cells[142], cells[143], cells[144], cells[145], cells[146], cells[147], cells[148], cells[149]],
    [cells[150], cells[151], cells[152], cells[153], cells[154], cells[155], cells[156], cells[157], cells[158], cells[159]],
    [cells[160], cells[161], cells[162], cells[163], cells[164], cells[165], cells[166], cells[167], cells[168], cells[169]],
    [cells[170], cells[171], cells[172], cells[173], cells[174], cells[175], cells[176], cells[177], cells[178], cells[179]],
    [cells[180], cells[181], cells[182], cells[183], cells[184], cells[185], cells[186], cells[187], cells[188], cells[189]],
    [cells[190], cells[191], cells[192], cells[193], cells[194], cells[195], cells[196], cells[197], cells[198], cells[199]],
]

