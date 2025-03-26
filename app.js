function createGrid(size) {
  // Create a grid that is size^2
  const container = document.querySelector(".container");
  const width = 600 / size;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement("div");
      cell.style.cssText = `width: ${width}px; height: ${width}px; background-color: #ffffff`;
      cell.addEventListener("mouseover", (e) => color(e.target));
      grid.appendChild(cell);
    }
  }
}

function color(cell) {
  const brushToggle = document.querySelector("#brush");
  const eraserToggle = document.querySelector("#eraser");
  const tintToggle = document.querySelector("#tint");
  const rainbowToggle = document.querySelector("#rainbow");
  if (brushToggle.checked) cell.style.backgroundColor = "#525252";
  if (rainbowToggle.checked) cell.style.backgroundColor = getRandomColor();
  if (tintToggle.checked && cell.style.opacity < 1)
    cell.style.opacity = Number(cell.style.opacity) + 0.1;
  if (eraserToggle.checked) {
    cell.style.backgroundColor = "#fff";
    cell.style.opacity = 1;
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
  // Initialise Slider
  const slider = document.querySelector("#slider");
  slider.addEventListener("change", (e) => redrawGrid(e.target.value));
  // Show new grid size
  const gridSize = document.querySelector("#grid-size");
  slider.oninput = (e) =>
    (gridSize.textContent = `${e.target.value}x${e.target.value}`);
  // Initialise clear button
  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", () => redrawGrid(slider.value));
  createGrid(16);
  // Initialise toggles
  const brushToggle = document.querySelector("#brush");
  const eraserToggle = document.querySelector("#eraser");
  brushToggle.oninput = () =>
    (eraserToggle.checked = brushToggle.checked === false ? true : false);
  eraserToggle.oninput = () =>
    (brushToggle.checked = eraserToggle.checked === false ? true : false);
  document.onkeydown = (e) => {
    if (e.key.toLowerCase() == "b") {
      brushToggle.checked = true;
      eraserToggle.checked = false;
    }
    if (e.key.toLowerCase() == "e") {
      brushToggle.checked = false;
      eraserToggle.checked = true;
    }
    if (e.key.toLowerCase() == "c") redrawGrid(slider.value);
  };
}

init();
