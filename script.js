const container = document.querySelector('#container')
const slider = document.querySelector('#slider')


 

 let miniSquareAmount = 0


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
        miniSquareAmount++
        currentRow.appendChild(currentMiniSquare)
        //console.log(miniSquareAmount)
    }
}
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let miniSquares = document.querySelectorAll('.minisquare');
console.log(miniSquares.length)
miniSquares.forEach((div) => {

    // and for each one we add a 'click' listener
    div.addEventListener('click', () => {
      alert(button.id);
    });
  });

spawnField(16)
/* function resetField () {
    removeAllChildNodes(container);
} */


/* slider.addEventListener ("input", function () {
    //spawnField(this.value)
    resetField()
    spawnField(this.value)
    console.log(this.value)
 }); */




