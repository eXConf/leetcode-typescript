function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[1] - nums[0];
  const median = nums[Math.floor(nums.length / 2)];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const diff = median - nums[i];
    nums[i] += diff;
    count += Math.abs(diff);
  }
  return count;
}

console.log(minMoves2([1, 2, 3])); // 2
console.log(minMoves2([1, 10, 2, 9])); // 16
console.log(minMoves2([1, 0, 0, 8, 6])); // 14
console.log(minMoves2([5, 0, 0, 0, 0])); // 5
