let initGridSize = 16;
let gridSize = initGridSize; 

function changeMainSquare(){
    const mainSquare = document.querySelector(".mainSquare"); 
    if(mainSquare.clientWidth != mainSquare.clientHeight){
        mainSquare.style.height =  mainSquare.clientWidth + "px";
    }     
}

function fillSquare(e){
    console.log("fill");
    this.style.backgroundColor = "black"; 
}

function checkHovering(){
    const squares = document.querySelectorAll(".column"); +
    squares.forEach(column => column.addEventListener("mouseover", fillSquare));      
}
function addElement(e){
    let columns = gridSize;
    let rows = gridSize;
    const mainSquare = document.querySelector(".mainSquare"); 

    for (var i = 0; i < rows; ++i) {
        let row = document.createElement('div'); // create row
        row.id = 'row';
        for (var j = 0; j < columns; ++j) {
            let column = document.createElement('div'); // create column
            column.className = 'column';            
            row.appendChild(column); // append row in column
        }
        mainSquare.appendChild(row); // append column inside grid
    }
}

// slider 
function rangeSlider(value) {    
    /* Get all #range value spans, which is 2 in this case */ 
    let gridLabels = document.querySelectorAll('#range-value');
    /* Go through all spans, which is 2 in this case */ 
    for (let i = 0; i < gridLabels.length; i++) {
        gridLabels[i].textContent = value;
    }
    // Set the global variable of the grid size 
    gridSize = parseInt(value);
    /*
    deleteGrid();
    createGrid();
    listen();
    reInit();*/
    // turn the grid button back on if it is off.
    /*
    const gridButton = document.querySelector('#grid-btn');
    if (gridButton.classList.contains('btn-on')) {
        //pass
    } else {
        gridButton.classList.toggle('btn-on');
    }*/
}

function rangeSliderValue(value) {
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
        gridLabels[i].textContent = value;
    }
}

window.addEventListener("load", addElement); 

const mainSquare = document.querySelector(".mainSquare"); 

/* mainSquare.addEventListener("click", addElement); */ 




setInterval(changeMainSquare, 500); 

setInterval(checkHovering, 10); 


