enum pieceType {
  pawn,
  knight,
  bishop,
  rook,
  queen,
  king,
}

enum pieceColor {
  white,
  black,
}

class piece {
  iconPath: string;
  type: pieceType;
  color: pieceColor;
}
