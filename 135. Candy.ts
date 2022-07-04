function candy(ratings: number[]): number {
  const len = ratings.length;
  const l2r = Array(len).fill(1);
  const r2l = Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    if (i > 0) {
      if (ratings[i] > ratings[i - 1]) {
        l2r[i] = l2r[i - 1] + 1;
      }
    }
  }

  let result = 0;

  for (let i = len - 1; i >= 0; i--) {
    if (i < len - 1) {
      if (ratings[i] > ratings[i + 1]) {
        r2l[i] = r2l[i + 1] + 1;
      }
    }
    result += Math.max(l2r[i], r2l[i]);
  }

  return result;
}

function candy___brute(ratings: number[]): number {
  const len = ratings.length;
  const candies = Array(len).fill(1);
  let hasChanged = true;

  while (hasChanged) {
    hasChanged = false;

    for (let i = 0; i < len; i++) {
      if (i > 0) {
        if (ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
          candies[i] = candies[i - 1] + 1;
          hasChanged = true;
        }
      }

      if (i < len - 1) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
          candies[i] = candies[i + 1] + 1;
          hasChanged = true;
        }
      }
    }
  }

  return candies.reduce((prev, curr) => prev + curr);
}

console.log(candy([1, 0, 2])); // 5
console.log(candy([1, 2, 2])); // 4
console.log(candy([1, 3, 4, 2])); // 7
console.log(
  candy([
    1, 3, 4, 4, 4, 4, 9, 9, 9, 8, 19, 5, 3, 0, 0, 1, 3, 0, 1, 0, 1, 0, 10,
  ]),
); // 40
