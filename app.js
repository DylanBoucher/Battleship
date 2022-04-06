const ships = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']
console.log(ships)


const cell = document.querySelectorAll('td')
console.log(cell[5])


cell.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('hit')
        element.innerText = 'X'
    } 
)})