class NumMatrix {
  matrix: number[][];
  dp: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.dp = Array(matrix.length + 1)
      .fill(null)
      .map(_ => Array(matrix[0].length + 1).fill(0));

    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[0].length; c++) {
        this.dp[r + 1][c + 1] =
          this.dp[r + 1][c] + this.dp[r][c + 1] + matrix[r][c] - this.dp[r][c];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.dp[row2 + 1][col2 + 1] -
      this.dp[row1][col2 + 1] -
      this.dp[row2 + 1][col1] +
      this.dp[row1][col1]
    );
  }
}

const test1 = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(test1.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
console.log(test1.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
console.log(test1.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)

class NumMatrix1 {
  matrix: number[][];
  memo: Map<string, number>;
  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.memo = new Map();
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const args = `${row1}x${col1}x${row2}x${col2}`;
    if (this.memo.has(args)) return this.memo.get(args)!;

    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }

    this.memo.set(args, sum);
    return sum;
  }
}
