const chessboard = function(size) {
  let board = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          board += ' ';
        } else {
          board += '#';
        }
      } else {
        if (j % 2 !== 0) {
          board += ' ';
        } else {
          board += '#';
        }
      }
    }
    board += '\n';
  }
  return board;
};

console.log(chessboard(8));

const chessboard1 = function(size) {
  let board = '';
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      switch ((row + col) % 2) {
        case 0:
          board += ' ';
          break;
        case 1:
          board += '#';
          break;
        default:
          break;
      }
    }
    board += '\n';
  }
  return board;
};

console.log(chessboard1(5));
