let color = "black";

function chooseBoardSize(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let mount = size * size;
  for (let i = 0; i < mount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white"; // color of the board size
    board.insertAdjacentElement("beforeend", square);
  }
}

chooseBoardSize(5); // lets us choose the boards size via argument

/* input parameter links to what the user types in on the html file */
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    // input between 2 and 100 is fine...
    chooseBoardSize(input);
  } else {
    console.log("too many or too little squares"); // anything else is not!
  }
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}
