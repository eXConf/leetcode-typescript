// Slow solution

function solveNQueens(n: number): string[][] {
  const solutions = <string[][]>[];
  const rowSize = n;
  const newBoard = Array(n)
    .fill(null)
    .map(_ => Array(n).fill('.'));

  const memo = new Map<string, boolean>();

  function dp(
    n: number,
    board: string[][],
    row: number,
    col: number,
    memo: Map<string, boolean>,
  ): boolean {
    const key = board.map(row => row.join('')).join('') + 'row' + 'col';
    const memoized = memo.get(key);

    if (memoized !== undefined) return memoized;

    if (n === 0) {
      const newSolution = board.map(row => row.join(''));
      for (let solution of solutions) {
        if (solution.join('') === newSolution.join('')) return true;
      }
      solutions.push(newSolution);
      return true;
    }

    if (row >= rowSize) return false;

    let response1 = false;
    let response2 = false;

    for (row; row < rowSize; row++) {
      for (col; col < rowSize; col++) {
        const newBoard = board.map(row => [...row]);

        if (canPlace(newBoard, row, col, rowSize)) {
          newBoard[row][col] = 'Q';
          response1 = dp(
            n - 1,
            newBoard,
            row + 1,
            0,
            memo,
          );

          memo.set(
            newBoard.map(row => row.join('')).join('') + 'row' + 'col',
            response1,
          );
        }

        response2 = dp(
          n,
          newBoard,
          col + 1 < rowSize ? row : row + 1,
          col + 1 < rowSize ? col + 1 : 0,
          memo,
        );
        memo.set(
          newBoard.map(row => row.join('')).join('') + 'row' + 'col',
          response2,
        );
      }
    }
    return response1 || response2;
  }

  dp(n, newBoard, 0, 0, memo);

  return solutions;
}

function canPlace(
  board: string[][],
  row: number,
  col: number,
  rowSize: number,
): boolean {
  // check row
  for (let cell of board[row]) {
    if (cell === 'Q') return false;
  }

  // check column
  for (let row of board) {
    if (row[col] === 'Q') return false;
  }

  // check diagonal to top right
  let r = row;
  let c = col;

  while (r >= 0 && c < rowSize) {
    if (board[r][c] === 'Q') return false;
    r--;
    c++;
  }

  // check diagonal to top left
  r = row;
  c = col;

  while (r >= 0 && c >= 0) {
    if (board[r][c] === 'Q') return false;
    r--;
    c--;
  }

  // check diagonal to bottom left
  r = row;
  c = col;

  while (c >= 0 && r < rowSize) {
    if (board[r][c] === 'Q') return false;
    r++;
    c--;
  }

  // check diagonal to bottom right
  r = row;
  c = col;

  while (c < rowSize && r < rowSize) {
    if (board[r][c] === 'Q') return false;
    r++;
    c++;
  }

  return true;
}
// console.table(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// console.table(solveNQueens(1)); // [["Q"]]
console.table(solveNQueens(9)); //
