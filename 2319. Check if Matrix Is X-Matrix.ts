function checkXMatrix(grid: number[][]): boolean {
  const len = grid.length;
  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      if (c === r || c === len - 1 - r) {
        if (grid[r][c] === 0) return false;
      } else {
        if (grid[r][c] !== 0) return false;
      }
    }
  }
  return true;
}

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ]),
); // true
console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ]),
); // false
