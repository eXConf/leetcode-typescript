function smallestRangeII(nums: number[], k: number): number {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let gap = nums[len - 1] - nums[0];

  for (let i = 0; i < len - 1; i++) {
    const a = nums[i];
    const b = nums[i + 1];

    const high = Math.max(nums[len - 1] - k, a + k);
    const low = Math.min(nums[0] + k, b - k);

    gap = Math.min(gap, high - low);
  }

  return gap;
}

console.log(smallestRangeII([1], 0)); // 0
console.log(smallestRangeII([0, 10], 2)); // 6
console.log(smallestRangeII([1, 3, 6], 3)); // 3
console.log(smallestRangeII([3, 1, 10], 4)); // 2
