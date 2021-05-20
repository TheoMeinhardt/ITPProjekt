let stockfish = new Worker(
  "../../stockfish/node_modules/stockfish/src/stockfish.js"
);
let uciok: boolean = false;
let board: HTMLDivElement = document.querySelector("#board");
let allPieces: piece[] = [];

buildBoard(board);
buildPieces();
applyFenToBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", board);

function generateFen(): string {
  let fen;

  return fen;
}

function applyFenToBoard(fen: string, board: HTMLDivElement): void {
  let fenSplit: string[] = fen.split("/");
  console.log(fenSplit);
  fenSplit.forEach((item) => {
    let fenChars: string[] = item.split("");
    fenChars.forEach((char) => {
      let icon: HTMLImageElement;
      switch (char) {
        case "p": {
          break;
        }
      }
    });
  });
}

function buildPieces(): void {
  let whiteKingIconPath: string =
      "../../images/chessPieces/defaultTheme/WhiteKing.svg",
    blackKingIconPath: string =
      "../../images/chessPieces/defaultTheme/BlackKing.svg",
    whiteQueenIconPath: string =
      "../../images/chessPieces/defaultTheme/WhiteQueen.svg",
    blackQueenIconPath: string =
      "../../images/chessPieces/defaultTheme/BlackQueen.svg",
    whiteRookIconPath: string =
      "../../images/chessPieces/defaultTheme/WhiteRook.svg",
    blackRookIconPath: string =
      "../../images/chessPieces/defaultTheme/BlackRook.svg",
    whiteKnightIconPath: string =
      "../../images/chessPieces/defaultTheme/WhiteKnight.svg",
    blackKnightIconPath: string =
      "../../images/chessPieces/defaultTheme/BlackKnight.svg",
    whiteBishopIconPath: string =
      "../../images/chessPieces/defaultTheme/WhiteBishop.svg",
    blackBishopIconPath: string =
      "../../images/chessPieces/defaultTheme/BlackBishop.svg",
    whitePawnIconPath: string =
      "../../images/chessPieces/defaultTheme/WhitePawn.svg",
    blackPawnIconPath: string =
      "../../images/chessPieces/defaultTheme/BlackPawn.svg";

  allPieces.push(
    new piece(whiteKingIconPath, pieceType.king, pieceColor.white)
  );
  allPieces.push(
    new piece(blackKingIconPath, pieceType.king, pieceColor.black)
  );
  allPieces.push(
    new piece(whiteQueenIconPath, pieceType.queen, pieceColor.white)
  );
  allPieces.push(
    new piece(blackQueenIconPath, pieceType.queen, pieceColor.black)
  );
  allPieces.push(
    new piece(whiteRookIconPath, pieceType.rook, pieceColor.white)
  );
  allPieces.push(
    new piece(blackRookIconPath, pieceType.rook, pieceColor.black)
  );
  allPieces.push(
    new piece(whiteKnightIconPath, pieceType.knight, pieceColor.white)
  );
  allPieces.push(
    new piece(blackKnightIconPath, pieceType.knight, pieceColor.black)
  );
  allPieces.push(
    new piece(whiteBishopIconPath, pieceType.bishop, pieceColor.white)
  );
  allPieces.push(
    new piece(blackBishopIconPath, pieceType.bishop, pieceColor.black)
  );
  allPieces.push(
    new piece(whitePawnIconPath, pieceType.pawn, pieceColor.white)
  );
  allPieces.push(
    new piece(blackPawnIconPath, pieceType.pawn, pieceColor.black)
  );
}

function buildBoard(board: Element): Element {
  let chars: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let lastSquareWasWhite: boolean = false;

  for (let i = 0; i < 8; i++) {
    let rank: Element = document.createElement("div");
    rank.id = "rank" + (8 - i);

    for (let j = 0; j < 8; j++) {
      let square = document.createElement("div");
      square.id = chars[j] + (8 - i);
      square.addEventListener("click", (): void => {
        console.log("test");
      });

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
