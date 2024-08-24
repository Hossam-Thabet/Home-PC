class Piece {
  constructor(type, ctx, x, y) {
    this.type = type;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = PIECE_COLORS[type];
    this.shape = this.getShape();
  }

  getShape() {
    // Define your shapes here as 2D arrays of 1s and 0s
    // For example
  }
}