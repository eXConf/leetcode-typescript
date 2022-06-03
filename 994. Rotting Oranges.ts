function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let turns = 0;
  let fresh = 0;

  const q: number[][] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) q.push([r, c]);
      if (grid[r][c] === 1) fresh += 1;
    }
  }

  while (q.length > 0) {
    const length = q.length;

    for (let i = 0; i < length; i++) {
      const [r, c] = q.shift()!;

      if (r - 1 >= 0 && grid[r - 1][c] === 1) {
        grid[r - 1][c] = 2;
        fresh -= 1;
        q.push([r - 1, c]);
      }
      if (r + 1 < rows && grid[r + 1][c] === 1) {
        grid[r + 1][c] = 2;
        fresh -= 1;
        q.push([r + 1, c]);
      }
      if (c - 1 >= 0 && grid[r][c - 1] === 1) {
        grid[r][c - 1] = 2;
        fresh -= 1;
        q.push([r, c - 1]);
      }
      if (c + 1 < cols && grid[r][c + 1] === 1) {
        grid[r][c + 1] = 2;
        fresh -= 1;
        q.push([r, c + 1]);
      }
    }
    if (q.length > 0) turns += 1;
  }

  return fresh === 0 ? turns : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
); // 4

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
); // -1

console.log(
  orangesRotting([
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
); // 58

console.log(orangesRotting([[0]])); // 0

console.log(orangesRotting([[2], [2], [1], [0], [1], [1]])); // -1

console.log(
  orangesRotting([
    [2, 2],
    [1, 1],
    [0, 0],
    [2, 0],
  ]),
); // 1

function orangesRotting_NOT_WORKING(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const big = 1000;
  let turns = 0;
  const result: number[][] = Array(grid.length)
    .fill(null)
    .map(_ => Array(grid[0].length).fill(big));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) continue;
      if (grid[r][c] === 2) result[r][c] = 0;

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
      if (grid[r][c] === 0) continue;
      if (grid[r][c] === 2) result[r][c] = 0;

      if (r < rows - 1) {
        result[r][c] = Math.min(result[r][c], result[r + 1][c] + 1);
      }
      if (c < cols - 1) {
        result[r][c] = Math.min(result[r][c], result[r][c + 1] + 1);
      }

      // if (grid[r][c] === 1 && result[r][c] === big) return -1;
      if (result[r][c] > turns && result[r][c] < big) turns = result[r][c];
    }
  }
  console.table(result);

  return turns;
}
