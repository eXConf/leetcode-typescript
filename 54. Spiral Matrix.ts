function spiralOrder(matrix: number[][]): number[] {
  const matrixCells = matrix.length * matrix[0].length;
  let result = <number[]>[];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  let r = 0;
  let c = 0;

  while (true) {
    // move right
    while (c <= right) {
      result.push(matrix[r][c]);
      if (result.length === matrixCells) return result;
      c++;
    }

    c--;
    top++;
    r++;

    // move down
    while (r <= bottom) {
      result.push(matrix[r][c]);
      if (result.length === matrixCells) return result;
      r++;
    }

    r--;
    right--;
    c--;

    // move left
    while (c >= left) {
      result.push(matrix[r][c]);
      if (result.length === matrixCells) return result;
      c--;
    }

    c++;
    bottom--;
    r--;

    // move up
    while (r >= top) {
      result.push(matrix[r][c]);
      if (result.length === matrixCells) return result;
      r--;
    }

    r++;
    left++;
    c++;
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
); // [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([[1]])); // [1]
