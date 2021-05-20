let stockfish = new Worker("../../stockfish/node_modules/stockfish/src/stockfish.js");
let uciok = false;
let board = document.querySelector("#board");
let allPieces = [];
buildBoard(board);
buildPieces();
applyFenToBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", board);
function generateFen() {
    let fen;
    return fen;
}
function applyFenToBoard(fen, board) {
    let fenSplit = fen.split("/");
    console.log(fenSplit);
    fenSplit.forEach((item) => {
        let fenChars = item.split("");
        fenChars.forEach((char) => {
            let icon;
            switch (char) {
                case "p": {
                    break;
                }
            }
        });
    });
}
function buildPieces() {
    let whiteKingIconPath = "../../images/chessPieces/defaultTheme/WhiteKing.svg", blackKingIconPath = "../../images/chessPieces/defaultTheme/BlackKing.svg", whiteQueenIconPath = "../../images/chessPieces/defaultTheme/WhiteQueen.svg", blackQueenIconPath = "../../images/chessPieces/defaultTheme/BlackQueen.svg", whiteRookIconPath = "../../images/chessPieces/defaultTheme/WhiteRook.svg", blackRookIconPath = "../../images/chessPieces/defaultTheme/BlackRook.svg", whiteKnightIconPath = "../../images/chessPieces/defaultTheme/WhiteKnight.svg", blackKnightIconPath = "../../images/chessPieces/defaultTheme/BlackKnight.svg", whiteBishopIconPath = "../../images/chessPieces/defaultTheme/WhiteBishop.svg", blackBishopIconPath = "../../images/chessPieces/defaultTheme/BlackBishop.svg", whitePawnIconPath = "../../images/chessPieces/defaultTheme/WhitePawn.svg", blackPawnIconPath = "../../images/chessPieces/defaultTheme/BlackPawn.svg";
    allPieces.push(new piece(whiteKingIconPath, pieceType.king, pieceColor.white));
    allPieces.push(new piece(blackKingIconPath, pieceType.king, pieceColor.black));
    allPieces.push(new piece(whiteQueenIconPath, pieceType.queen, pieceColor.white));
    allPieces.push(new piece(blackQueenIconPath, pieceType.queen, pieceColor.black));
    allPieces.push(new piece(whiteRookIconPath, pieceType.rook, pieceColor.white));
    allPieces.push(new piece(blackRookIconPath, pieceType.rook, pieceColor.black));
    allPieces.push(new piece(whiteKnightIconPath, pieceType.knight, pieceColor.white));
    allPieces.push(new piece(blackKnightIconPath, pieceType.knight, pieceColor.black));
    allPieces.push(new piece(whiteBishopIconPath, pieceType.bishop, pieceColor.white));
    allPieces.push(new piece(blackBishopIconPath, pieceType.bishop, pieceColor.black));
    allPieces.push(new piece(whitePawnIconPath, pieceType.pawn, pieceColor.white));
    allPieces.push(new piece(blackPawnIconPath, pieceType.pawn, pieceColor.black));
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
