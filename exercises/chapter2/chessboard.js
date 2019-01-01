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
