function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  const colorToReplace = image[sr][sc];
  if (colorToReplace === newColor) return image;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const q: number[][] = [];
  q.push([sr, sc]);

  while (q.length > 0) {
    const el = q.shift()!;
    const [r, c] = el;

    if (image[r][c] === colorToReplace) {
      image[r][c] = newColor;
    }

    for (const [offsetR, offsetC] of dirs) {
      if (
        r + offsetR >= 0 &&
        r + offsetR < image.length &&
        c + offsetC >= 0 &&
        c + offsetC < image[0].length &&
        image[r + offsetR][c + offsetC] === colorToReplace
      )
        q.push([r + offsetR, c + offsetC]);
    }
  }

  return image;
}

console.log(
  floodFill(
    [[1,1,1],[1,1,0],[1,0,1]],
    1,
    1,
    2,
  ),
);
