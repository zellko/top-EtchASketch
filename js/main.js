// *****************
// Variables
// *****************
const slider = document.querySelector("#myRange");
const sliderValue = document.querySelector(".slider-value");
const btnClear = document.querySelector("#btn-clear");
const grid = document.querySelector(".grid");
const btnBlack = document.querySelector("#btn-black");
const btnDarken = document.querySelector("#btn-darken");
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
        grid_cell.style.cssText = `flex: 0 1 ${100/rowSize}%;`; // Set the flex-basis to 100/row size. Make the cells wrap correctly
        grid_cell.style.backgroundColor = `rgb(255, 255, 255)`; // Set bg-color to white
        grid.appendChild(grid_cell);
    };
};

// *****************
// Delete Grid
// *****************
function deleteGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => grid.removeChild(cell));
}

// *****************
// Coloring the cells
// *****************
function colorCell(e) {
    let r = 0
    let g = 0
    let b = 0

    if (e.shiftKey && (e.buttons || e.pointerId)) {
        // If Shift is pressed, we clear the cell instead of coloring it
        this.style.backgroundColor = `rgb(255, 255, 255)`;
        return
    }

    if (e.buttons || e.pointerId) {
        // Coloring the cells depending of which button is toggle
        if (cellColor === "blackCell") this.style.backgroundColor = `rgb(0, 0, 0)`;

        if (cellColor === "rgbCell") {
            r = Math.floor(Math.random() * 255)
            g = Math.floor(Math.random() * 255)
            b = Math.floor(Math.random() * 255)
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }

        if (cellColor === "DarkenCell") {
            // When we Darken the cell, we first take actual RGB value of the cell
            let cellRGBColor = this.style.backgroundColor;
            cellRGBColor = cellRGBColor.substring(4, cellRGBColor.length - 1);
            cellRGBColor = cellRGBColor.split(",");
            cellRGBColor = cellRGBColor.map(Number);
            r = cellRGBColor[0];
            g = cellRGBColor[1];
            b = cellRGBColor[2];
            // Then we remove 25 of rgb value
            this.style.backgroundColor = `rgb(${r-25}, ${g-25}, ${b-25})`;
        }
    }
}

// *****************
// Clear the grid
// *****************
function clearGrid() {
    // To clear the grid, change the background color of each cells to white
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = `rgb(255, 255, 255)`);
}

// *****************
// Toggle border
// *****************
function toggleGridBorder(e) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.toggle("gridBorder"));

    if (this.id === "btn-border") {
        (borderToggle === true) ? borderToggle = false: borderToggle = true;
    };
    (borderToggle === true) ? btnBorder.classList.add("btnActive"): btnBorder.classList.remove("btnActive");
}

// *****************
// Function to check if a cell is clicked or "mouse-over"
// When a new grid is created, the function is called again to "refresh" cells
// *****************
function checkForClickMouseover() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("click", colorCell));
    cells.forEach(cell => cell.addEventListener("mouseover", colorCell));
}

// *****************
// Initialisation
// *****************
sliderValue.textContent = `${slider.value}x${slider.value}`;
btnBlack.classList.add("btnActive");

createGrid(16);
toggleGridBorder();
checkForClickMouseover();


// *****************
// Event Listener
// *****************
btnClear.addEventListener("click", clearGrid); // Button "Clear"
btnBorder.addEventListener("click", toggleGridBorder); // Button "Grid Border"

// Button "Black"
btnBlack.addEventListener("click", function() {
    btnBlack.classList.add("btnActive");
    btnRGB.classList.remove("btnActive");
    btnDarken.classList.remove("btnActive");
    cellColor = "blackCell";
});

// Button "RGB"
btnRGB.addEventListener("click", function() {
    btnRGB.classList.add("btnActive");
    btnBlack.classList.remove("btnActive");
    btnDarken.classList.remove("btnActive");
    cellColor = "rgbCell";
});

// Button "Darken"
btnDarken.addEventListener("click", function() {
    btnRGB.classList.remove("btnActive");
    btnBlack.classList.remove("btnActive");
    btnDarken.classList.add("btnActive");
    cellColor = "DarkenCell";
});

// Slider is moved
slider.addEventListener("input", function() {
    sliderValue.textContent = `${slider.value}x${slider.value}`;
    deleteGrid();
    createGrid(slider.value);
    if (borderToggle) toggleGridBorder();
    checkForClickMouseover();
})

// *****************
// Footer date
// *****************
const footerDate = document.querySelector(".footer-date")
const date = new Date();
let year = date.getFullYear();

footerDate.textContent = `©${year} Zellko`;