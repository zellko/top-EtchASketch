// *****************
// Variables
// *****************
const slider = document.querySelector("#myRange");
const sliderValue = document.querySelector(".slider-value");
const btnClear = document.querySelector("#btn-clear");
const grid = document.querySelector(".grid");
const btnBlack = document.querySelector("#btn-black");
const btnRGB = document.querySelector("#btn-rgb");
const btnBorder = document.querySelector("#btn-border");
let cellColor = "blackCell";
let borderToggle = true;

// *****************
// GENERATE THE GRID
// *****************

function createGrid(rowSize) {
    //Generate the grid from a given row size
    // Loop to generate the div. Number of div = row size^2
    for (let i = 0; i < rowSize ** 2; ++i) {
        const grid_cell = document.createElement("div"); // Create a div
        grid_cell.classList.add("cell"); // Assign the class "cell" to the new div
        grid_cell.style.cssText = `flex: 0 1 ${100/rowSize}%;`;
        // Set the flex-basis to 100/row size. Make the cells wrap correctly
        grid.appendChild(grid_cell);
    };
};

// *****************
// Slider and grid modification
// *****************

sliderValue.textContent = `${slider.value}x${slider.value}`;

slider.addEventListener("input", function() {
    sliderValue.textContent = `${slider.value}x${slider.value}`;
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => grid.removeChild(cell));
    createGrid(slider.value);

    console.log(borderToggle);
    if (borderToggle) toggleGridBorder();
    checkForClickMouseover();
})

function deleteGrid() {; }

// *****************
// Coloring the cells
// *****************

// Set cells color: Black or RGB
btnBlack.classList.add("btnActive");

btnBlack.addEventListener("click", function() {
    btnBlack.classList.add("btnActive");
    btnRGB.classList.remove("btnActive");
    cellColor = "blackCell";
});

btnRGB.addEventListener("click", function() {
    btnRGB.classList.add("btnActive");
    btnBlack.classList.remove("btnActive");
    cellColor = "rgbCell";
});

// Modify cells colors
function colorCell(e) {
    if (e.buttons || e.pointerId) {
        // this.classList.add(`${cellColor}`);
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        if (cellColor === "blackCell") this.style.backgroundColor = "black";
        if (cellColor === "rgbCell") this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        "rgb(255, 4, 4)";
    };
}

function checkForClickMouseover() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("click", colorCell));
    cells.forEach(cell => cell.addEventListener("mouseover", colorCell));
}

// *****************
// Clear the grid
// *****************

function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

btnClear.addEventListener("click", clearGrid);

// *****************
// Toggle border
// *****************
function toggleGridBorder(e) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.toggle("gridBorder"));

    if (this.id === "btn-border") {
        (borderToggle === true) ? borderToggle = false: borderToggle = true;
    };

}

btnBorder.addEventListener("click", toggleGridBorder);

// *****************
// Initialisation
// *****************
createGrid(16);
toggleGridBorder();
checkForClickMouseover();



// *****************
// Footer date
// *****************