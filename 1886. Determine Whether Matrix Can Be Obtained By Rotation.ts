function findRotation(mat: number[][], target: number[][]): boolean {
  for (let i = 0; i < 4; i++) {
    if (i !== 0) {
      rotate(mat);
    }

    let isSame = true;
    for (let j = 0; j < mat.length; j++) {
      for (let k = 0; k < mat.length; k++) {
        if (mat[j][k] !== target[j][k]) isSame = false;
      }
    }

    if (isSame) return true;
  }
  return false;
}

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

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ),
); // true

console.log(
  findRotation(
    [
      [0, 1],
      [1, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ),
); // false

console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
  ),
); // true
