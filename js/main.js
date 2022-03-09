// *****************
// GENERATE THE GRID
// *****************
const grid = document.querySelector(".grid");

function createGrid(rowSize) {
    //Generate the grid from a given row size
    // Loop to generate the div. Number of div = row size^2
    for (let i = 0; i < rowSize ** 2; ++i) {
        const grid_cell = document.createElement("div"); // Create a div
        grid_cell.classList.add("cell"); // Assign the class "cell" to the new div
        grid_cell.style.cssText = `flex: 0 1 ${100/rowSize}%; 
        padding-bottom: ${100/rowSize}%;`;
        // Set the flex-basis to 100/row size. Make the cells wrap correctly
        // Set the padding-bottom to 100/row size. Make the cells square 
        grid.appendChild(grid_cell);
    };
};

createGrid(16);

// *****************
// Coloring the cells
// *****************

// Set cells color: Black or RGB
// const btnBlack = document.querySelector("#btn-black");
// const btnRGB = document.querySelector("#btn-rgb");

// Modify cells colors
function colorCell(e) {
    if (e.buttons || e.pointerId) {
        this.classList.add("blackCell");
    };
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => cell.addEventListener("click", colorCell));
cells.forEach(cell => cell.addEventListener("mouseover", colorCell));

// *****************
// Clear the grid
// *****************

const btnClear = document.querySelector("#btn-clear");

function clearGrid() {
    console.log("clear");
    cells.forEach(cell => cell.classList.remove("blackCell"));
}

btnClear.addEventListener("click", clearGrid);