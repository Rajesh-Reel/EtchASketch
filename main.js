let board = document.querySelector(".board");
board.style.gridTemplateColumn = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.style.backgroundColor = "red";
  board.insertAdjacentElement("beforeend", square);
}
