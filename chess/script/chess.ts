let stockfish = new Worker(
  "../../stockfish/node_modules/stockfish/src/stockfish.js"
);
let uciok: boolean = false;
let board: Element = document.querySelector("#board");

board.appendChild(buildBoard(board));

function generateFen(): string {
  let fen;

  return fen;
}

function buildBoard(board: Element): Element {
  let chars: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let lastSquareWasWhite: boolean = false;

  for (let i = 0; i < 8; i++) {
    let rank: Element = document.createElement("div");
    rank.id = "rank";

    for (let j = 0; j < 8; j++) {
      let square = document.createElement("div");
      square.id = chars[j] + (8 - i);
      square.innerHTML = square.id;

      if (!lastSquareWasWhite) {
        square.classList.add("whiteSquare");
        lastSquareWasWhite = true;
      } else {
        square.classList.add("blackSquare");
        lastSquareWasWhite = false;
      }

      rank.appendChild(square);
    }

    lastSquareWasWhite = lastSquareWasWhite ? false : true;

    board.appendChild(rank);
  }

  return board;
}

stockfish.onmessage = function (event) {
  console.log(event.data ? event.data : event);
  uciok = event.data ? true : false;
};

// stockfish.postMessage("uci");
// stockfish.postMessage("ucinewgame");
// stockfish.postMessage("isready");
// stockfish.postMessage("position startpos");
// stockfish.postMessage("position ");
// stockfish.postMessage("go ponder depth 15");
