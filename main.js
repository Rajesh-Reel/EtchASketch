function chooseBoardSize(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "red";
    board.insertAdjacentElement("beforeend", square);
  }
}

chooseBoardSize(5); // lets us choose the boards size via argument
