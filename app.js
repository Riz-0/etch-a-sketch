function createGrid(size) {
  // Create a grid that is size^2
  const grid = document.querySelector("#grid");
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

createGrid(100);
