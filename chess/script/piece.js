var pieceType;
(function (pieceType) {
    pieceType[pieceType["pawn"] = 0] = "pawn";
    pieceType[pieceType["knight"] = 1] = "knight";
    pieceType[pieceType["bishop"] = 2] = "bishop";
    pieceType[pieceType["rook"] = 3] = "rook";
    pieceType[pieceType["queen"] = 4] = "queen";
    pieceType[pieceType["king"] = 5] = "king";
})(pieceType || (pieceType = {}));
var pieceColor;
(function (pieceColor) {
    pieceColor[pieceColor["white"] = 0] = "white";
    pieceColor[pieceColor["black"] = 1] = "black";
})(pieceColor || (pieceColor = {}));
class piece {
}
