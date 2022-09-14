/*
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
*/

const generateBoard = function (whiteQ, blackQ) {
  const board = [];
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      board[row] ? board[row].push(0) : board[row] = [0];
    };
  };
  board[whiteQ[0]][whiteQ[1]] = 1;
  board[blackQ[0]][blackQ[1]] = 1;
  return board;
}

const queenThreat = function (board) {
  let row = 0;
  let column = 0;
  while (board[row][column] !== 1) {
    column++;
    if (column === 7) {
      row++;
      column = 0;
    };
  };
  //Check if second queen is in the same row as first
  for (let i = column + 1; i < 8; i++) {
    if (board[row][i] === 1) {
      return true;
    };
  };
  //Check if second queen is in same column as first
  for (let i = row + 1; i < 8; i++) {
    if (board[i][column] === 1) {
      return true;
    };
  };
  //Check if second queen is down-right diagonal from first
  let columnCheck = column;
  for (let i = row + 1; i < 8; i++) {
    if (columnCheck === 7) {
      break;
    };
    columnCheck++;
    if (board[i][columnCheck] === 1) {
      return true
    };
  };
  //Check if second queen is down-right diagonal from first
  columnCheck = column;
  for (let i = row + 1; i < 8; i++) {
    if (columnCheck === 0) {
      break;
    };
    columnCheck--;
    if (board[i][columnCheck] === 1) {
      return true
    };
  };

  return false;
}
/*
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
/*
Expected Output:
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
Expected Output:
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/