/* Add global variables here */ 
let initGridSize = 16;
let gridSize = initGridSize; 

/* Add functions here */ 

/* This Function shall check periodically, whether the container width has changed. If so, the height is adaptet accordingly to ensure square shape */ 
function changeMainSquare(){
    const mainSquare = document.querySelector(".mainSquare"); 
    if(mainSquare.clientWidth != mainSquare.clientHeight){
        mainSquare.style.height =  mainSquare.clientWidth + "px";
    }     
}

/* This Function changes the color of the sqaures to black*/ 

function fillSquare(e){
    this.style.backgroundColor = "black"; 
}

/* This Function creates the squares */ 
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
    // Add Eventlisteners to the squares which are just created // 
    listen(); 
}

/* This function deletes the squares */ 
function deleteGrid(){
    const squares = document.querySelectorAll(".column"); 
    squares.forEach(column => column.remove());
    const rows = document.querySelectorAll("#row");
    rows.forEach(row => row.remove());
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
    deleteGrid(); 
    addElement();      
}

function rangeSliderValue(value) {
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
        gridLabels[i].textContent = value;
    }
}

/* This Function adds the eventlistener of hovering to the squares and then calls the fillSquare function */ 
function listen(){
    const squares = document.querySelectorAll(".column"); +
    squares.forEach(column => column.addEventListener("mouseover", fillSquare)); 
    console.log(squares);
}

/* This Function creates the initial grid after the webpage loaded  */
window.addEventListener("load", addElement); 


/* This Function calls the function changeMainSquare periodically within 500ms */
setInterval(changeMainSquare, 500); 

listen(); 
