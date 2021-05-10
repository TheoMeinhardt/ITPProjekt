let stockfish = new Worker("../../stockfish/node_modules/stockfish/src/stockfish.js");
let uciok = false;
let board = document.querySelector("#board");
board.appendChild(buildBoard(board));
populateBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
function generateFen() {
    let fen;
    return fen;
}
function populateBoard(fen) {
    let fenSplit = fen.split("/");
    console.log(fenSplit);
}
function buildBoard(board) {
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let lastSquareWasWhite = false;
    for (let i = 0; i < 8; i++) {
        let rank = document.createElement("div");
        rank.id = "rank" + (8 - i);
        for (let j = 0; j < 8; j++) {
            let square = document.createElement("div");
            square.id = chars[j] + (8 - i);
            square.addEventListener("click", () => {
                console.log("test");
            });
            if (!lastSquareWasWhite) {
                square.classList.add("whiteSquare");
                lastSquareWasWhite = true;
            }
            else {
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
