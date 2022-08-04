function findShortestSubArray(nums: number[]): number {
  const map = new Map<number, number[]>();

  nums.forEach((val, idx) => {
    if (!map.has(val)) {
      map.set(val, [1, idx, idx]);
    } else {
      const [count, start] = map.get(val)!;
      map.set(val, [count + 1, start, idx]);
    }
  });

  let maxCount = 0;
  let shortest = Number.POSITIVE_INFINITY;

  for (let [k, v] of map) {
    const [count, start, end] = v;
    const length = end - start + 1;

    if (count > maxCount) {
      maxCount = count;
      shortest = length;
    } else if (count === maxCount && length < shortest) {
      shortest = length;
    }
  }

  return shortest;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // 6
