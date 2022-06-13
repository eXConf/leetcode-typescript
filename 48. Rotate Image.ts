/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const len = matrix.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }

  matrix.map(row => row.reverse());
}

export const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(arr1);
// console.log(arr1); // [[7,4,1],[8,5,2],[9,6,3]]

export const arr2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(arr2);
// console.log(arr2); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
