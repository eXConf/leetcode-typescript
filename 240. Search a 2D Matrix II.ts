function searchMatrix(matrix: number[][], target: number): boolean {
  let r = 0;
  let c = matrix[0].length - 1;

  while (r <= matrix.length - 1 && c >= 0) {
    if (matrix[r][c] === target) return true;
    else if (matrix[r][c] > target) c--;
    else if (matrix[r][c] < target) r++;
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
); // true
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20,
  ),
); // false
