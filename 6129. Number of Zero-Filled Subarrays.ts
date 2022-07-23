function zeroFilledSubarray(nums: number[]): number {
  const map = new Map<number, number>();
  let sequenceLength = 0;

  nums.forEach(num => {
    if (num === 0) sequenceLength++;
    else {
      if (sequenceLength > 0) {
        map.set(sequenceLength, 1 + (map.get(sequenceLength) || 0));
      }
      sequenceLength = 0;
    }
  });
  if (sequenceLength > 0) {
    map.set(sequenceLength, 1 + (map.get(sequenceLength) || 0));
  }

  let result = 0;

  for (let [k, v] of map) {
    for (let i = 0; i < k; i++) {
      result += (k - i) * v;
    }
  }

  return result;
}

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])); // 6
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0])); // 9
console.log(zeroFilledSubarray([2, 10, 2019])); // 0
