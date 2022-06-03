function updateMatrix(mat: number[][]): number[][] {
  const rows = mat.length;
  const cols = mat[0].length;
  const result: number[][] = Array(mat.length)
    .fill(null)
    .map(_ => Array(mat[0].length).fill(Number.MAX_SAFE_INTEGER - 10000));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) result[r][c] = 0;

      if (r > 0) {
        result[r][c] = Math.min(result[r][c], result[r - 1][c] + 1);
      }
      if (c > 0) {
        result[r][c] = Math.min(result[r][c], result[r][c - 1] + 1);
      }
    }
  }

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      if (r < rows - 1) {
        result[r][c] = Math.min(result[r][c], result[r + 1][c] + 1);
      }
      if (c < cols - 1) {
        result[r][c] = Math.min(result[r][c], result[r][c + 1] + 1);
      }
    }
  }

  return result;
}

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
); // [[0,0,0],[0,1,0],[0,0,0]]

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]),
); // [[0,0,0],[0,1,0],[1,2,1]]
