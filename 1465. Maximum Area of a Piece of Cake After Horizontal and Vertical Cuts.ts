function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[],
): number {
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxCutWidth = 0;
  let maxCutHeight = 0;
  const length = Math.max(horizontalCuts.length, verticalCuts.length);

  for (let i = 1; i < length; i++) {
    if (i < horizontalCuts.length) {
      const height = horizontalCuts[i] - horizontalCuts[i - 1];
      if (height > maxCutHeight) maxCutHeight = height;
    }
    if (i < verticalCuts.length) {
      const width = verticalCuts[i] - verticalCuts[i - 1];
      if (width > maxCutWidth) maxCutWidth = width;
    }
  }

  return Number(
    (BigInt(maxCutHeight) * BigInt(maxCutWidth)) % BigInt(10 ** 9 + 7),
  );
}

console.log(maxArea(5, 4, [1, 2, 4], [1, 3])); // 4
console.log(maxArea(5, 4, [3, 1], [1])); // 6
console.log(maxArea(5, 4, [3], [3])); // 9
console.log(maxArea(1000000000, 1000000000, [2], [2])); // 81
