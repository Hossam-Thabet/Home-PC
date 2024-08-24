class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.getEmptyBoard();
    this.draw();
  }

  getEmptyBoard() {
    return Array.from({length: ROWS}, () => Array(COLS).fill(0));
  }

  draw() {
    const cellSize = BLOCK_SIZE - 1;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (this.grid[row][col] !== 0) {
          const color = PIECE_COLORS[this.grid[row][col]];
          this.ctx.fillStyle = color;
          this.ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
          this.ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
  }
}