
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

//Start Button
startButton.addEventListener('click', () => {
    startGame = true
    // cells.style.backgroundColor = 'lightblue'
    // cells.style.opacity = '60%'
    
})

//Switching Turns
function changePlayer() {
    if(playerTurn) {
        playerTurn = false
    } else if (!playerTurn) {
        playerTurn = true
    }
}

rotate.addEventListener('click', () => {
    carrier.classList.toggle('rotateShips')
    battleship.classList.toggle('rotateShips')
    cruiser.classList.toggle('rotateShips')
    submarine.classList.toggle('rotateShips')
    destroyer.classList.toggle('rotateShips')
})


player.addEventListener('click', (e) => {
    if(startGame && playerTurn) {
          if(e.target.classList.contains('occupied')) {
        console.log(e.target.classList)
        e.target.classList.add("hit")
        e.target.innerHTML = 'X'
        changePlayer()
        message.innerHTML = 'Player 2\'s Turn'
    }else if(!e.target.classList.contains('occupied')) {
        e.target.classList.add("miss")
        e.target.innerHTML = '&#11044'
        changePlayer()
    }
    }else if(!playerTurn){
        message.innerHTML = 'Wait your turn'
        setTimeout(() =>{
            message.innerHTML = 'Player 1\'s Turn'
        }, 2000)
    }else {
        message.innerHTML = 'Please press start'
    }
})

computer.addEventListener('click', (e) => {
    if(startGame && !playerTurn) {
        if(e.target.classList.contains('occupied')) {
            console.log(e.target.classList)
            e.target.classList.add("hit")
            e.target.innerHTML = 'X'
            changePlayer()
            message.innerHTML = 'Player 1\'s Turn'
        }else if(!e.target.classList.contains('occupied')) {
            e.target.classList.add("miss")
            e.target.innerHTML = '&#11044'
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

// function hit() {
//     cells.forEach(element => {
//         element.addEventListener('click', () => {
//               element.classList.add('hit')
//               element.innerHTML = 'X' 
//         })
//     })
// }

// function miss() {
//     cells.forEach(element => {
//         element.addEventListener('click', () => {
//             if(playerTurn){
//               element.classList.add('miss')
//               element.innerHTML = '	&#11044'
//             }
//         })
//     })
// }

// const leftBoard = [
//     [cell[0], cell[1], cell[2], cell[3], cell[4], cell[5], cell[6], cell[7], cell[8], cell[9]],
//     [cell[10], cell[11], cell[12], cell[13], cell[14], cell[15], cell[16], cell[17], cell[18], cell[19]],
//     [cell[20], cell[21], cell[22], cell[23], cell[24], cell[25], cell[26], cell[27], cell[28], cell[29]],
//     [cell[30], cell[31], cell[32], cell[33], cell[34], cell[35], cell[36], cell[37], cell[38], cell[39]],
//     [cell[40], cell[41], cell[42], cell[43], cell[44], cell[45], cell[46], cell[47], cell[48], cell[49]],
//     [cell[50], cell[51], cell[52], cell[53], cell[54], cell[55], cell[56], cell[57], cell[58], cell[59]],
//     [cell[60], cell[61], cell[62], cell[63], cell[64], cell[65], cell[66], cell[67], cell[68], cell[69]],
//     [cell[70], cell[71], cell[72], cell[73], cell[74], cell[75], cell[76], cell[77], cell[78], cell[79]],
//     [cell[80], cell[81], cell[82], cell[83], cell[84], cell[85], cell[86], cell[87], cell[88], cell[89]],
//     [cell[90], cell[91], cell[92], cell[93], cell[94], cell[95], cell[96], cell[97], cell[98], cell[99]],
   
// ]

// const rightBoard = [
//     [cell[100], cell[101], cell[102], cell[103], cell[104], cell[105], cell[106], cell[107], cell[108], cell[109]],
//     [cell[110], cell[111], cell[112], cell[113], cell[114], cell[115], cell[116], cell[117], cell[118], cell[119]],
//     [cell[120], cell[121], cell[122], cell[123], cell[124], cell[125], cell[126], cell[127], cell[128], cell[129]],
//     [cell[130], cell[131], cell[132], cell[133], cell[134], cell[135], cell[136], cell[137], cell[138], cell[139]],
//     [cell[140], cell[141], cell[142], cell[143], cell[144], cell[145], cell[146], cell[147], cell[148], cell[149]],
//     [cell[150], cell[151], cell[152], cell[153], cell[154], cell[155], cell[156], cell[157], cell[158], cell[159]],
//     [cell[160], cell[161], cell[162], cell[163], cell[164], cell[165], cell[166], cell[167], cell[168], cell[169]],
//     [cell[170], cell[171], cell[172], cell[173], cell[174], cell[175], cell[176], cell[177], cell[178], cell[179]],
//     [cell[180], cell[181], cell[182], cell[183], cell[184], cell[185], cell[186], cell[187], cell[188], cell[189]],
//     [cell[190], cell[191], cell[192], cell[193], cell[194], cell[195], cell[196], cell[197], cell[198], cell[199]],
// ]



//got a lot of help from Troy Swayzee with this drag and drop


const boats = document.querySelectorAll('.boats')

let draggedItem = null;
    

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
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
}


// if(!startGame){
//     currentCell.style.backgroundColor = 'gray'
// }else {
//     currentCell.style.backgroundColor = 'lightblue'
//     currentCell.style.opacity = '60%'
// }