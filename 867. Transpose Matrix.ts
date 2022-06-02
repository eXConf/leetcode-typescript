function transpose(matrix: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const row: number[] = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    result.push(row);
  }

  return result;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // [[1,4,7],[2,5,8],[3,6,9]]

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
); // [[1,4],[2,5],[3,6]]

console.log(transpose([[1]])); // [[1]]
