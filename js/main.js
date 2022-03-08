const grid = document.querySelector(".grid");



for (let i = 0; i < 64; ++i) {
    const grid_cell = document.createElement("div");
    grid_cell.classList.add("cell");
    grid.appendChild(grid_cell);
}