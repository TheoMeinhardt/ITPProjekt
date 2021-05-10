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

  constructor(iconpath: string, type: pieceType, color: pieceColor) {
    this.iconPath = iconpath;
    this.type = type;
    this.color = color;
  }
}
