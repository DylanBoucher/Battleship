
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
const cell = document.querySelectorAll('td')
let startGame = false
let playerTurn = true



startButton.addEventListener('click', () => {
    startGame = true
})



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

// player.addEventListener('click', () => {
//     if (!playerTurn) {
//         hit()
//         playerTurn = true
//         console.log(playerTurn)
//     }else if(playerTurn) {
//         message.innerText = 'Players turn'
//     }
   
// })

// computer.addEventListener('click', () => {
//    if(playerTurn) {
//        hit()
//        playerTurn =false
//        console.log(playerTurn)
       
//    }else if(!playerTurn) {
//        message.innerText = 'computers turn'
//    }
// })

function hit() {
    cell.forEach(element => {
        element.addEventListener('click', () => {
              element.classList.add('hit')
              element.innerHTML = 'X' 
        })
    })
}

function miss() {
    cell.forEach(element => {
        element.addEventListener('click', () => {
            if(playerTurn){
              element.classList.add('miss')
              element.innerHTML = '	&#11044'
            } else if (!playerTurn) {
                message.innerText = 'Wait your turn!'
            }
        })
    })
}

const leftBoard = [
    [cell[0], cell[1], cell[2], cell[3], cell[4], cell[5], cell[6], cell[7], cell[8], cell[9]],
    [cell[10], cell[11], cell[12], cell[13], cell[14], cell[15], cell[16], cell[17], cell[18], cell[19]],
    [cell[20], cell[21], cell[22], cell[23], cell[24], cell[25], cell[26], cell[27], cell[28], cell[29]],
    [cell[30], cell[31], cell[32], cell[33], cell[34], cell[35], cell[36], cell[37], cell[38], cell[39]],
    [cell[40], cell[41], cell[42], cell[43], cell[44], cell[45], cell[46], cell[47], cell[48], cell[49]],
    [cell[50], cell[51], cell[52], cell[53], cell[54], cell[55], cell[56], cell[57], cell[58], cell[59]],
    [cell[60], cell[61], cell[62], cell[63], cell[64], cell[65], cell[66], cell[67], cell[68], cell[69]],
    [cell[70], cell[71], cell[72], cell[73], cell[74], cell[75], cell[76], cell[77], cell[78], cell[79]],
    [cell[80], cell[81], cell[82], cell[83], cell[84], cell[85], cell[86], cell[87], cell[88], cell[89]],
    [cell[90], cell[91], cell[92], cell[93], cell[94], cell[95], cell[96], cell[97], cell[98], cell[99]],
   
]

const rightBoard = [
    [cell[100], cell[101], cell[102], cell[103], cell[104], cell[105], cell[106], cell[107], cell[108], cell[109]],
    [cell[110], cell[111], cell[112], cell[113], cell[114], cell[115], cell[116], cell[117], cell[118], cell[119]],
    [cell[120], cell[121], cell[122], cell[123], cell[124], cell[125], cell[126], cell[127], cell[128], cell[129]],
    [cell[130], cell[131], cell[132], cell[133], cell[134], cell[135], cell[136], cell[137], cell[138], cell[139]],
    [cell[140], cell[141], cell[142], cell[143], cell[144], cell[145], cell[146], cell[147], cell[148], cell[149]],
    [cell[150], cell[151], cell[152], cell[153], cell[154], cell[155], cell[156], cell[157], cell[158], cell[159]],
    [cell[160], cell[161], cell[162], cell[163], cell[164], cell[165], cell[166], cell[167], cell[168], cell[169]],
    [cell[170], cell[171], cell[172], cell[173], cell[174], cell[175], cell[176], cell[177], cell[178], cell[179]],
    [cell[180], cell[181], cell[182], cell[183], cell[184], cell[185], cell[186], cell[187], cell[188], cell[189]],
    [cell[190], cell[191], cell[192], cell[193], cell[194], cell[195], cell[196], cell[197], cell[198], cell[199]],
]

for(i = 0; i < leftBoard.length; i++) {
    for(j = 0; j < leftBoard.length; j++)
    leftBoard[i][j].addEventListener('click', () => {
    // console.log(leftBoard[i][j])
        if(playerTurn && startGame) {
            hit()
            console.log(playerTurn) 
            playerTurn = false
        }else if(!playerTurn && startGame) {
            miss()
            console.log(playerTurn)
        }
     })
}


//got a lot of help from Tyler Potts video: https://www.youtube.com/watch?v=tZ45HZAkbLc

const ships = document.querySelector('.ships')
const boats = document.querySelectorAll('.boats')

let draggedItem = null;
for (let i = 0; i < boats.length; i++) {
    const item = boats[i]
    
    item.addEventListener('dragstart', () => {
        // console.log('dragstart')
        draggedItem = item
        setTimeout(() => {
            item.style.display = 'none'
        }, 0)
        
    })

    item.addEventListener('dragend', () => {
        // console.log('dragend')
        setTimeout(() => {
            draggedItem.style.display = 'block'
            draggedItem = null
        }, 0)
        
    })

    for(let j = 0; j < leftBoard.length; j++ ) {
        const list = leftBoard[j]

        leftBoard[i][j].addEventListener('dragover', (e) => {
            
            e.preventDefault()
        } )

        leftBoard[i][j].addEventListener('dragenter', (e) => {
            e.preventDefault()
            leftBoard[i][j].style.backgroundColor = 'gray'
        })

        leftBoard[i][j].addEventListener('dragleave', (e) => {
            leftBoard[i][j].style.backgroundColor = 'lightblue'
        })

        leftBoard[i][j].addEventListener('drop', (e) => {
            console.log('drop')
            leftBoard[i][j].append(draggedItem)
            leftBoard[i][j].style.backgroundColor = 'lightblue'
        })
    }
}