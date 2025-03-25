function createGrid(size) {
  // Create a grid that is size^2
  const container = document.querySelector(".container");
  const width = 600 / size;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("div");
      cell.style.cssText = `width: ${width}px; height: ${width}px; border: 1px solid grey`;
      cell.addEventListener("mouseover", (e) => color(e.target));
      grid.appendChild(cell);
    }
  }
}

function color(cell) {
  // Changes the color of a single cell
  cell.style.backgroundColor = "#595959";
}

function clearGrid() {
  // Removes the grid
  const grid = document.querySelector("#grid");
  grid.innerHTML = "";
}

function redrawGrid(size) {
  clearGrid();
  createGrid(size);
}

function init() {
  // Initialise the website
  const slider = document.querySelector("#slider");
  slider.addEventListener("change", (e) => redrawGrid(e.target.value));
  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", () => redrawGrid(slider.value));
  createGrid(16);
}

init();
