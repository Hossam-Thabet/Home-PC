const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const PIECE_COLORS = [
  null, // for better organization, we start at index 1
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'cyan'
];

const PIECES = [
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  [
    [0, 2, 0],
    [2, 2, 2],
    [0, 0, 2],
  ],
  [
    [0, 3, 0],
    [0, 3, 0],
    [3, 3, 3],
  ],
  [
    [4, 4, 0],
    [4, 4, 0],
    [0, 4, 4],
  ],
  [
    [5, 5, 5, 5],
    [0, 5, 5, 0],
    [0, 0, 5, 5],
  ],
  [
    [6, 6, 6, 0],
    [0, 6, 0, 0],
    [0, 0, 6, 0],
  ],
  [
    [7, 7, 0],
    [7, 7, 0],
    [0, 7, 7],
  ],
];