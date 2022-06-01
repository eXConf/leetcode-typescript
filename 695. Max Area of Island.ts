function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited: boolean[][] = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
  let maxArea = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1 && !visited[row][col]) {
        const q = [[row, col]];
        let area = 0;

        while (q.length > 0) {
          const [r, c] = q.pop()!;
          area += 1;

          visited[r][c] = true;

          for (const [offsetR, offsetC] of dirs) {
            const nRow = r + offsetR;
            const nCol = c + offsetC;
            if (
              nRow >= 0 &&
              nRow < rows &&
              nCol >= 0 &&
              nCol < cols &&
              visited[nRow][nCol] === false &&
              grid[nRow][nCol] === 1
            ) {
              visited[nRow][nCol] = true;
              q.push([nRow, nCol]);
            }
          }
        }

        if (area > maxArea) maxArea = area;
      }
    }
  }

  return maxArea;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);

console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));

console.log(maxAreaOfIsland([[1, 1]]));
