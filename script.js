const container = document.querySelector('#container')
const slider = document.querySelector('#slider')
const button = document.querySelector('#button')
const button2 = document.querySelector('#button2')

let miniSquareAmount = 0
let gridSize = 8
let squareSize = 512/gridSize
let colorMode = false

//Setup event listener on "Set Grid size" button
button.addEventListener('click', function() {
    let gridSize = parseInt(prompt("Please enter your desired grid size."))
    if (gridSize >= 50) {
        gridSize = 50
    }
    if (gridSize < 0) {
        gridSize = 2
    }
    squareSize = 512/gridSize
    resetField();
    spawnField(gridSize)
}, false);

//Setup event listener on "Color Mode" button
button2.addEventListener('click', function() {
    if (colorMode === false) {
        button2.innerHTML = "Color Mode: On"
        colorMode = true
    }
    else if (colorMode === true) {
        button2.innerHTML = "Color Mode: Off"
        colorMode = false
    }
}, false);

//Check whether mouse button is held
let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

//Spawn field with desired size
function spawnField(size) {
for (i=1; i<size+1; i++) {
    let currentRow = document.createElement('div')
    currentRow.classList.add('row')
    currentRow.id = i
    container.appendChild(currentRow)
     for (j=1; j<size+1; j++) {
        let currentMiniSquare = document.createElement('div')
        
        currentMiniSquare.classList.add('minisquare')
        currentMiniSquare.id = i
        
        //size
        currentMiniSquare.style.height = `${squareSize}px`
        currentMiniSquare.style.width = `${squareSize}px`
        //console.log("Height: "+currentMiniSquare.style.height)
        //console.log("Width: "+currentMiniSquare.style.width)

        miniSquareAmount++
        currentRow.appendChild(currentMiniSquare)
        //console.log(miniSquareAmount)
        currentMiniSquare.addEventListener('mouseover', function() {
            if (mouseDown === 1) {
            var r = () => Math.random() * 256 >> 0;
            var color = `rgb(${r()}, ${r()}, ${r()})`;
            //console.log(color)
            currentMiniSquare.classList.add('clicked')
            if (colorMode === true) {
            currentMiniSquare.style.backgroundColor = color
            }
            else if (colorMode === false) {
                currentMiniSquare.style.backgroundColor = "white"
                }
            }
        }, false);

    }
}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

//Remove all child nodes from parent
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Reset the field
function resetField () {
    removeAllChildNodes(container);
}

//Spawn a 16x16 field
spawnField(gridSize)

