// main.js
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const board = new Board(ctx);

function play() {
  // Your gameplay logic goes here
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', play);